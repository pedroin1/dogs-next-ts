"use server";

import { GET_PHOTOS } from "@/functions/api";

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

export async function GetPhotosDogs() {
  const { url } = GET_PHOTOS();
  const response = await fetch(url, {
    next: { revalidate: 10, tags: ["revalidatePhotos"] },
  });
  const data = (await response.json()) as Photo[];
  return data;
}
