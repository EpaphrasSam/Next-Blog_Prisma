import React from "react";
import CardList from "../../components/CardList";
import Menu from "../../components/Menu";

const Blog = () => {
  return (
    <div>
      <p className="text-4xl font-bold py-1 px-2 text-center">Style</p>
      <div className="flex gap-12">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default Blog;
