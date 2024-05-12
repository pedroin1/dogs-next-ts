import ResetarSenhaForm from "@/components/resetarSenhaForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar Senha | Dogs",
  description: "Pagina de resetar senha",
};

export default async function ResetarSenhaPage() {
  return (
    <section className="animeLeft">
      <h1 className="title">Resete sua Senha</h1>
      <ResetarSenhaForm />
    </section>
  );
}
