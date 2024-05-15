"use server";

import { POST_PHOTO } from "@/functions/api";
import handleErrorApi from "@/functions/error-api";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function photoPost(
  nome: string,
  idade: number,
  peso: number,
  image: string
) {
  try {
    if (!nome && !idade && !peso && !image) {
      throw new Error("Prencha todos os dados dos campos.");
    }

    const { url } = POST_PHOTO();
    const token = cookies().get("token")?.value;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        nome: nome,
        idade: idade,
        peso: peso,
        img: Buffer.from(image, "base64"),
      }),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao postar foto");
    }
  } catch (error) {
    return handleErrorApi(error);
  }

  revalidateTag("revalidatePhotos");
  redirect("/");
}
