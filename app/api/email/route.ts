import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { to = process.env.EMAIL_TO || process.env.EMAIL_FROM, subject = "Message SEYMR", text = "" } = body;

    const key = process.env.SENDGRID_API_KEY;
    if (!key) return NextResponse.json({ ok: false, reason: "SENDGRID_API_KEY missing" }, { status: 200 });

    const r = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: to }] }],
        from: { email: process.env.EMAIL_FROM || "no-reply@seymr.art", name: process.env.EMAIL_FROM_NAME || "SEYMR" },
        subject,
        content: [{ type: "text/plain", value: text }],
      }),
    });

    if (!r.ok) throw new Error(`SendGrid ${r.status}`);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "error" }, { status: 200 });
  }
}
