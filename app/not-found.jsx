import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div class="flex flex-col gap-5 justify-center items-center min-h-screen">
      <h1 class="text-7xl font-bold ">Page Not Found</h1>
      <p class="text-xl ">The page you are looking for does not exist.</p>
      <Link
        href="/"
        class="dark:bg-white dark:text-black bg-gray-500 hover:opacity-70 text-white: px-6 py-2 rounded-md"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
