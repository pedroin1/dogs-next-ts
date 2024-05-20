"use server";

import { GET_STATS } from "@/functions/api";
import handleErrorApi from "@/functions/error-api";
import handleSuccsesApi from "@/functions/sucsess-api";
import { Statistics } from "@/types/types";
import { cookies } from "next/headers";

export default async function getStatistics() {
  try {
    const { url } = GET_STATS();
    const token = cookies().get("token")?.value;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error("Erro ao buscar as estatisticas");
    const data = (await response.json()) as Statistics[];
    return handleSuccsesApi(data);
  } catch (error: unknown) {
    return handleErrorApi(error);
  }
}
