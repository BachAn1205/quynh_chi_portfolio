import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "src", "data", "honors-cards.json");

const DEFAULT_CONTENT = `Đạt Top 5 Tuyển chọn Toàn quốc (Xếp hạng 3 Quốc gia) tham gia Đội tuyển Olympic Kinh tế Quốc tế (IEO) cả 2 năm 2025 & 2026; Huy chương Đồng Quốc gia (National Bronze Medalist) tại Vietnam Economics Olympiad (VEO) 2025 & 2026.

Lọt vào Chung kết Toàn cầu (Top 30/2000 đội thi toàn thế giới) - Đội thi duy nhất đại diện Việt Nam được mời tham dự vòng chung kết trực tiếp tại khuôn viên Đại học Harvard (Mỹ). Đảm nhận vai trò Trưởng nhóm Tài chính & Chiến lược (Team Lead - Finance & Strategy), đồng phát triển mô hình tài chính dự báo doanh thu và bảng điều khiển mô phỏng CAC/LTV.

Đạt Giải Bạc (Silver Award) khu vực Châu Á & Châu Đại Dương và Top 10 Kiến thức Nền tảng (Top 10 Fundamentals) tại World Economics Cup (WEC 2025); Trưởng nhóm đưa đội lọt vào Top 10 Chung kết Toàn quốc (Top 10 Grand Final) tại Vietnam Business Innovation Challenge (VBIC 2025).

Top 50 Toàn quốc Học bổng ACCA Futurist 2025 (học bổng danh giá dành cho tài năng tài chính trẻ); Top 4 Cá nhân Vòng Chung kết phân ban Thương mại cuộc thi Aspiring Vietnam Contest 2025; Quán quân Toàn quốc giải Tranh biện DAS-DO Debate Open 2025 (4th Seed); Best Position Paper tại Hội nghị Mô phỏng LHQ VSGMUN 2026 (UNHCR).`;

export async function GET() {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    const parsed = JSON.parse(raw);

    if (Array.isArray(parsed)) {
      return NextResponse.json({
        cards: parsed,
        textContent: DEFAULT_CONTENT,
      }, {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        },
      });
    }

    return NextResponse.json({
      cards: parsed.cards || [],
      textContent: parsed.textContent || DEFAULT_CONTENT,
    }, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      },
    });
  } catch (err) {
    console.error("GET honors cards error:", err);
    return NextResponse.json({ cards: [], textContent: DEFAULT_CONTENT }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let toSave: any;

    if (Array.isArray(body)) {
      toSave = { cards: body, textContent: DEFAULT_CONTENT };
    } else if (typeof body === "object" && body !== null) {
      toSave = {
        cards: body.cards || [],
        textContent: body.textContent !== undefined ? body.textContent : DEFAULT_CONTENT,
      };
    } else {
      return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
    }

    await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
    await fs.writeFile(DATA_PATH, JSON.stringify(toSave, null, 2), "utf-8");

    return NextResponse.json({ success: true, data: toSave });
  } catch (err) {
    console.error("POST honors cards error:", err);
    return NextResponse.json({ error: "Failed to save honors cards" }, { status: 500 });
  }
}
