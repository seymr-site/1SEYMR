import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PREFIX = "/salon-prive";
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith(PROTECTED_PREFIX)) {
    const sid = req.cookies.get("sid")?.value;
    if (!sid) {
      const url = req.nextUrl.clone();
      url.pathname = "/api/auth/login";
      url.searchParams.set("redirect", pathname);
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/salon-prive/:path*"],
};
