import type { Metadata } from "next";
import { spectral } from "./fonts";
import "./globals.css";

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
      <body className={spectral.className}>{children}</body>
    </html>
  );
}
