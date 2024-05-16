"use client";

import { photoPost } from "@/actions/photo-post";
import { useState } from "react";
import ButtonComponent from "../button";
import ErrorMessage from "../helper/errorMessage";
import InputComponent from "../input";
import "./index.scss";

export default function PostagemForm() {
  const [nome, setNome] = useState<string>("");
  const [peso, setPeso] = useState<number>(0);
  const [idade, setIdade] = useState<number>(0);
  const [imageFile, setImageFile] = useState<any>("");
  const [errors, setErrors] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangeImageFile = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      setImageFile(URL.createObjectURL(target.files[0]));
    }
  };

  const handleClickPostPhoto = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await photoPost(nome, idade, peso, imageFile);
    } catch (error: unknown) {
      setErrors(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container-form-post">
      <form className="animeLeft" onSubmit={handleClickPostPhoto}>
        <InputComponent
          label="Nome"
          name="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <InputComponent
          label="Peso"
          name="peso"
          type="number"
          value={peso}
          min={0}
          onChange={(e) => setPeso(e.target.valueAsNumber)}
        />
        <InputComponent
          label="Idade"
          name="idade"
          type="number"
          value={idade}
          min={0}
          onChange={(e) => setIdade(e.target.valueAsNumber)}
        />
        <input name="fileImage" type="file" onChange={handleChangeImageFile} />
        <br />
        {errors && <ErrorMessage error={errors} />}
        <ButtonComponent
          label="Postar"
          loadingLabel="Postando..."
          disabled={isLoading}
        />
      </form>
      <div>
        <div
          style={{
            padding: "200px",
            backgroundImage: `url(${imageFile})`,
          }}
        ></div>
      </div>
    </section>
  );
}
