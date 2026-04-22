// export const metadata = {
//   title: "Post",
//   description: "Post",
// };

export const generateMetadata = async ({ params }) => {
  const { postId } = await params;

  // fetch data
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  ).then((res) => res.json());
  console.log(post);

  return {
    title: `${post.title} | OZ-NEXT`,
    description: post.body,
    openGraph: {
      title: `${post.title} | OZ-NEXT`,
      description: post.body,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRSfi3nwGMPDc0k5XH01YbIYiNk00kMC2P-udBk8VApmuvbK45WduyEbUCrpvFdqAIgKSIAJvUr-HtGLsy85onEvN9lvi2gKpUDAXcz0c&s=10",
      ],
    },
  };
};

const PostLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default PostLayout;
