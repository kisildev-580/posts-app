import { FC } from "react";
import { StyledPost, PostTitle, PostContent } from "./Post.styled";
import { Author } from "../Author";

interface PostProps {
  userId: number;
  title: string;
  body: string;
}
export const Post: FC<PostProps> = ({ title, body, userId }) => (
  <StyledPost>
    <Author id={userId} />
    <PostTitle>{title}</PostTitle>
    <PostContent>{body}</PostContent>
  </StyledPost>
);
