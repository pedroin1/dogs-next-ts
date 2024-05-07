import { Photo } from "@/actions/photos-dogs-get";
import FeedPhotos from "./feed-photos";
import "./index.scss";

type Props = {
  photos: Photo[];
};

export default function FeedComponent({ photos }: Props) {
  return (
    <div className="feed-content">
      <FeedPhotos photos={photos} />
    </div>
  );
}
