const PostPage = async ({ params }) => {
  const { postId } = await params;

  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  ).then((res) => res.json());
  console.log(post);

  return (
    <div>
      <h1 className="text-2xl font-bold">
        {postId} - {post.title}
      </h1>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
};

export default PostPage;
