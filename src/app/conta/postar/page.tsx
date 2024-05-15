import PostagemForm from "@/components/postagemForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postar | Dogs",
  description: "Pagina de postagem",
};

export default async function PostarPage() {
  return (
    <div>
      <PostagemForm />
    </div>
  );
}
