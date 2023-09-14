"server only";

import { Home } from "@/features/home";
import ErrorBoundary from "@/components/ErrorBoundary";

const getPost = async () => {
  const api_url = process.env.API_URL || "";
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
  const { posts, errorCode } = await getPost();
  if (errorCode) return null;
  return (
    <main>
      <ErrorBoundary>
        <Home posts={posts || []} />
      </ErrorBoundary>
    </main>
  );
};

export default HomePage;
