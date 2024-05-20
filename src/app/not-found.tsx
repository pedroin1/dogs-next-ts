import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "15% auto",
      }}
    >
      <h1 className="title">Página Não Encontrada</h1>
      <Link style={{ alignSelf: "center" }} className="button" href={"/"}>
        Pagina principal
      </Link>
    </section>
  );
}
