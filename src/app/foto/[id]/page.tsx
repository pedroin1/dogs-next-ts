import getPhotoById from "@/actions/photo-by-id";
import PhotoContent from "@/components/photo";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: Params) {
  const photo = await getPhotoById(params.id);

  if (!photo) return { title: "Fotos" };
  return {
    title: `${photo.photo.title} | Dogs`,
  };
}

export default async function FotoPage({ params }: Params) {
  const photoAndComments = await getPhotoById(params.id);
  if (!photoAndComments) return notFound();

  return (
    <section className="container M">
      {photoAndComments ? (
        <PhotoContent
          singleImage={true}
          photo={photoAndComments.photo}
          comments={photoAndComments.comments}
        />
      ) : (
        <span>Sem foto</span>
      )}
    </section>
  );
}

type Params = {
  params: {
    id: number;
  };
};
