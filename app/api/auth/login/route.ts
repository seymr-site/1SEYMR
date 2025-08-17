import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const redirect = req.nextUrl.searchParams.get("redirect") || "/salon-prive";
  const expected = process.env.SALON_CODE || "CHANGE_ME";
  const secret = process.env.SALON_JWT_SECRET || "CHANGE_ME_SECRET";

  if (!code) {
    return new NextResponse(
      `<!doctype html>
       <html><body style="font-family:system-ui;padding:24px">
        <h1>Accès Salon Privé</h1>
        <form method="POST">
          <input name="code" placeholder="Code d’accès" />
          <button type="submit">Entrer</button>
        </form>
       </body></html>`,
      { headers: { "content-type": "text/html" } }
    );
  }

  if (code !== expected) {
    return NextResponse.json({ ok: false, error: "Code invalide" }, { status: 401 });
  }

  const token = jwt.sign({ scope: "salon" }, secret, { expiresIn: "12h" });
  const res = NextResponse.redirect(new URL(redirect, req.url));
  res.cookies.set("sid", token, { httpOnly: true, secure: true, sameSite: "lax", maxAge: 60 * 60 * 12, path: "/" });
  return res;
}

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const code = String(data.get("code") || "");
  return NextResponse.redirect(new URL(`/api/auth/login?code=${encodeURIComponent(code)}`, req.url));
}
