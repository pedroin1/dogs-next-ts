"use client";

import loginUserAction from "@/actions/login-action";
import { useEffect, useState } from "react";
import ButtonComponent from "../button";
import InputComponent from "../input";
import ErrorMessage from "../helper/errorMessage";

export default function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClickSubmitForm = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    if (username !== "" && password !== "") {
      const responseLogin = await loginUserAction(username, password);
      if (responseLogin.ok) {
        window.location.href = "/conta";
      } else {
        setErrors(responseLogin.error);
      }
    }
    setIsLoading(false);
  };

  return (
    <form>
      <div>
        <InputComponent
          label="Email"
          required={true}
          type="text"
          name="email"
          id="email"
          placeholder="Digite seu email..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputComponent
          label="Senha"
          required={true}
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors && <ErrorMessage error={errors} />}
      <ButtonComponent
        label="Entrar"
        disabled={isLoading}
        loadingLabel="Entrando..."
        handleClick={handleClickSubmitForm}
      />
    </form>
  );
}
