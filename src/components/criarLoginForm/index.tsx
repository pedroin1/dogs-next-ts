"use client";

import createUser from "@/actions/user.post";
import { useState } from "react";
import ButtonComponent from "../button";
import ErrorMessage from "../helper/errorMessage";
import InputComponent from "../input";

export default function CriarLoginForm() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<any>();
  const [isLoading, setIsLoading] = useState<any>();

  const handleClickCreateUser = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (username !== "" && password !== "" && email !== "") {
        const res = await createUser(username, email, password);

        if (res.ok) {
          window.location.href = "/conta";
        } else {
          setErrors(res.error);
        }
      }
    } catch (error: unknown) {
      setErrors("Erro ao tentar criar o seu login!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form>
      <div>
        <InputComponent
          label="Usuario"
          required={true}
          type="text"
          name="usuario"
          id="usuario"
          placeholder="Crie seu usuario..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputComponent
          label="Email"
          required={true}
          type="text"
          name="email"
          id="email"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputComponent
          label="Senha"
          required={true}
          type="password"
          name="password"
          id="password"
          placeholder="Crie sua senha..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors && <ErrorMessage error={errors} />}
      <ButtonComponent
        label="Cadastrar"
        disabled={isLoading}
        loadingLabel="Cadastrando..."
        handleClick={handleClickCreateUser}
      />
    </form>
  );
}
