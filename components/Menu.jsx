import Image from "next/image";
import Link from "next/link";
import React from "react";
import { blogPosts } from "../lib/categories";
import { getCategories, getPosts } from "../services";
import { formatDate } from "../lib/posts";

const getCategoryBackgroundColor = (name) => {
  switch (name) {
    case "style":
      return "bg-[#57c4ff9A]";
    case "fashion":
      return "bg-[#da85c79A]";
    case "food":
      return "bg-[#7fb8819A]";
    case "travel":
      return "bg-[#ff79579A]";
    case "culture":
      return "bg-[#ffb84f9A]";
    case "coding":
      return "bg-[#5e4fffaA]";
    default:
      return "bg-gray-500";
  }
};

const Menu = async ({ cat }) => {
  const { popularPosts } = await getPosts(1, cat, true);
  const categories = await getCategories();

  return (
    <div className="flex-[2] max-lg:hidden">
      <div className="my-8 mx-0">
        <p className="text-gray-500 text-sm font-[400]">{"What's hot?"}</p>
        <p className="text-2xl font-bold">Most Popular</p>
        <div>
          {popularPosts.map((post, index) => (
            <div key={index} className="flex items-center gap-5 pb-2">
              <div className="flex-1 relative aspect-square">
                <Image
                  src={post.img}
                  alt={`post-${index}`}
                  className="rounded-full object-cover border-solid border-[lightgray] border-2"
                  fill
                />
              </div>
              <div className="flex-[4] flex flex-col gap-1">
                <span
                  className={`py-1 px-2 rounded-[10px] text-sm w-max ${getCategoryBackgroundColor(
                    post.catSlug.toLowerCase()
                  )}`}
                >
                  {post.catSlug.charAt(0).toUpperCase() + post.catSlug.slice(1)}
                </span>

                <Link href={`/posts/${post.slug}`} className="hover:opacity-70">
                  <p className="font-semibold text-gray-500 text-lg">
                    {post.title}
                  </p>
                </Link>
                <div className="text-sm flex flex-col gap-1">
                  <span>{post.name} </span>
                  <span className="text-gray-500">
                    {formatDate(post.createdAt, "date")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-8 mx-0">
        <p className="text-gray-500 text-sm font-[400]">Discover by topic</p>
        <p className="text-2xl font-bold">Categories</p>
        <div className="flex flex-wrap gap-5 my-4">
          {categories.map((popCategory, index) => (
            <Link
              key={index}
              href="/blog"
              className={`${getCategoryBackgroundColor(
                popCategory.title
              )} py-3 px-5 rounded-[10px] capitalize hover:opacity-70`}
            >
              {popCategory.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="my-8 mx-0">
        <p className="text-gray-500 text-sm font-[400]">Chosen by the editor</p>
        <p className="text-2xl font-bold">Editors Pick</p>
        <div>
          {blogPosts.map((post, index) => (
            <Link key={index} href="/" className="flex items-center gap-5 pb-2">
              <div className="flex-1 relative aspect-square">
                <Image
                  src={post.imageSrc}
                  alt={`post-${index}`}
                  className="rounded-full object-cover border-solid border-[lightgray] border-2"
                  fill
                />
              </div>
              <div className="flex-[4] flex flex-col gap-1">
                <span
                  className={`py-1 px-2 rounded-[10px] text-sm w-max ${getCategoryBackgroundColor(
                    post.category.toLowerCase()
                  )}`}
                >
                  {post.category}
                </span>
                <p className="font-semibold text-gray-500 text-lg">
                  {post.title}
                </p>
                <div className="text-sm">
                  <span>{post.author} </span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
