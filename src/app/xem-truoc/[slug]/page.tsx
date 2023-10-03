"server only";

import { Post } from "@/features/post";

const api_url = process.env.API_URL || "";
const getPost = async ({ slug }: { slug: string }) => {
  try {
    const res = await fetch(`${api_url}/posts?status=draft&slug=${slug}`, {
      next: { revalidate: 10 },
    });
    const posts = await res.json();

    return posts[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost({ slug: params.slug });

  return (
    <div>
      <Post post={post} />
    </div>
  );
};

export default Page;
