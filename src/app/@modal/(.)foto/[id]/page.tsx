import getPhotoById from "@/actions/photo-by-id";
import NotFound from "@/app/not-found";
import ModalFoto from "@/components/modalFoto";

export default async function Modal({ params }: Params) {
  const photoAndComments = await getPhotoById(params.id);
  if (!photoAndComments) return NotFound();

  return (
    <ModalFoto
      photo={photoAndComments.photo}
      comments={photoAndComments.comments}
    />
  );
}

type Params = {
  params: {
    id: number;
  };
};
