//middleware e uma funçao que roda antes do carregamento da pagina
// ele intercepta requisicoes
// pode ser usada para autenticacao, logs, redirecionamento e etc...

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

//funcao que intercepta as rotas da da pagina
export function middleware(request: NextRequest, response: NextResponse) {
  //exemplo de validacao via token
  const token = request.cookies.get("token")?.value;

  if (token) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url)); // redirecionando sempre para a pagina inicial
  }
}

//por default se n tiver matcher ele vai aplicat middleware para todas as rotas
export const config = {
  matcher: ["/imagens"], // serve para limitar a quais rotas serao aplicadas o middlware, ou seja serao interceptadas

  //exemplos de config dfo matcher
  // ["/imagens"] //uma rota
  // ["/imagens", "/carros"] // duas rotas
  // ["/imagens/:path*] rotdas as rotas ddepois de /imagens
  // ["/(.*)] // rotas as rotas depois de /
  // ["/regex"] pode criar regex para validar as rotas
};
