"use client";

import { useUser } from "@/context/user-context";
import { CommentPhoto, Photo } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import PhotoComments from "./photoComment/photoComments";
import PhotoDelete from "./photoDelete/delete";

export default function PhotoContent({ photo, comments, singleImage }: Props) {
  const { user } = useUser();
  return (
    <div className={`${styles.photo} ${singleImage ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} width={1000} height={1000} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user && user.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link href={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments
        singleImage={singleImage}
        id={photo.id}
        comments={comments}
      />
    </div>
  );
}

type Props = {
  singleImage: boolean;
  photo: Photo;
  comments: CommentPhoto[];
};
