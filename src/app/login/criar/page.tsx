import CriarLoginForm from "@/components/criarLoginForm";
import { Metadata } from "next";
import "./page.scss";

export const metadata: Metadata = {
  title: "Crie sua conta | Dogs",
  description: "Crie sua conta no site dogs",
};

export default async function CriarLoginPage() {
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <CriarLoginForm />
    </section>
  );
}
