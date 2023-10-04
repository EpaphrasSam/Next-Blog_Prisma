import React from "react";
import Pagination from "./Pagination";
import Image from "next/image";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="flex-[5]">
      <p className="my-8 mx-0 text-2xl font-bold">Recent Posts</p>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
