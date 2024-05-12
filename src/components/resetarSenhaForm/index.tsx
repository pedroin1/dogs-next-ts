"use client";

import { useEffect, useState } from "react";
import InputComponent from "../input";
import ButtonComponent from "../button";
import resetPassword from "@/actions/reset-password";
import ErrorMessage from "../helper/errorMessage";
import { useSearchParams } from "next/navigation";

export default function ResetarSenhaForm() {
  const searchParams = useSearchParams();

  const [newPassword, setNewPassword] = useState<string>("");
  const [apiKey, setApikey] = useState<string | any>();
  const [login, setLogin] = useState<string | any>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>();

  const handleClickResetPassword = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    if (newPassword !== "" && apiKey !== "" && login !== "") {
      try {
        const res = await resetPassword(login, newPassword, apiKey);
        if (res.ok) {
          window.location.href = "/conta";
        } else {
          setErrors(res.error);
        }
      } catch (error: unknown) {
        setErrors(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    setApikey(searchParams.get("key"));
    setLogin(searchParams.get("login"));
  }, []);

  return (
    <form onSubmit={handleClickResetPassword}>
      <InputComponent
        label="Nova Senha"
        placeholder="Digite sua nova senha..."
        type="password"
        name="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <ButtonComponent
        label="Resetar Senha"
        disabled={isLoading}
        loadingLabel="Resetando..."
      />
      {errors && <ErrorMessage error={errors} />}
    </form>
  );
}
