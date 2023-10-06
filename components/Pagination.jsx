"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className="justify-between flex pb-4">
      <button
        disabled={!hasPrev}
        className={`w-24 border-none p-4 ${
          !hasPrev
            ? "opacity-[0.6] dark:opacity-[0.4] cursor-text"
            : " cursor-pointer hover:opacity-90"
        }  bg-[crimson] font-bold rounded`}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={`w-24 border-none p-4 ${
          !hasNext
            ? "opacity-[0.6] dark:opacity-[0.4] cursor-text"
            : " cursor-pointer hover:opacity-90"
        }  bg-[crimson] font-bold rounded`}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
