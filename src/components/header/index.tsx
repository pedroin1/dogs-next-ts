import Link from "next/link";
import "./index.scss";
import Image from "next/image";

export default function HeaderComponent() {
  const user = false;

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
        {user ? (
          <Link className="login-header" href={"/conta"}>
            Conta do Usuario
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
