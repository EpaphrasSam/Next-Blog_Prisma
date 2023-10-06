"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Comments = () => {
  const status = true;

  return (
    <div className="mt-12">
      <p className="text-2xl font-bold mb-6">Comments</p>
      {status ? (
        <div className="flex items-end justify-between gap-8">
          <textarea
            placeholder="Write a comment..."
            className="p-5 w-full border border-solid border-gray-400 rounded"
          />
          <button className="py-4 px-5 bg-teal-600 rounded-[10px] hover:opacity-80 text-white cursor-pointer font-semibold text-lg">
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      <div className="mt-6">
        <div className="flex gap-2 mb-2 items-center">
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci
          ipsam ex aspernatur beatae eum nulla quaerat provident quae, eveniet
          ullam ut quas quisquam accusantium unde eaque iste? Ut, architecto?
        </p>
      </div>
    </div>
  );
};

export default Comments;
