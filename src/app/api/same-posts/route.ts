import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const api_url = process.env.API_URL || "";
  const { searchParams } = new URL(request.url);
  const catId = searchParams.get("catId");

  let samePosts: any[] = [];
  if (catId) {
    try {
      // Lấy danh sách các bài viết cùng thể loại
      const resRelatedPosts = await fetch(
        `${api_url}/posts?_embed&per_page=3&status=publish&page=${1}&categories=${catId}`,
        { next: { revalidate: 3 } }
      );
      const relatedPosts: any[] = await resRelatedPosts.json();
      const postsWithFeaturedImages =
        relatedPosts?.length > 0
          ? relatedPosts?.map((relatedPost: any) => {
              const featured_image =
                relatedPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                null;

              return {
                ...relatedPost,
                featured_image,
              };
            })
          : [];

      samePosts = postsWithFeaturedImages;
    } catch (error) {
      console.log(error);
    }
  }

  return NextResponse.json({ samePosts });
}
