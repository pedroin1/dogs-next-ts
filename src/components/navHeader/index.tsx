"use client";

import logoutUser from "@/actions/logout-user";
import { useUser } from "@/context/user-context";
import useMedia from "@/hooks/use-media";
import AdicionarIcon from "@/icons/adicionarIcon";
import EstatisticasIcon from "@/icons/estisticasIcon";
import FeedIcon from "@/icons/feedIcon";
import SairIcon from "@/icons/sairIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./index.scss";

export default function MenuContaNav() {
  const pathname = usePathname();
  const { setUser } = useUser();
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleLogout = async () => {
    setUser(null);
    await logoutUser();
  };

  const handleGetTitle = (pathname: string) => {
    switch (pathname) {
      case "/conta/postar":
        return "Poste Sua Foto";

      case "/conta/estatisticas":
        return "Estatísticas";

      default:
        return "Minha Conta";
    }
  };

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className="nav-header-container">
      <h1 className="title">{handleGetTitle(pathname)}</h1>

      {mobileMenu && (
        <button
          aria-label="Menu"
          className={`mobileButton ${mobile && "mobileButtonActive"}`}
        ></button>
      )}

      <nav
        className={`${mobile ? "mobileMenu" : "nav"} ${
          mobileMenu ? "navMobileActive" : ""
        }`}
      >
        <Link href={"/conta"} className={pathname === "/conta" ? "active" : ""}>
          <FeedIcon />
          {mobile && "Minhas Fotos"}
        </Link>
        <Link
          href={"/conta/estatisticas"}
          className={pathname === "/conta/estatisticas" ? "active" : ""}
        >
          <EstatisticasIcon />
          {mobile && "Estatísticas"}
        </Link>
        <Link
          href={"/conta/postar"}
          className={pathname === "/conta/postar" ? "active" : ""}
        >
          <AdicionarIcon />
          {mobile && "Postar Foto"}
        </Link>
        <button onClick={handleLogout}>
          <SairIcon />
          {mobile && "Sair"}
        </button>
      </nav>
    </header>
  );
}
