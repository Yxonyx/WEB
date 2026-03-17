import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["hu", "en"];
const defaultLocale = "hu";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files
  ) {
    return NextResponse.next();
  }

  // Skip special non-localized routes
  if (
    pathname.startsWith("/geo-tudasanyag") ||
    pathname.startsWith("/qr") ||
    pathname.startsWith("/wealth-demo")
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect root to /hu/
  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}/`, request.url)
    );
  }

  // For any other unlocalized path, redirect to default locale
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    // Match all paths except _next/static, _next/image, and files with extensions
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
