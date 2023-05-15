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
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !author) {
      fetchAuthor(id, setAuthor).then(() => setLoading(false));;
    }
  }, [author, id, inView]);

  return (
    <StyledAuthor ref={ref}>
      {loading && (<div>Loading...</div>)}
      {author && ! loading && (
        <>
          <AuthorName>{author.name}</AuthorName>
          <AuthorEmail>{author.email}</AuthorEmail>
        </>
      )}
    </StyledAuthor>
  );
};
