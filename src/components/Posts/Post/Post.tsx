import { FC } from "react";
import { PostType } from "../../../types";
import { StyledPost, PostTitle, PostContent } from "./Post.styled";
import { Author } from "../Author";

interface PostProps {
  postData: PostType;
}
export const Post: FC<PostProps> = ({ postData }) => {
  const { title, body, userId } = postData;

  return (
    <StyledPost>
      <Author id={userId} />
      <PostTitle>{title}</PostTitle>
      <PostContent>{body}</PostContent>
    </StyledPost>
  );
};
