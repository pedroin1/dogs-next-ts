import type { Metadata } from "next";
import { spectral } from "./fonts";
import "./globals.scss";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "A rede social para o seu cachorro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`mainContainer ${spectral.className}`}>
        <HeaderComponent />
        <main className="App">{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
