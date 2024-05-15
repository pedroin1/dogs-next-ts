import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Minha Conta | Dogs",
  description: "Pagina da conta",
};

export default function ContaPage() {
  return <div>test</div>;
}
