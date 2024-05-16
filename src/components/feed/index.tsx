"use client";

import { GetPhotosDogs, Photo } from "@/actions/photos-dogs-get";
import { User } from "@/actions/user-get";
import { useEffect, useRef, useState } from "react";
import LoadingComponent from "../helper/loading";
import FeedPhotos from "./feed-photos";
import "./index.scss";

type Props = {
  photos: Photo[];
  user: User;
};

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
      setIsLoading(false);

      setTimeout(() => {
        setPageNumber((state) => (state = state + 1));
        addingPageCounter.current = false;
        setIsLoading(true);
      }, 1000);

      addingPageCounter.current = true;
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
      console.log(newPhotos);

      if (newPhotos) {
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
        {isLoading && <LoadingComponent modal={true} />}
      </div>
    </div>
  );
}
