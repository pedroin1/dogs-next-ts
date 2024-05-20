`use client`;
import { CommentPhoto } from "@/types/types";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { useUser } from "@/context/user-context";
import PhotoCommentForm from "../photoCommentForm";

export default function PhotoComments({ id, singleImage, comments }: Props) {
  console.log(comments);

  const { user } = useUser();
  const commentsSection = useRef<HTMLUListElement>(null);
  const [commentsState, setComments] = useState(() => comments);

  useEffect(() => {}, []);

  return (
    <>
      <ul>
        {comments?.map((comment) => (
          <li key={comment.comment_ID}>
            <span
              style={{
                fontSize: `20px`,
              }}
            >
              <b>{comment.comment_author}:</b>
            </span>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {user && (
        <PhotoCommentForm
          id={id}
          singleImage={singleImage}
          setComments={setComments}
        />
      )}
    </>
  );
}

type Props = {
  id: number;
  singleImage: boolean;
  comments: CommentPhoto[];
};
