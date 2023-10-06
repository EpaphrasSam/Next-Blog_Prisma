"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { useTheme } from "next-themes";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  const { theme } = useTheme();

  return (
    <>
      {status !== "authenticated" ? (
        <Link href="/login" className="hidden sm:flex">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="hidden sm:flex">
            Write
          </Link>
          <span className="cursor-pointer hidden sm:flex" onClick={signOut}>
            Logout
          </span>
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
          {!status ? (
            <Link href="/login" className="sm:hidden">
              Login
            </Link>
          ) : (
            <>
              <Link href="/write" className="sm:hidden">
                Write
              </Link>
              <span className="cursor-pointer sm:hidden" onClick={signOut}>
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
