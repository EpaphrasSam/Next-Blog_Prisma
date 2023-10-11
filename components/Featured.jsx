import Image from "next/image";
import React from "react";
import { getPosts } from "../services";
import Link from "next/link";

const Featured = async () => {
  let randomPost;
  const { posts } = await getPosts(1, "", false, true);
  randomPost = posts;

  setInterval(async () => {
    const { posts } = await getPosts(1, "", false, true);
    randomPost = posts;
  }, 10 * 1000);

  return (
    <div className="mt-8">
      <h1 className="text-5xl">
        <b className="font-bold">Hey, SINE here!</b> Welcome to my blog website.
        Feel free to interact as you see fit.
      </h1>
      <div className="mt-[60px] flex items-center justify-center gap-12">
        <>
          <div className="flex-1 h-[500px] relative max-lg:hidden">
            <Image
              src={randomPost.img}
              alt="p1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <h1 className="text-2xl  ">{randomPost.title}</h1>
            <p className="font-[300] text-lg">{randomPost.excerpt}</p>
            <Link
              href={`/blog/${randomPost.slug}`}
              className="px-4 py-2 border-none rounded-[5px] w-max bg-dark dark:bg-white font-semibold dark:text-black text-white hover:opacity-70"
            >
              <p>Read More</p>
            </Link>
          </div>
        </>
      </div>
    </div>
  );
};

export default Featured;
