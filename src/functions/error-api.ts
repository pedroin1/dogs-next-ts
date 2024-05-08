export default function apiError(error: unknown): {
  data: null;
  ok: false;
  error: string;
} {
  if (error instanceof Error) {
    return { data: null, ok: false, error: error.message };
  } else {
    return {
      data: null,
      ok: false,
      error: "Houve um erro ao conetar com o sistema de login",
    };
  }
}
