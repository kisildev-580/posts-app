import styled from "styled-components";

export const PostsOuter = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 2.5rem;
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 3.75rem;
`;

export const StyledPosts = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
