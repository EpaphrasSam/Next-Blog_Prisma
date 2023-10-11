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

  const pageCount = Math.ceil(count / POST_PER_PAGE);

  return (
    <div className="flex-[5]">
      {!cat && <p className="my-8 mx-0 text-2xl font-bold">All Blogs</p>}
      <div className={`${cat && "mt-8"}`}>
        {posts.length > 0 &&
          posts?.map((post) => <Card key={post.id} post={post} />)}
      </div>
      {pageCount > 1 && (
        <Pagination
          page={page}
          hasNext={hasNext}
          hasPrev={hasPrev}
          pageCount={pageCount}
        />
      )}
    </div>
  );
};

export default CardList;
