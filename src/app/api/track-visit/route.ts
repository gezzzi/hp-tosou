import { NextResponse } from "next/server";
import { recordMetric } from "@/lib/site-admin";

export const dynamic = "force-dynamic";

const ALLOWED_NAMES = new Set(["page_view", "session"]);

export async function POST(req: Request) {
  let body: { name?: unknown; page?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name : "";
  const page =
    typeof body.page === "string" ? body.page.slice(0, 200) : "/";

  if (!ALLOWED_NAMES.has(name)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  void recordMetric(name, { dimensions: { page } });

  return NextResponse.json({ ok: true });
}
