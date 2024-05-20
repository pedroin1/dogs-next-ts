import getStatistics from "@/actions/get-stats";
import { Metadata } from "next";
import dynamic from "next/dynamic";

//lazy loading Components
const GraphStats = dynamic(() => import("@/components/graphStats"), {
  loading: () => (
    <span style={{ fontSize: "22px" }}>Carregando graficos...</span>
  ),
  ssr: false,
});

export const metadata: Metadata = {
  title: "Estatísticas | Dogs",
  description: "Pagina de estatisticas",
};

export default async function EstatisticasPage() {
  const { data } = await getStatistics();

  return <section>{data && <GraphStats data={data} />}</section>;
}
