import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const api_url = process.env.API_URL || "";
  const { searchParams } = new URL(request.url);
  const page = searchParams?.get("page") || "1";
  const type = searchParams?.get("type") || "news";

  let posts: any[] = [];
  let totalPosts: string = "0";

  try {
    //get all categories
    // const resCats = await fetch(`${api_url}/categories`, {
    //   next: { revalidate: 1800 },
    // });
    // const cats: any[] = (await resCats.json()) || [];
    // const newCat = cats?.find((cat) => cat.name === "Tin Tức");
    const idNew = 4;
    // const notifiCat = cats?.find((cat) => cat.name === "Thông báo");
    const idNotifi = 3;
    const id = type === "news" ? idNew : idNotifi;

    //get posts category==='tin-tuc'
    const res = await fetch(
      `${api_url}/posts?_embed&per_page=10&status=publish&page=${page}&categories=${id}`,
      {
        next: { revalidate: 1800 },
      }
    );
    totalPosts = res.headers?.get("X-WP-Total") || "0";

    const postsNotFeatureImage: any[] = (await res?.json()) || [];
    posts =
      postsNotFeatureImage?.length > 0
        ? postsNotFeatureImage?.map((post: any) => {
            const featured_image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

            return {
              ...post,
              featured_image,
            };
          })
        : [];
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ posts, totalPosts });
}
