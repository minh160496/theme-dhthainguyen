import { Home } from "@/features/home";

const getPost = async () => {
  const api_url = "https://eaof.vn/wp-json/wp/v2";
  const res = await fetch(
    `${api_url}/posts?_embed&per_page=3&status=publish&page=1`,
    {
      next: { revalidate: 3600 },
    }
  );
  const errorCode = res.ok ? false : res.status;

  const totalPosts = res.headers.get("X-WP-Total");
  const posts = await res?.json();

  const postsWithFeaturedImages: any[] = posts?.map((post: any) => {
    const featured_image =
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

    return {
      ...post,
      featured_image,
    };
  });

  return {
    errorCode,
    posts: postsWithFeaturedImages,
    totalPosts,
  };
};

const HomePage = async () => {
  const { posts } = await getPost();

  return (
    <main>
      <Home posts={posts || []} />
    </main>
  );
};

export default HomePage;
