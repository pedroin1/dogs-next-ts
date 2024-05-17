import { Photo } from "@/actions/photos-dogs-get";
import Image from "next/image";
import Link from "next/link";
import "./index.scss";

export default function FeedPhotos({ photos }: Props) {
  return (
    <ul className="feed animeLeft">
      {photos.map((photo: Photo, index) => (
        <li className="photo" key={index}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              width={1500}
              height={1500}
              alt={photo.title}
              sizes="80vw"
            />
            <span className="visualizacao">{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

type Props = {
  photos: Photo[];
};
