import React from "react";
import Menu from "../../../components/Menu";
import Image from "next/image";
import Comments from "../../../components/Comments";

const BlogPage = () => {
  return (
    <div>
      <div className=" flex items-center gap-12">
        <div className="flex-1">
          <p className="font-bold text-5xl mb-12 max-2xl:text-[54px] max-xl:text-[48px] max-sm:text-[36px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div className="flex gap-2 items-cente">
            <div>
              <Image
                src="/p1.jpeg"
                alt="Image"
                height={50}
                width={50}
                className="object-fit w-12 h-12 rounded-full"
              />
            </div>
            <div className="flex flex-col dark:text-gray-400">
              <span className="font-semibold text-lg">John Doe</span>
              <span className="text-xs">01.10.23</span>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[350px] relative max-lg:hidden">
          <Image src="/p1.jpeg" alt="Image" fill className="object-cover" />
        </div>
      </div>

      <div className="flex gap-12 mt-4">
        <div className="flex-[5] mt-8">
          <div className="font-[500] mb-5 text-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              deleniti aliquid? Debitis iste consequuntur vitae, nulla in eum
              dolore libero ratione voluptas veniam, officiis est saepe
              necessitatibus. Commodi, ex repellat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              deleniti aliquid? Debitis iste consequuntur vitae, nulla in eum
              dolore libero ratione voluptas veniam, officiis est saepe
              necessitatibus. Commodi, ex repellat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              deleniti aliquid? Debitis iste consequuntur vitae, nulla in eum
              dolore libero ratione voluptas veniam, officiis est saepe
              necessitatibus. Commodi, ex repellat.
            </p>
          </div>
          <div>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
