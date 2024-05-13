import type { Metadata } from "next";
import { spectral } from "./fonts";
import "./globals.scss";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import { UserContextProvider } from "@/context/user-context";
import getUser from "@/actions/user-get";

export const metadata: Metadata = {
  title: "Home | Dogs",
  description: "A rede social para o seu cachorro!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await getUser();

  return (
    <html lang="pt-BR">
      <body className={`mainContainer ${spectral.className}`}>
        <UserContextProvider user={user}>
          <HeaderComponent />
          <main className="App">{children}</main>
          <FooterComponent />
        </UserContextProvider>
      </body>
    </html>
  );
}
