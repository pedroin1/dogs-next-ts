"use server";

import { GET_PHOTOS } from "@/functions/api";
import handleErrorApi from "@/functions/error-api";
import handleSuccsesApi from "@/functions/sucsess-api";

export interface Photo {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: number;
  idade: number;
  acessos: number;
  total_comments: number;
}

interface Props {
  page?: number;
  total?: number;
  usuario?: 0 | string;
  optionFront?: RequestInit;
}

export async function GetPhotosDogs({
  page = 1,
  total = 6,
  usuario = 0,
  optionFront,
}: Props) {
  try {
    const { url } = GET_PHOTOS(page, total, usuario);

    const optionRequest = optionFront || {
      next: { revalidate: 10, tags: ["revalidatePhotos"] },
    };
    const response = await fetch(url, optionRequest);

    if (!response.ok) {
      throw new Error("Ocorreu um erro ao listar as fotos");
    }

    const data = (await response.json()) as Photo[];
    return handleSuccsesApi(data);
  } catch (error: unknown) {
    return handleErrorApi(error);
  }
}
