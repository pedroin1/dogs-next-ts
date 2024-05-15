import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estatísticas | Dogs",
  description: "Pagina de estatisticas",
};

export default async function EstatisticasPage() {
  return (
    <div>
      <h1>Pagina de estatisticas</h1>
    </div>
  );
}
