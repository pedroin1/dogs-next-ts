//@ts-nocheck

export const API_URL = "https://dogsapi.origamid.dev/json";

export default function TOKEN_POST() {
  return { url: API_URL + "/jwt-auth/v1/token" };
}
