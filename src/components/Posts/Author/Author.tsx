import { FC, useEffect, useState } from "react";
import { useInView } from "react-hook-inview";
import { StyledAuthor, AuthorName, AuthorEmail } from "./Author.styled";
import { fetchAuthor } from "../../../utils";
import { AuthorType } from "../../../types";

interface AuthorProps {
  id: number;
}

export const Author: FC<AuthorProps> = ({ id }) => {
  const [author, setAuthor] = useState<AuthorType>();
  // const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !author) {
      fetchAuthor(id, setAuthor);
    }
  }, [author, id, inView]);

  return (
    <StyledAuthor ref={ref}>
      {author && (
        <>
          <AuthorName>{author.name}</AuthorName>
          <AuthorEmail>{author.email}</AuthorEmail>
        </>
      )}
    </StyledAuthor>
  );
};
