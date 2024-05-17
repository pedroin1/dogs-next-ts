"use client";

import { useUser } from "@/context/user-context";
import { CommentPhoto, Photo } from "@/types/types";
import Image from "next/image";
import "./index.scss";

export default function PhotoContent({ photo, comments }: Props) {
  const user = useUser();

  return (
    <div className="photo-content-container animeLeft">
      <div className="photo-border">
        <Image
          src={photo.src}
          width={900}
          height={900}
          alt="foto_do_cachorro"
        />
      </div>
      <div className="first-row">
        <span>{`@${photo.author}`}</span>
        <span className="icon-visu">{photo.acessos}</span>
      </div>
      <span className="second-row title">{photo.title}</span>
      <div className="last-row">
        <span>{photo.peso} kg</span>
        <span>{photo.idade} anos</span>
      </div>
      {/* <ul>
        {comments?.map((commentary) => (
          <li>{commentary.comment_content}</li>
        ))}
      </ul> */}
    </div>
  );
}

type Props = {
  photo: Photo;
  comments?: CommentPhoto[];
};
