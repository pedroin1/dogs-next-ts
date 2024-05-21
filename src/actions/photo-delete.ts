"use server";

import { DELETE_PHOTO } from "@/functions/api";
import handleErrorApi from "@/functions/error-api";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function photoDelete(id: number) {
  try {
    const { url } = DELETE_PHOTO(id);
    const token = cookies().get("token")?.value;

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao deletar foto");
    }
  } catch (error) {
    return handleErrorApi(error);
  }

  revalidateTag("photos");
  redirect("/conta");
}
