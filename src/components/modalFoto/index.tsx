"use client";

import { CommentPhoto, Photo } from "@/types/types";
import PhotoContent from "../photo";
import "./index.scss";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import path from "path";
import { resourceUsage } from "process";

export default function ModalFoto({ photo, comments }: Props) {
  const route = useRouter();
  const pathname = usePathname();

  if (!pathname.includes("/foto")) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      route.back();
    }
  };

  return (
    <div onClick={handleOutsideClick} className="modal-photo">
      <PhotoContent singleImage={false} photo={photo} comments={comments} />
    </div>
  );
}

type Props = {
  photo: Photo;
  comments: CommentPhoto[];
};
