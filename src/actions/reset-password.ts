`use server`;

import { RESET_PASSWORD } from "@/functions/api";
import handleErrorApi from "@/functions/error-api";
import handleSuccsesApi from "@/functions/sucsess-api";

export default async function resetPassword(
  login: string,
  password: string,
  apiKey: string
) {
  try {
    const { url } = RESET_PASSWORD();
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login: login,
        password: password,
        key: apiKey,
      }),
    });

    if (!response.ok) throw new Error(`Erro ao alterar senha`);
    return handleSuccsesApi({});
  } catch (error: unknown) {
    return handleErrorApi(error);
  }
}
