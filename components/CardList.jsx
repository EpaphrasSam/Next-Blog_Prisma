import React from "react";
import Pagination from "./Pagination";
import Image from "next/image";
import Card from "./Card";
import { getPosts } from "../services";

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getPosts(page, cat);

  const POST_PER_PAGE = 5;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="flex-[5]">
      {!cat && <p className="my-8 mx-0 text-2xl font-bold">Recent Posts</p>}
      <div className={`${cat && "mt-8"}`}>
        {posts?.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
