"use client";

import logoutUser from "@/actions/logout-user";
import validateToken from "@/actions/validate-token";
import { User } from "@/types/types";
import React, { useEffect, useState } from "react";

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error("O provider deve conter um contexto");
  }

  return context;
};

export function UserContextProvider({ children, user }: Props) {
  const [userState, setUser] = useState<User | null>(user);

  async function validateUser() {
    const { ok: validatedUser } = await validateToken();
    if (!validatedUser) await logoutUser();
  }

  useEffect(() => {
    validateUser();
  }, [userState]);

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

type Props = {
  children: React.ReactNode;
  user: User | null;
};
