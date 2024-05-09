"use client";

import { useState } from "react";
import ButtonComponent from "../button";
import InputComponent from "../input";
import ErrorMessage from "../helper/errorMessage";
import createUser from "@/actions/user.post";

export default function CriarLoginForm() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<any>();

  const handleClickCreateUser = async (event: any) => {
    event.preventDefault();

    if (username !== "" && password !== "" && email !== "") {
      const responseCreateUser = await createUser(username, email, password);

      if (responseCreateUser.ok) {
        window.location.href = "/login";
      } else {
        setErrors(responseCreateUser.error);
      }
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
        label="Criar"
        disabled={false}
        loadingLabel="Criando..."
        handleClick={handleClickCreateUser}
      />
    </form>
  );
}
