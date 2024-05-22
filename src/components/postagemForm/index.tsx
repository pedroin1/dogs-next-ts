"use client";

import { photoPost } from "@/actions/photo-post";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import ButtonComponent from "../button";
import ErrorMessage from "../helper/errorMessage";
import InputComponent from "../input";
import "./index.scss";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <ButtonComponent
      label="Postar"
      loadingLabel="Postando"
      disabled={pending}
    />
  );
}

export default function PostagemForm() {
  const [imageFile, setImageFile] = useState("");

  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: ``,
    data: null,
  });

  const handleChangeImageFile = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      setImageFile(URL.createObjectURL(target.files[0]));
    }
  };

  return (
    <section className="container-form-post">
      <form className="animeLeft" action={action}>
        <InputComponent label="Nome" name="nome" type="text" />
        <InputComponent label="Peso" name="peso" type="number" min={0} />
        <InputComponent label="Idade" name="idade" type="number" min={0} />
        <input name="img" type="file" onChange={handleChangeImageFile} />
        <br />
        {state.error && <ErrorMessage error={state.error} />}
        <FormButton />
      </form>
      <div>
        {imageFile ? (
          <div
            className="photo-preview-post"
            style={{
              backgroundImage: `url(${imageFile})`,
            }}
          ></div>
        ) : (
          <div className="photo-skeleton-post"></div>
        )}
      </div>
    </section>
  );
}
