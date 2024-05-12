"use server";

import { USER_POST } from "@/functions/api";
import loginUserAction from "./login-action";
import handleSuccsesApi from "@/functions/sucsess-api";
import handleErrorApi from "@/functions/error-api";

export default async function createUser(
  username: string,
  email: string,
  password: string
) {
  try {
    const { url } = USER_POST();
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error("Email ou usuario ja cadastrado");
    }

    const login = await loginUserAction(username, password);
    if (!login.ok) {
      throw new Error("Erro ao logar usuario");
    }

    return handleSuccsesApi(null);
  } catch (error: unknown) {
    return handleErrorApi(error);
  }
}
