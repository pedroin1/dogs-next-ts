`use client`;
import { CommentPhoto } from "@/types/types";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { useUser } from "@/context/user-context";
import PhotoCommentForm from "../photoCommentForm";

export default function PhotoComments(props: Props) {
  const { user } = useUser();
  const commentsSection = useRef<HTMLUListElement>(null);
  const [comments, setComments] = useState(() => props.comments);

  useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
    console.log(commentsSection);
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${props.singleImage ? `single` : ""}`}
      >
        {comments?.map((comment) => (
          <li key={comment.comment_ID} className="container-comment">
            <span className="author-tag">@{comment.comment_author}:</span>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {user && (
        <PhotoCommentForm
          id={props.id}
          singleImage={props.singleImage}
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
