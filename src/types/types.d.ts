export interface User {
  id: number;
  email: string;
  username: string;
  nome: string;
}

export interface Photo {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: number;
  idade: number;
  acessos: number;
  total_comments: number;
}

export interface CommentPhoto {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_author_email: string;
  comment_content: string;
  user_id: string;
}

export interface PhotoAndComments {
  photo: Photo;
  comments: CommentPhoto[];
}

export interface Statistics {
  id: number;
  title: string;
  acessos: string;
}
