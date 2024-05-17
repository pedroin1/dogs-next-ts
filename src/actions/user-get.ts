import { GET_USER } from "@/functions/api";
import handleErrorApi from "@/functions/error-api";
import handleSuccsesApi from "@/functions/sucsess-api";
import { User } from "@/types/types";
import { cookies } from "next/headers";

export default async function getUser() {
  const { url } = GET_USER();
  const token = cookies().get("token")?.value;

  try {
    if (!token) {
      throw new Error("Token de acesso incorreto ou não existente");
    } else {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        next: {
          revalidate: 60,
        },
      });

      if (!response.ok) throw new Error(`Erro ao logar com o usuario`);
      const dataUser = (await response.json()) as User;
      return handleSuccsesApi(dataUser);
    }
  } catch (error) {
    return handleErrorApi(error);
  }
}
