import { FORGET_PASSWORD } from "@/functions/api";
import apiError from "@/functions/error-api";

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
    return { data: null, ok: true, error: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
