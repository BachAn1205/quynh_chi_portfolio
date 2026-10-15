import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import {
  getServiceSupabase,
  isSupabaseConfigured,
  HONORS_CARDS_TABLE,
  HONORS_SETTINGS_TABLE,
} from "@/lib/supabase";

const DATA_PATH = path.join(process.cwd(), "src", "data", "honors-cards.json");

const DEFAULT_CONTENT = `Đạt Top 5 Tuyển chọn Toàn quốc (Xếp hạng 3 Quốc gia) tham gia Đội tuyển Olympic Kinh tế Quốc tế (IEO) cả 2 năm 2025 & 2026; Huy chương Đồng Quốc gia (National Bronze Medalist) tại Vietnam Economics Olympiad (VEO) 2025 & 2026.

Lọt vào Chung kết Toàn cầu (Top 30/2000 đội thi toàn thế giới) - Đội thi duy nhất đại diện Việt Nam được mời tham dự vòng chung kết trực tiếp tại khuôn viên Đại học Harvard (Mỹ). Đảm nhận vai trò Trưởng nhóm Tài chính & Chiến lược (Team Lead - Finance & Strategy), đồng phát triển mô hình tài chính dự báo doanh thu và bảng điều khiển mô phỏng CAC/LTV.

Đạt Giải Bạc (Silver Award) khu vực Châu Á & Châu Đại Dương và Top 10 Kiến thức Nền tảng (Top 10 Fundamentals) tại World Economics Cup (WEC 2025); Trưởng nhóm đưa đội lọt vào Top 10 Chung kết Toàn quốc (Top 10 Grand Final) tại Vietnam Business Innovation Challenge (VBIC 2025).

Top 50 Toàn quốc Học bổng ACCA Futurist 2025 (học bổng danh giá dành cho tài năng tài chính trẻ); Top 4 Cá nhân Vòng Chung kết phân ban Thương mại cuộc thi Aspiring Vietnam Contest 2025; Quán quân Toàn quốc giải Tranh biện DAS-DO Debate Open 2025 (4th Seed); Best Position Paper tại Hội nghị Mô phỏng LHQ VSGMUN 2026 (UNHCR).`;

export async function GET() {
  try {
    // 1. Prioritize querying Supabase Cloud Database
    if (isSupabaseConfigured()) {
      const supabase = getServiceSupabase();
      if (supabase) {
        const { data: dbCards, error: cardsError } = await supabase
          .from(HONORS_CARDS_TABLE)
          .select("*")
          .order("display_order", { ascending: true });

        const { data: dbSettings } = await supabase
          .from(HONORS_SETTINGS_TABLE)
          .select("value")
          .eq("key", "honors_text_content")
          .maybeSingle();

        if (!cardsError && dbCards && dbCards.length > 0) {
          const mappedCards = dbCards.map((c) => ({
            id: isNaN(Number(c.id)) ? c.id : Number(c.id),
            slotId: c.slot_id,
            title: c.title ?? "",
            subtitle: c.subtitle ?? "",
            description: c.description ?? "",
          }));

          const textContent =
            dbSettings?.value && dbSettings.value.trim()
              ? dbSettings.value
              : DEFAULT_CONTENT;

          return NextResponse.json(
            {
              cards: mappedCards,
              textContent,
              source: "supabase",
            },
            {
              headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
              },
            }
          );
        } else if (cardsError) {
          console.warn("Supabase GET honors cards error:", cardsError.message);
        }
      }
    }

    // 2. Fallback to local JSON file
    try {
      const raw = await fs.readFile(DATA_PATH, "utf-8");
      const parsed = JSON.parse(raw);

      if (Array.isArray(parsed)) {
        return NextResponse.json(
          {
            cards: parsed,
            textContent: DEFAULT_CONTENT,
            source: "local-file",
          },
          {
            headers: {
              "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
            },
          }
        );
      }

      return NextResponse.json(
        {
          cards: parsed.cards || [],
          textContent: parsed.textContent || DEFAULT_CONTENT,
          source: "local-file",
        },
        {
          headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
          },
        }
      );
    } catch {
      return NextResponse.json(
        { cards: [], textContent: DEFAULT_CONTENT, source: "default" },
        {
          headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
          },
        }
      );
    }
  } catch (err) {
    console.error("GET honors cards error:", err);
    return NextResponse.json(
      { cards: [], textContent: DEFAULT_CONTENT },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let cardsToSave: any[] = [];
    let textContentToSave: string = DEFAULT_CONTENT;

    if (Array.isArray(body)) {
      cardsToSave = body;
    } else if (typeof body === "object" && body !== null) {
      cardsToSave = Array.isArray(body.cards) ? body.cards : [];
      if (typeof body.textContent === "string") {
        textContentToSave = body.textContent;
      }
    } else {
      return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
    }

    const savedPayload = {
      cards: cardsToSave,
      textContent: textContentToSave,
    };

    // 1. Persist to Supabase Database
    let savedToSupabase = false;
    if (isSupabaseConfigured()) {
      const supabase = getServiceSupabase();
      if (supabase) {
        // Upsert cards into honors_cards
        if (cardsToSave.length > 0) {
          const cardRows = cardsToSave.map((card, idx) => ({
            id: String(card.id || idx + 1),
            slot_id: card.slotId || `mind-honors-${idx + 1}`,
            title: card.title ?? "",
            subtitle: card.subtitle ?? "",
            description: card.description ?? "",
            display_order: idx,
            updated_at: new Date().toISOString(),
          }));

          const { error: cardsUpsertError } = await supabase
            .from(HONORS_CARDS_TABLE)
            .upsert(cardRows);

          if (cardsUpsertError) {
            console.error("Supabase upsert honors cards error:", cardsUpsertError);
          } else {
            savedToSupabase = true;
          }
        }

        // Upsert textContent into honors_settings
        if (textContentToSave !== undefined) {
          const { error: settingsError } = await supabase
            .from(HONORS_SETTINGS_TABLE)
            .upsert({
              key: "honors_text_content",
              value: textContentToSave,
              updated_at: new Date().toISOString(),
            });

          if (settingsError) {
            console.error("Supabase upsert honors settings error:", settingsError);
          }
        }
      }
    }

    // 2. Keep local JSON file in sync as backup
    try {
      await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
      await fs.writeFile(
        DATA_PATH,
        JSON.stringify(savedPayload, null, 2),
        "utf-8"
      );
    } catch (fsErr) {
      console.warn("Could not save to local filesystem (likely read-only serverless):", fsErr);
    }

    return NextResponse.json({
      success: true,
      savedToSupabase,
      data: savedPayload,
    });
  } catch (err) {
    console.error("POST honors cards error:", err);
    return NextResponse.json(
      { error: "Failed to save honors cards" },
      { status: 500 }
    );
  }
}
