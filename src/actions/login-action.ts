"use server";

import TOKEN_POST from "@/functions/api";
import apiError from "@/functions/error-api";
import { cookies } from "next/headers";

export default async function loginUserAction(
  username: string,
  password: string
) {
  try {
    const { url } = TOKEN_POST();
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    });

    if (!response.ok) {
      throw new Error("Senha ou usuario invalidos");
    }

    const data = await response.json();
    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 1,
    });

    return { data: null, ok: true, error: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
