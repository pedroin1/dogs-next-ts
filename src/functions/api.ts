//@ts-nocheck

export const API_URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST() {
  return { url: API_URL + "/jwt-auth/v1/token" };
}

export function USER_POST() {
  return { url: API_URL + "/api/user" };
}

export function FORGET_PASSWORD() {
  return { url: API_URL + "/api/password/lost" };
}
