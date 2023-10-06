import React from "react";
import CardList from "../../components/CardList";
import Menu from "../../components/Menu";

const Blog = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div>
      <p className="text-4xl font-bold py-1 px-2 text-center capitalize">
        {cat}
      </p>
      <div className="flex gap-12">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default Blog;
