"only server";

import { formatDate } from "@/ultil/date";
import Link from "next/link";
import xss from "xss";
import { SamePosts } from "./Sames";
import { Share } from "./Share";
import "./post.css";

export const Post = ({
  post,
  relatedPosts,
}: {
  post: any;
  relatedPosts: any[];
}) => {
  return (
    <article className="post">
      <div className="post--share">
        <Share url={post?.slug || "#"} />
      </div>
      <main>
        {post && (
          <>
            <div className="post__heading">
              <h1>{post?.title?.rendered}</h1>
              <span>{formatDate(post?.date)}</span>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: xss(post?.content?.rendered) }}
            />
            <SamePosts postsCat={relatedPosts} />
          </>
        )}

        {!post && (
          <div className="not-found">
            <p>Bài viết này không tồn tại!</p>
            <Link className="back-new" href={"/tin-tuc"}>
              Trở về trang tin tức
            </Link>
          </div>
        )}
      </main>
    </article>
  );
};
