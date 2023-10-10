"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";
import { formatDate } from "../lib/posts";
import { RotatingLines } from "react-loader-spinner";
import { createComment } from "../services";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const [desc, setDesc] = useState("");

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    await createComment(desc, postSlug);
    mutate();
    setDesc("");
  };

  const isDisabled = desc.length === 0;

  return (
    <div className="mt-12">
      <p className="text-2xl font-bold mb-6">Comments</p>
      {status === "authenticated" ? (
        <div className="flex items-end justify-between gap-8">
          <textarea
            placeholder="Write a comment..."
            className="p-5 w-full border border-solid border-gray-400 rounded"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className={`py-4 px-5 ${
              isDisabled
                ? "opacity-[0.5] cursor-not-allowed"
                : "hover:opacity-80"
            } bg-teal-600 rounded-[10px]  text-white cursor-pointer font-semibold text-lg`}
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">
          <p className="font-bold text-xl hover:opacity-70 hover:underline">
            Login to write a comment
          </p>
        </Link>
      )}

      <div className="mt-6 flex flex-col gap-6">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={true}
            />
          </div>
        ) : (
          data?.map((com) => (
            <div key={com.id} className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <div>
                  {com.user.image && (
                    <Image
                      src={com.user.image}
                      alt="Image"
                      height={50}
                      width={50}
                      className="object-fit w-12 h-12 rounded-full"
                    />
                  )}
                </div>
                <div className="flex flex-col dark:text-gray-400">
                  <span className="font-semibold text-lg">{com.user.name}</span>
                  <span className="text-xs">
                    {formatDate(com.createdAt, "date")}
                  </span>
                </div>
              </div>
              <p>{com.desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
