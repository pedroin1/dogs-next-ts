"use client";
import { photoDelete } from "@/actions/photo-delete";
import { useState } from "react";
import ButtonComponent from "../../button";

export default function PhotoDelete({ id }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleClickDeletePhoto() {
    setLoading(true);
    await photoDelete(id);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <ButtonComponent
      label="Deletar"
      disabled={loading}
      loadingLabel="Deletando..."
      handleClick={handleClickDeletePhoto}
    />
  );
}

type Props = {
  id: number;
};
