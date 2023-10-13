import React from "react";
import Menu from "../../../components/Menu";
import Image from "next/image";
import Comments from "../../../components/Comments";
import { getUniquePost } from "../../../services";
import { formatDate } from "../../../lib/posts";

const BlogPage = async ({ params }) => {
  const { post } = await getUniquePost(params.slug);

  return (
    <div>
      <div className=" flex items-center gap-12">
        <div className="flex-1">
          {/* <p className="font-bold text-5xl mb-12 max-2xl:text-[54px] max-xl:text-[48px] max-sm:text-[36px]">
            {post?.title}
          </p>
          <div className="flex gap-2 items-center">
            <div>
              {post?.user?.image && (
                <Image
                  src={post?.user?.image}
                  alt="Image"
                  height={50}
                  width={50}
                  className="object-cover w-12 h-12 rounded-full"
                />
              )}
            </div>
            <div className="flex flex-col dark:text-gray-400">
              <span className="font-semibold text-lg">{post.user.name}</span>
              <span className="text-xs">
                {formatDate(post.createdAt, "date")}
              </span>
            </div>
          </div> */}
        </div>
        <div className="flex-1 h-[350px] relative max-lg:hidden">
          {/* {post.img && (
            <Image
              src={post.img}
              alt="Image"
              fill
              className="object-cover rounded-md"
            />
          )} */}
        </div>
      </div>

      <div className="flex gap-12 mt-4">
        {/* <div className="flex-[5] mt-8">
          <div
            className="font-[500] mb-5 text-lg"
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          />
          <div>
            <Comments postSlug={params.slug} />
          </div>
        </div>
        <Menu /> */}
      </div>
    </div>
  );
};

export default BlogPage;
