`use client`;
import { CommentPhoto } from "@/types/types";
import { Dispatch, SetStateAction, useState } from "react";
import "./index.scss";
import EnviarIcon from "@/icons/enviarIcon";
import addComment from "@/actions/add-coment";
import ErrorMessage from "@/components/helper/errorMessage";

export default function PhotoCommentForm({
  id,
  singleImage,
  setComments,
}: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [errors, setErrors] = useState<any>("");

  const handleClickSubmitComment = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (id !== 0 && comment !== "") {
        const { data: newComment } = await addComment(id, comment);
        if (newComment) {
          setComments((oldComments) => [...oldComments, newComment]);
        }
      }
    } catch (error: any) {
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={`${singleImage && "single"} form-comment-container`}>
      <textarea
        name="comment"
        id="comment"
        placeholder="Comente..."
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button onClick={handleClickSubmitComment}>
        <EnviarIcon />
      </button>
      {errors && <ErrorMessage error={errors} />}
    </form>
  );
}

type Props = {
  id: number;
  singleImage: boolean;
  setComments: Dispatch<SetStateAction<CommentPhoto[]>>;
};
