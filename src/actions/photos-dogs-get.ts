"use server";

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
  const response = await fetch(
    "https://dogsapi.origamid.dev/json/api/photo/?_page1&_total=6&_user=0"
  );
  const data = (await response.json()) as Photo[];
  return data;
}
