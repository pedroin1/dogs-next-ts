"use client";

import loginUserAction from "@/actions/login-action";
import { useState } from "react";
import ButtonComponent from "../button";

export default function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClickSubmitForm = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    if (username !== "" && password !== "") {
      const responseLogin = await loginUserAction(username, password);

      if (responseLogin.ok) {
        alert("Usuario Logado");
      } else {
        alert(responseLogin.error);
      }
    }
    setIsLoading(false);
  };

  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input
          required={true}
          type="text"
          name="email"
          id="email"
          placeholder="Digite seu email..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          required={true}
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <ButtonComponent
        disabled={isLoading}
        onClick={handleClickSubmitForm}
        label={isLoading ? "Entrando..." : "Entrar"}
      />
    </form>
  );
}
