export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false;
  try {
    // await jwtVerify(
    //     token,
    //     new TextEncoder().encode("aqui vai sua chave de seguraça do token"),
    //     {
    //         algorithms: ["SHA-1", "SHA-256,"] // metodos de encriptacao
    //     },
    // );
    return true;
  } catch (error) {
    return false;
  }
}
