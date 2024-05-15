import { GetPhotosDogs } from "@/actions/photos-dogs-get";
import FeedComponent from "@/components/feed";

export default async function Home() {
  const { data: photosDogs } = await GetPhotosDogs({});

  return (
    <section>
      <div>
        {photosDogs ? (
          <FeedComponent photos={photosDogs} />
        ) : (
          <div>Sem nenhuma foto...</div>
        )}{" "}
      </div>
    </section>
  );
}
