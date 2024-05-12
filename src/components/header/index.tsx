import Link from "next/link";
import "./index.scss";
import Image from "next/image";
import getUser from "@/actions/user-get";

export default async function HeaderComponent() {
  const { data } = await getUser();

  return (
    <header className="header-container">
      <nav className="nav-header">
        <Link className="logo-header" href={"/"}>
          <Image
            alt="dogImage"
            src={"/assets/dogs.svg"}
            width={28}
            height={22}
            priority
          />
        </Link>
        {data ? (
          <Link className="login-header" href={"/login"}>
            {data.nome}
          </Link>
        ) : (
          <Link className="login-header" href={"/login"}>
            Criar/Login
          </Link>
        )}
      </nav>
    </header>
  );
}
