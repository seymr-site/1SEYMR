import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
  if (!STRIPE_KEY) {
    return NextResponse.json({ ok: true, url: "#" }); // mode placeholder
  }
  const { priceId = process.env.STRIPE_PRICE_MUN, quantity = 1 } = await req.json().catch(() => ({}));
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const r = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: { Authorization: `Bearer ${STRIPE_KEY}`, "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      mode: "payment",
      success_url: `${origin}/?ok=1`,
      cancel_url: `${origin}/?canceled=1`,
      "line_items[0][price]": String(priceId || ""),
      "line_items[0][quantity]": String(quantity),
    }),
  });

  const data = await r.json();
  if (!r.ok) return NextResponse.json({ ok: false, error: data?.error?.message || "stripe error" }, { status: 400 });
  return NextResponse.json({ ok: true, url: data.url });
}
