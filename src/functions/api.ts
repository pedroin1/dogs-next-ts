//@ts-nocheck

export const API_URL = "https://dogsapi.origamid.dev/json/api";

export function TOKEN_POST() {
  return { url: "https://dogsapi.origamid.dev/json/jwt-auth/v1/token" };
}

export function USER_POST() {
  return { url: API_URL + "/user" };
}

export function FORGET_PASSWORD() {
  return { url: API_URL + "/password/lost" };
}

export function RESET_PASSWORD() {
  return { url: API_URL + "/password/reset" };
}

export function GET_USER() {
  return { url: API_URL + "/user" };
}

export function GET_PHOTOS(
  page: number,
  total: number,
  usuario: number | string
) {
  return {
    url: API_URL + `/photo/?_page${page}&_total=${total}&_user=${usuario}`,
  };
}

export function GET_PHOTO_BY_ID(id: number) {
  return {
    url: API_URL + `/photo/${id}`,
  };
}

export function POST_PHOTO() {
  return { url: API_URL + "/photo" };
}

export function DELETE_PHOTO(idPhoto: number) {
  return { url: API_URL + `/photo/${idPhoto}` };
}

export function ADD_COMMENT(idPhoto: number) {
  return { url: API_URL + `/comment/${idPhoto}` };
}
