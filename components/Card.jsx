import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="mb-12 flex gap-12">
      <div className="flex-1 h-[350px] relative max-xl:hidden">
        <Image
          src="/p1.jpeg"
          alt="p1"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <div>
          <span className="text-gray-500">11.02.2023 - </span>
          <span className="text-[crimson] font-semibold">CULTURE</span>
        </div>
        <Link href="/" className="hover:opacity-70">
          <p className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </Link>
        <p className="text-base font-[300] text-gray-800 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          fugit tenetur dolorem totam ratione nam suscipit adipisci ut repellat
          necessitatibus libero fuga pariatur cum deserunt, temporibus
          explicabo? Velit, tempora maxime!
        </p>
        <Link
          href="/"
          className=" border-b-[gray] border-solid border-b-[0.5px] w-max py-1 px-0 hover:opacity-70"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
