import { GetPhotosDogs } from "@/actions/photos-dogs-get";
import FeedComponent from "@/components/feed";

export default async function Home() {
  const dogs = await GetPhotosDogs();

  return (
    <section>
      <div>
        <FeedComponent photos={dogs} />
      </div>
    </section>
  );
}
