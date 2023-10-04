import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  getCategoryBackgroundColor,
  popularCategories,
} from "../lib/categories";

const CategoryList = () => {
  return (
    <div>
      <p className="my-6 mx-0 font-bold text-2xl">Popular Categories</p>
      <div className="flex flex-wrap gap-5 ">
        {popularCategories.map((popCategory, index) => (
          <Link
            key={index}
            href={`/blog`}
            className={`flex items-center gap-3 capitalize w-[15%] max-xl:w-[20%] max-lg:w[25%] max-md:w-[45%] max-sm:w-[100%] h-14 justify-center rounded-[10px] ${getCategoryBackgroundColor(
              popCategory.name
            )} hover:opacity-70 transition duration-300 ease-in-out`}
          >
            <Image
              src={popCategory.imgSrc}
              alt="categories"
              width="32"
              height="32"
              className="rounded-full w-8 h-8"
            />
            {popCategory.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
