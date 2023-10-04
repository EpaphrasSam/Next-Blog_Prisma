import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="mt-8">
      <h1 className="text-5xl">
        <b className="font-bold">Hey, SINE here!</b> Welcome to my blog website.
        Feel free to interact as you see fit.
      </h1>
      <div className="mt-[60px] flex gap-12">
        <div className="flex-1 h-[500px] relative max-lg:hidden">
          <Image
            src="/p1.jpeg"
            alt="p1"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-2xl  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="font-[300] text-lg">
            {" "}
            Laudantium, doloribus rerum, facere laborum quis ab asperiores
            consequuntur reprehenderit est doloremque quia autem! Necessitatibus
            cumque cum, quasi id exercitationem dicta repudiandae!
          </p>
          <button className="px-4 py-2 border-none rounded-[5px] w-max bg-dark dark:bg-white font-semibold dark:text-black text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
