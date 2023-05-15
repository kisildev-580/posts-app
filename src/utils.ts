/**
 * fetchPosts
 * @param {object} state an object containing functions to update component state
 * @note this was added to ensure you don't get blocked, types, etc would be nice!
 */

export const fetchPosts = async (setPosts: (posts: []) => void) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

/**
 * fetchAuthor
 * @todo 🤓😎
 */

export const fetchAuthor = async (userId: number) => {
  if (!userId) return;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
