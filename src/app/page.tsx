"use client";

import ErrorBoundary from "@/components/ErrorBoundary";
import { Home } from "@/features/home";
import { useEffect, useState } from "react";

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

const HomePage = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const g = async () => {
      const { posts } = await getPost();
      if (posts) setPosts(posts);
    };

    g();
  }, []);

  return (
    <main>
      <ErrorBoundary fallback={<h1>Lỗi phía server</h1>}>
        <Home posts={posts || []} />
      </ErrorBoundary>
    </main>
  );
};

export default HomePage;
