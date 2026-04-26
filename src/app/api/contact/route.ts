import { NextResponse } from "next/server";
import { submitSiteAdminEvent } from "@/lib/site-admin";

export const dynamic = "force-dynamic";

type ContactBody = Record<string, unknown>;

function pickString(body: ContactBody, key: string, max: number): string | null {
  const v = body[key];
  if (typeof v !== "string") return null;
  const trimmed = v.trim();
  if (trimmed.length === 0 || trimmed.length > max) return null;
  return trimmed;
}

export async function POST(req: Request) {
  let body: ContactBody;
  try {
    body = (await req.json()) as ContactBody;
  } catch {
    return NextResponse.json({ success: false, error: "invalid_json" }, { status: 400 });
  }

  const customerType = pickString(body, "お客様種別", 16) ?? "個人";
  const companyName = pickString(body, "会社名", 200);
  const representativeName = pickString(body, "代表者氏名", 100);
  const personalName = pickString(body, "お名前", 100);
  const furigana = pickString(body, "フリガナ", 100);
  const phone = pickString(body, "電話番号", 30);
  const email = pickString(body, "メールアドレス", 200);
  const address = pickString(body, "ご住所", 300);
  const serviceType = pickString(body, "ご依頼内容", 64);
  const messageBody = pickString(body, "お問い合わせ内容", 5000);

  const displayName =
    customerType === "法人"
      ? representativeName ?? companyName ?? null
      : personalName ?? null;

  if (!email || !phone || !displayName || !address || !serviceType) {
    return NextResponse.json({ success: false, error: "invalid_fields" }, { status: 400 });
  }

  const result = await submitSiteAdminEvent({
    type: "contact_form",
    payload: {
      // English keys for inbox preview rendering
      name: displayName,
      email,
      message: messageBody ?? `${serviceType}（${customerType}）`,
      // Full record
      customer_type: customerType,
      company_name: companyName,
      representative_name: representativeName,
      personal_name: personalName,
      furigana,
      phone,
      address,
      service_type: serviceType,
      message_body: messageBody,
      source: "maruyo-shizuoka.com",
    },
  });

  if (!result.ok) {
    return NextResponse.json(
      { success: false, error: result.error ?? "site_admin_failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, id: result.id });
}
