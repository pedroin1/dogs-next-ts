"use server";

import { POST_PHOTO } from "@/functions/api";
import handleErrorApi from "@/functions/error-api";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function photoPost(state: {}, formData: FormData) {
  const nome = formData.get("nome") as string | null;
  const idade = formData.get("idade") as number | null;
  const peso = formData.get("peso") as number | null;
  const img = formData.get("img") as File;

  try {
    if (!nome || !idade || !peso || !img) {
      throw new Error("Preencha todos os dados dos campos.");
    }

    const { url } = POST_PHOTO();
    const token = cookies().get("token")?.value;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Erro ao postar foto");
    }
  } catch (error) {
    return handleErrorApi(error);
  }

  revalidateTag("photos");
  redirect("/conta");
}
