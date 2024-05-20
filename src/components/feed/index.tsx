"use client";

import { GetPhotosDogs } from "@/actions/photos-dogs-get";
import { Photo, User } from "@/types/types";
import { useEffect, useRef, useState } from "react";
import LoadingComponent from "../helper/loading";
import FeedPhotos from "./feed-photos";
import "./index.scss";

export default function FeedComponent({ photos, user }: Props) {
  const addingPageCounter = useRef(false);
  const [photosFeed, setPhotosFeed] = useState<Photo[]>(photos);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [disableScroll, setDisableScroll] = useState<boolean>(
    photos.length < 6 ? true : false
  );

  const infiniteScroll = () => {
    if (addingPageCounter.current) {
      return;
    } else {
      addingPageCounter.current = true;
      setIsLoading(true);
      setTimeout(() => {
        setPageNumber((currentPage) => (currentPage = currentPage + 1));
        addingPageCounter.current = false;
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (!disableScroll) {
      window.addEventListener("scroll", infiniteScroll);
      window.addEventListener("wheel", infiniteScroll);
    } else {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    }
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
      setIsLoading(false);
    };
  }, [disableScroll]);

  useEffect(() => {
    if (pageNumber === 1) return;
    async function loadPhotos(pageNumber: number) {
      const { data: newPhotos } = await GetPhotosDogs({
        page: pageNumber,
        total: 6,
        usuario: user ? user.username : `origamid`,
        optionFront: { cache: "no-store" },
      });

      if (newPhotos !== null) {
        setPhotosFeed((currentPhotos) => [...currentPhotos, ...newPhotos]);
        if (newPhotos.length < 6) setDisableScroll(true);
      }
    }
    loadPhotos(pageNumber);
  }, [pageNumber]);

  return (
    <div className="feed-content">
      <FeedPhotos photos={photosFeed} />
      <div className="loadingWrapper">
        {!disableScroll ? (
          isLoading && <LoadingComponent />
        ) : (
          <p>Acabaram as fotos no momento...</p>
        )}
      </div>
    </div>
  );
}

type Props = {
  photos: Photo[];
  user?: User;
};
