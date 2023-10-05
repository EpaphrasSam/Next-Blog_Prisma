"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { useTheme } from "next-themes";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = true;
  const { theme } = useTheme();

  return (
    <>
      {!status ? (
        <Link href="/login" className="hidden sm:flex">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="hidden sm:flex">
            Write
          </Link>
          <span className="cursor-pointer hidden sm:flex">Logout</span>
        </>
      )}
      <HiMenu
        className="sm:hidden flex cursor-pointer"
        onClick={() => setOpen(!open)}
        color={`${theme === "light" ? "black" : "white"}`}
        size={24}
      />
      {open && (
        <div className="absolute top-[100px] left-0 w-full h-95% dark:bg-dark bg-white flex flex-col items-center justify-center gap-[50px] text-2xl">
          <Link href="/" className="sm:hidden">
            Home
          </Link>
          <Link href="/" className="sm:hidden">
            Contact
          </Link>
          <Link href="/" className="sm:hidden">
            About
          </Link>
          <Link href="/login" className="sm:hidden">
            Login
          </Link>
        </div>
      )}
    </>
  );
};

export default AuthLinks;
