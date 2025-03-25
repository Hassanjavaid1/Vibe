import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path == "/api/auth/signin";
  const token =
    (await request.cookies.get("next-auth.session-token")?.value) || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (path === "/cms") {
    let token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token || token.email !== process.env.ADMIN) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/cms", "/api/auth/signin"],
};
