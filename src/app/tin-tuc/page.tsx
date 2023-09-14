"server only";

import { Posts } from "@/features/posts";

const getPost = async ({ page }: { page: string }) => {
  const api_url = process.env.API_URL || "";
  const res = await fetch(
    `${api_url}/posts?_embed&per_page=10&status=publish&page=${page}`,
    {
      next: { revalidate: 3600 },
    }
  );
  const totalPosts = res.headers.get("X-WP-Total");
  const posts = await res?.json();

  const postsWithFeaturedImages = posts?.map((post: any) => {
    const featured_image =
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

    return {
      ...post,
      featured_image,
    };
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return {
    posts: postsWithFeaturedImages,
    totalPosts,
  };
};

const Page = async ({
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams?.page || 1;
  const { posts, totalPosts } = await getPost({
    page: typeof page === "string" ? page : "1",
  });
  const news = posts?.filter(
    (post: any) => post.type === "post" && post.status === "publish"
  );
  return (
    <div>
      <Posts posts={news} totalPosts={totalPosts} />
    </div>
  );
};

export default Page;
