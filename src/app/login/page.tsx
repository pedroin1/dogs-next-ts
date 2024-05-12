import LoginForm from "@/components/loginForm";
import { Metadata } from "next";
import "./page.scss";

export const metadata: Metadata = {
  title: "Login | Dogs",
  description: "Logue na sua conta no site dogs",
};

export default async function LoginPage() {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  );
}
