"server only";

import { LatestPost } from "@/features/latestPost";

const api_url = process.env.API_URL || "";

const getLatestPosts = async () => {
  try {
    const res = await fetch(
      `${api_url}/posts?_embed&per_page=9&orderby=date&order=desc`,
      {
        next: {
          revalidate: 1,
        },
      }
    );
    const dataPosts: any[] = await res.json();
    const posts =
      dataPosts?.length > 0
        ? dataPosts.filter(
            (dataPost) =>
              dataPost?.slug !== "form-main" &&
              dataPost?.slug !== "form-poup" &&
              dataPost?.slug !== "lich-khai-giang"
          )
        : [];

    const postsWithFeaturedImages =
      posts?.length > 0
        ? posts?.map((post: any) => {
            const featured_image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

            return {
              ...post,
              featured_image,
            };
          })
        : [];

    return { posts: postsWithFeaturedImages || [] };
  } catch (error) {
    console.log(error);
    return { posts: [] };
  }
};

const Page = async () => {
  const { posts } = await getLatestPosts();

  return (
    <>
      <LatestPost posts={posts} />
    </>
  );
};

export default Page;
