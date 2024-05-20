import PerdeuSenhaForm from "@/components/perdeuSenhaForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Pagina de perdeu a senha",
};

export default async function PerdeuSenhaPage() {
  return (
    <section className="animeLeft">
      <div style={{ marginBottom: "12px" }}>
        <h1 className="title">Perdeu a Senha?</h1>
        <span style={{ fontSize: "18px" }}>
          Informe seu email e clique no botão abaixo para enviarmos uma nova
          senha!
        </span>
      </div>
      <PerdeuSenhaForm />
    </section>
  );
}
