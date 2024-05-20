export default async function UserPefilPage({ params }: ParamsPerfil) {
  return (
    <section>
      <h1>Pagina de perfil do usuario: {params.user}</h1>
    </section>
  );
}

type ParamsPerfil = {
  params: {
    user: string;
  };
};
