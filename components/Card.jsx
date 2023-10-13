import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDate } from "../lib/posts";

const Card = ({ post }) => {
  return (
    <div className="mb-12 flex gap-12">
      {Object.keys(post).length > 0 && (
        <>
          <div className="flex-1 h-[350px] relative max-xl:hidden">
            {post.img && (
              <Image
                src={post.img}
                alt="p1"
                fill
                className="rounded-lg object-cover"
              />
            )}
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <div>
              <span className="text-gray-500">
                {formatDate(post.createdAt, "date")} -{" "}
              </span>
              <span className="text-[crimson] font-semibold capitalize">
                {post.catSlug}
              </span>
            </div>
            <Link href={`/blog/${post.slug}`} className="hover:opacity-70">
              <p className="text-xl font-bold">{post.title}</p>
            </Link>
            <p className="text-base font-[300] text-gray-800 dark:text-gray-400">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className=" border-b-[gray] border-solid border-b-[0.5px] w-max py-1 px-0 hover:opacity-70"
            >
              Read More
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
