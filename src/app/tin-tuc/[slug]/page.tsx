"server only";

import { Post } from "@/features/post";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const api_url = process.env.API_URL || "";

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const postArr = await fetch(`${api_url}/posts?slug=${slug}`, {
    next: { revalidate: 3 },
  }).then((res) => res.json());

  const post = postArr[0];

  return {
    title: post?.title?.rendered || "Tin tức",
    description:
      post?.excerpt?.rendered ||
      "Tin tức và thông báo tuyển sinh về Đại học Thái Nguyên",
  };
}

const getPost = async ({ slug }: { slug: string }) => {
  try {
    const res = await fetch(`${api_url}/posts?slug=${slug}`, {
      next: { revalidate: 3 },
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
