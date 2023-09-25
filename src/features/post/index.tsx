"only server";

import { formatDate } from "@/ultil/date";
import Link from "next/link";
import xss from "xss";
import { SamePosts } from "./Sames";
import { Share } from "./Share";
import styles from "@/styles/Post.module.css";

export const Post = ({
  post,
  relatedPosts,
}: {
  post: any;
  relatedPosts: any[];
}) => {
  return (
    <article className={styles["post"]}>
      <div className={styles["post--share"]}>
        <Share url={post?.slug || "#"} />
      </div>
      <main>
        {post && (
          <>
            <div className={styles["post__main"]}>
              <div className={styles["post__heading"]}>
                <h1
                  dangerouslySetInnerHTML={{
                    __html: xss(post?.title?.rendered),
                  }}
                />
                <span>{formatDate(post?.date)}</span>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: xss(post?.content?.rendered),
                }}
              />
            </div>
            <SamePosts postsCat={relatedPosts} />
          </>
        )}

        {!post && (
          <div className={styles["not-found"]}>
            <p>Bài viết này không tồn tại!</p>
            <Link className={styles["back-new"]} href={"/tin-tuc"}>
              Trở về trang tin tức
            </Link>
          </div>
        )}
      </main>
    </article>
  );
};
