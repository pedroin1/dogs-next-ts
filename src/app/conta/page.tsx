import { GetPhotosDogs } from "@/actions/photos-dogs-get";
import getUser from "@/actions/user-get";
import FeedPhotos from "@/components/feed/feed-photos";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minha Conta | Dogs",
  description: "Pagina da conta",
};

export default async function ContaPage() {
  const { data: user } = await getUser();
  const { data: photosDogs } = await GetPhotosDogs({
    page: 1,
    total: 6,
    usuario: user?.username,
  });

  return (
    <div>
      {photosDogs?.length ? (
        <FeedPhotos photos={photosDogs} />
      ) : (
        <div>
          <span style={{ fontSize: "24px", color: "#858282" }}>
            Este usuario ainda não postou nenhuma foto.
          </span>
          <Link href={"/conta/postar"} className="button">
            Postar Foto
          </Link>
        </div>
      )}
    </div>
  );
}
