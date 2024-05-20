"use client";

import { useUser } from "@/context/user-context";
import { CommentPhoto, Photo } from "@/types/types";
import Image from "next/image";
import PhotoDelete from "./photoDelete/delete";
import "./index.scss";
import PhotoComments from "./photoComment/photoComments";

export default function PhotoContent({ photo, comments }: Props) {
  const { user } = useUser();

  function checkPhotoOfAuthor(username?: string, author?: string) {
    if (username === author) return true;
    return false;
  }

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
        {checkPhotoOfAuthor(user?.username, photo.author) ? (
          <PhotoDelete id={photo.id} />
        ) : (
          <span className="author-hover">{`@${photo.author}`}</span>
        )}

        <span className="icon-visu">{photo.acessos}</span>
      </div>
      <span className="second-row title">{photo.title}</span>
      <div className="last-row">
        <span>{photo.peso} kg</span>
        <span>{photo.idade} anos</span>
      </div>
      <br />
      <PhotoComments id={photo.id} singleImage={true} comments={comments} />
    </div>
  );
}

type Props = {
  photo: Photo;
  comments: CommentPhoto[];
};
