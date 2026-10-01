import { NextResponse } from "next/server";
import { getServiceSupabase, isSupabaseConfigured } from "@/lib/supabase";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const pagePath = searchParams.get("page_path");

    if (!isSupabaseConfigured()) {
      return NextResponse.json({
        reviews: [],
        warning: "Supabase chưa được cấu hình.",
      });
    }

    const supabase = getServiceSupabase();
    if (!supabase) {
      return NextResponse.json({ reviews: [] });
    }

    let query = supabase
      .from("website_reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (pagePath && pagePath !== "all") {
      query = query.eq("page_path", pagePath);
    }

    const { data, error } = await query;
    if (error) {
      console.error("Error fetching reviews:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ reviews: data || [] });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { page_path, selected_text, element_context, comment, reviewer_name } = body;

    if (!page_path || !comment) {
      return NextResponse.json(
        { error: "Vui lòng nhập đầy đủ trang và nội dung nhận xét." },
        { status: 400 }
      );
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        { error: "Supabase chưa được cấu hình." },
        { status: 503 }
      );
    }

    const supabase = getServiceSupabase();
    if (!supabase) {
      return NextResponse.json({ error: "Lỗi kết nối Supabase" }, { status: 500 });
    }

    const { data, error } = await supabase
      .from("website_reviews")
      .insert({
        page_path,
        selected_text: selected_text ? String(selected_text).slice(0, 1000) : null,
        element_context: element_context ? String(element_context).slice(0, 500) : null,
        comment: String(comment).trim(),
        reviewer_name: reviewer_name ? String(reviewer_name).trim() : "Reviewer",
        status: "pending",
      })
      .select()
      .single();

    if (error) {
      console.error("Error creating review:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, review: data });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "Thiếu ID hoặc trạng thái nhận xét." },
        { status: 400 }
      );
    }

    const supabase = getServiceSupabase();
    if (!supabase) {
      return NextResponse.json({ error: "Lỗi kết nối Supabase" }, { status: 500 });
    }

    const { data, error } = await supabase
      .from("website_reviews")
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating review:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, review: data });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const ids = searchParams.get("ids");
    const status = searchParams.get("status");

    const supabase = getServiceSupabase();
    if (!supabase) {
      return NextResponse.json({ error: "Lỗi kết nối Supabase" }, { status: 500 });
    }

    // 1. Batch delete by list of IDs
    if (ids) {
      const idList = ids.split(",").map((s) => s.trim()).filter(Boolean);
      if (idList.length === 0) {
        return NextResponse.json({ error: "Danh sách ID rỗng." }, { status: 400 });
      }
      const { error } = await supabase.from("website_reviews").delete().in("id", idList);
      if (error) {
        console.error("Error batch deleting reviews by IDs:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true, count: idList.length });
    }

    // 2. Batch delete by status (e.g. status=resolved)
    if (status) {
      const { error } = await supabase.from("website_reviews").delete().eq("status", status);
      if (error) {
        console.error("Error batch deleting reviews by status:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true, deletedStatus: status });
    }

    // 3. Single delete by id
    if (!id) {
      return NextResponse.json({ error: "Thiếu ID hoặc tiêu chí nhận xét cần xóa." }, { status: 400 });
    }

    const { error } = await supabase
      .from("website_reviews")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting review:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
