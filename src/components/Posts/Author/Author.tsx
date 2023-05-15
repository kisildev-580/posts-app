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

  const [ref, inView, , observer] = useInView({
    threshold: 0,
  });


  useEffect(() => {
    if (inView && !author) {
      fetchAuthor(id)
      .then((data) => setAuthor(data))
      .finally(() => setLoading(false));
    }

    return () => {
      observer?.disconnect();
    }
  }, [author, id, inView, observer]);

  return (
    <StyledAuthor ref={ref}>
      {loading && (<div>Loading...</div>)}
      {author && !loading && (
        <>
          <AuthorName>{author.name}</AuthorName>
          <AuthorEmail>{author.email}</AuthorEmail>
        </>
      )}
    </StyledAuthor>
  );
};
