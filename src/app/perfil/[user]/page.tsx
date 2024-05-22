import { GetPhotosDogs } from "@/actions/photos-dogs-get";
import FeedPhotos from "@/components/feed/feed-photos";

export default async function UserPefilPage({ params }: ParamsPerfil) {
  const { data: fotos } = await GetPhotosDogs({ usuario: params.user });
  console.log(fotos);

  return (
    <section className="container">
      <h1 className="title" style={{ marginRight: "95%" }}>
        {params.user}
      </h1>
      {fotos ? (
        <FeedPhotos photos={fotos} />
      ) : (
        <span>Este usuario não tem fotos</span>
      )}
    </section>
  );
}

type ParamsPerfil = {
  params: {
    user: string;
  };
};
