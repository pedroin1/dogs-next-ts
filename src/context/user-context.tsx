"use client";

import React, { use, useState } from "react";

type User = {
  id: number;
  nome: string;
  username: string;
  email: string;
};

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

type Props = {
  children: React.ReactNode;
  user: User | null;
};

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

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
