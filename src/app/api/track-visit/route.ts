import { NextResponse } from "next/server";
import { recordMetric } from "@/lib/site-admin";

export const dynamic = "force-dynamic";

const ALLOWED_NAMES = new Set(["visit_10s"]);

export async function POST(req: Request) {
  let body: { name?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name : "";
  if (!ALLOWED_NAMES.has(name)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  void recordMetric(name);

  return NextResponse.json({ ok: true });
}
