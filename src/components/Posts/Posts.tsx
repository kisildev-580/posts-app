import { useEffect, useState } from "react";
import { PostType } from "../../types";
import { Post } from "./Post";
import { PostsOuter, PageTitle, StyledPosts } from "./Posts.styled";
import { fetchPosts } from "../../utils";
/**
 * Posts
 * ---
 * The following code has been written to support react with hooks
 * Please don't worry if you prefer classical components, just update stuff 😀
 * ^ Same idea if you'd prefer a different framework too!
 */

export const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts(setPosts);
  }, []);

  // if (!posts.length) {
  //   return <div>Loading...</div>;
  // }

  return (
    <PostsOuter>
      <PageTitle>Daily Posts</PageTitle>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <StyledPosts>
          {posts.length &&
            posts.map((post) => <Post key={post.id} postData={post} />)}
        </StyledPosts>
      )}
    </PostsOuter>
  );
};
