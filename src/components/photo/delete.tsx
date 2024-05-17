"use client";
import { photoDelete } from "@/actions/photo-delete";
import { useState } from "react";
import ButtonComponent from "../button";

export default function PhotoDelete({ id }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleClickDeletePhoto() {
    console.log("click");

    setLoading(true);
    await photoDelete(id);
    setLoading(false);
  }

  return (
    <ButtonComponent label="Deletar" onClick={() => handleClickDeletePhoto()} />
  );
}

type Props = {
  id: number;
};
