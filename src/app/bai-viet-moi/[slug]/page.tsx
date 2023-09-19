"server only";

import { Post } from "@/features/post";

const api_url = process.env.API_URL || "";
const getLatestPosts = async () => {
  try {
    const res = await fetch(
      `${api_url}/posts?posts?per_page=10&orderby=date&order=desc`,
      {
        next: { revalidate: 10 },
      }
    );
    const posts: any[] = await res.json();

    return { posts: posts };
  } catch (error) {
    console.log(error);
    return { posts: [] };
  }
};

const getSamePosts = async (post: any) => {
  const categoryId = post?.categories[0]; // Giả sử mỗi bài viết chỉ thuộc về một thể loại

  if (categoryId) {
    // Lấy danh sách các bài viết cùng thể loại
    const resRelatedPosts = await fetch(
      `${api_url}/posts?categories=${categoryId}&exclude=${post?.id}&per_page=3&_embed`,
      {
        next: { revalidate: 10 },
      }
    );

    const relatedPosts: any[] = await resRelatedPosts.json();
    const postsWithFeaturedImages = relatedPosts?.map((relatedPost: any) => {
      const featured_image =
        relatedPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

      return {
        ...relatedPost,
        featured_image,
      };
    });

    return postsWithFeaturedImages || [];
  }

  return [];
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const { posts } = await getLatestPosts();
  const post = posts?.find((post) => post.slug === params.slug);
  const relatedPosts = await getSamePosts(post);

  return (
    <div>
      <Post post={post} relatedPosts={relatedPosts} />
    </div>
  );
};

export default Page;
