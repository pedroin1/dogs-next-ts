import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  const token = request.cookies.get("token")?.value;
  const authenticated = token ? true : false;

  if (!authenticated && request.nextUrl.pathname.startsWith("/conta")) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (authenticated && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/conta", request.url)); // redirecionando sempre para a pagina inicial
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/conta/:path*", "/login/:path*"], //configurando middleware para as urls de conta
};
