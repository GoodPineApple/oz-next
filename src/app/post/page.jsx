"use client";

import { useState, useEffect } from "react";

const PostPage = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default PostPage;
