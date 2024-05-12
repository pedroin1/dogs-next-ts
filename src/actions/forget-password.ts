import { FORGET_PASSWORD } from "@/functions/api";
import handleErrorApi from "@/functions/error-api";
import handleSuccsesApi from "@/functions/sucsess-api";

export default async function sendEmailForgetPassword(
  email: string,
  urlPerdeu: string
) {
  try {
    const { url } = FORGET_PASSWORD();
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login: email, url: urlPerdeu }),
    });

    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message);
    }
    return handleSuccsesApi(null);
  } catch (error: unknown) {
    return handleErrorApi(error);
  }
}
