import { Metadata } from "next";
import CriarLoginForm from "@/components/criarLoginForm";
import "./page.scss";

export const metadata: Metadata = {
  title: "Crie sua conta",
  description: "Crie sua conta no site dogs",
};

export default async function CriarLoginPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Pagina de criar login</h1>
      <CriarLoginForm />
    </div>
  );
}
