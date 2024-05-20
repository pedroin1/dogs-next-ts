"use server";
import { ADD_COMMENT } from "@/functions/api";
import handleErrorApi from "@/functions/error-api";
import handleSuccsesApi from "@/functions/sucsess-api";
import { CommentPhoto } from "@/types/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export default async function addComment(idPhoto: number, comment: string) {
  try {
    const formData = new FormData();
    formData.append("comment", comment);
    formData.append("id", idPhoto.toString());

    const token = cookies().get("token")?.value;
    const { url } = ADD_COMMENT(idPhoto);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Não foi possivel enviar este comentario");
    }

    const data = (await response.json()) as CommentPhoto;
    revalidateTag("revalidatePhotos");
    return handleSuccsesApi(data);
  } catch (error: unknown) {
    return handleErrorApi(error);
  }
}
