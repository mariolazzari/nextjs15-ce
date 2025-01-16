import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // return NextResponse.redirect(new URL("/", req.url));
  if (req.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/hello", req.nextUrl));
  }

  const res = NextResponse.next();
  res.headers.set("custom-header", "custom-value");
}

export const config = {
  matcher: "/profile",
};
