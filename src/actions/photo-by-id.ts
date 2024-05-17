"use server";

import { GET_PHOTO_BY_ID } from "@/functions/api";
import handleErrorApi from "@/functions/error-api";
import { PhotoAndComments } from "@/types/types";

export default async function getPhotoById(id: number) {
  try {
    const { url } = GET_PHOTO_BY_ID(id);
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) throw "Erro ao buscar esta foto";

    const data = (await response.json()) as PhotoAndComments;
    return data;
  } catch (error: unknown) {
    handleErrorApi(error);
  }
}
