"use client";

import { useUser } from "@/context/user-context";

export default function ContaPage() {
  const { user } = useUser();

  return (
    <div>
      <h1>Pagina da conta do usuario: {user?.nome}</h1>
    </div>
  );
}
