import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { getCategoryBackgroundColor } from "../lib/categories";
import { getCategories } from "../services";

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

const CategoryList = async () => {
  const categories = await getCategories();

  return (
    <div>
      <p className="my-6 mx-0 font-bold text-2xl">Categories</p>
      <div className="flex flex-wrap gap-5 ">
        {categories?.map((category) => (
          <Link
            key={category.id}
            href={`/blog?cat=${category.title}`}
            className={`flex items-center gap-3 capitalize w-[15%] max-xl:w-[20%] max-lg:w[25%] max-md:w-[45%] max-sm:w-[100%] h-14 justify-center rounded-[10px] ${getCategoryBackgroundColor(
              category.title
            )} hover:opacity-70 transition duration-300 ease-in-out`}
          >
            {category.img && (
              <Image
                src={category.img}
                alt="categories"
                width="32"
                height="32"
                className="rounded-full w-8 h-8 "
              />
            )}
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
