"use client";

import { useEffect, useState } from "react";
import ButtonComponent from "../button";
import ErrorMessage from "../helper/errorMessage";
import InputComponent from "../input";
import sendEmailForgetPassword from "@/actions/forget-password";

export default function PerdeuSenhaForm() {
  const [username, setUsername] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [errors, setErrors] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailSucsess, setEmailSucsess] = useState<boolean>(false);

  const handleClickForgetPassword = async (event: any) => {
    event?.preventDefault();
    setIsLoading(true);

    try {
      const responseForgetPassword = await sendEmailForgetPassword(
        username,
        url
      );

      if (responseForgetPassword.ok) {
        setEmailSucsess(true);
      } else {
        setErrors(responseForgetPassword.error);
      }
    } catch (error: any) {
      setErrors(error.message);
    } finally {
      setIsLoading(false);
      setUrl("");
    }
  };

  useEffect(() => {
    setUrl(window.location.href.replace("perdeu", "resetar"));
  }, []);

  useEffect(() => {
    setErrors(null);
  }, [username]);

  return (
    <form>
      <div>
        <InputComponent
          label="Email / Usuario"
          required={true}
          type="text"
          name="usuario"
          id="usuario"
          placeholder="Crie seu usuario..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {errors && <ErrorMessage error={errors} />}

      {!emailSucsess ? (
        <ButtonComponent
          label="Enviar Email"
          disabled={isLoading}
          loadingLabel="Enviando..."
          handleClick={handleClickForgetPassword}
        />
      ) : (
        <span style={{ color: "#4c1" }}>Email enviado!</span>
      )}
    </form>
  );
}
