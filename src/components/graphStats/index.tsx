"use client";

import { Statistics } from "@/types/types";
import { useEffect, useState } from "react";
import { VictoryBar, VictoryChart, VictoryPie } from "victory";
import "./index.scss";

export default function GraphStats({ data }: Props) {
  const [graph, setGraph] = useState<GraphData[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const dataGraph = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    //setTotal(data.reduce((acc, { acessos }) => acc + Number(acessos), 0));
    setTotal(5);
    setGraph(dataGraph);
  }, [data]);

  return (
    <section className="graph">
      <div className="graphItem total">acessos: {total}</div>
      <div className="graphItem">
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className="graphItem">
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
}

type Props = {
  data: Statistics[];
};

type GraphData = {
  x: string;
  y: number;
};
