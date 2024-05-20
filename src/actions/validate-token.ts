"use server";

import { VALIDATE_TOKEN } from "@/functions/api";
import handleErrorApi from "@/functions/error-api";
import handleSuccsesApi from "@/functions/sucsess-api";
import { cookies } from "next/headers";

export default async function validateToken() {
  try {
    const token = cookies().get("token")?.value;
    const { url } = VALIDATE_TOKEN();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) throw new Error("Token invalido!");
    const data = await response.json();

    return handleSuccsesApi(data);
  } catch (error: unknown) {
    return handleErrorApi(error);
  }
}
