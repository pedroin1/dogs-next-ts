"use server";

interface ParamsPerfil {
  params: {
    user: string;
  };
}

export default async function UserPefilPage({ params }: ParamsPerfil) {
  return (
    <div>
      <h1>Pagina de perfil do usuario: {params.user}</h1>
    </div>
  );
}
