"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, hasPrev, hasNext, pageCount }) => {
  const router = useRouter();

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pageCount) {
      router.push(`?page=${newPage}`);
    }
  };

  const renderPageButtons = () => {
    const visiblePageButtons = 3;
    const buttons = [];

    const startPage = Math.max(1, page - Math.floor(visiblePageButtons / 2));
    const endPage = Math.min(pageCount, startPage + visiblePageButtons - 1);

    if (startPage > 1) {
      buttons.push(
        <button
          key={1}
          className={`w-10 h-10 border-none p-2 bg-[gray] text-[crimson] font-semibold hover:opacity-90 rounded-full`}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );
    }

    if (startPage > 2) {
      buttons.push(
        <span key="ellipsis1" className="mx-2">
          ...
        </span>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`w-10 h-10 border-none p-2 ${
            i === page
              ? "bg-[crimson] text-white font-bold"
              : "bg-[gray] text-[crimson] font-semibold hover:opacity-90"
          } rounded-full`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < pageCount - 1) {
      buttons.push(
        <span key="ellipsis2" className="mx-2">
          ...
        </span>
      );
    }

    if (endPage < pageCount) {
      buttons.push(
        <button
          key={pageCount}
          className={`w-10 h-10 border-none p-2 ${
            pageCount === page
              ? "bg-[crimson] text-white font-bold"
              : "bg-[gray] text-[crimson] font-semibold hover:opacity-90"
          } rounded-full`}
          onClick={() => handlePageChange(pageCount)}
        >
          {pageCount}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="justify-between flex pb-4 max-sm:justify-evenly">
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

      <div className="flex items-center space-x-2 max-sm:hidden">
        {renderPageButtons()}
      </div>

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
