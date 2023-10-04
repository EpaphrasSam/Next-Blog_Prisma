import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthLinks from "./AuthLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="flex gap-3 flex-1 max-lg:hidden">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="facebook" width={24} height={24} />
        <Image src="/tiktok.png" alt="facebook" width={24} height={24} />
        <Image src="/youtube.png" alt="facebook" width={24} height={24} />
      </div>
      <div className="flex-1 max-xl:text-left text-center text-3xl font-bold max-xl:text-[32px] max-md:text-[24px]">
        SINE
      </div>
      <div className="flex gap-5 flex-1 text-base max-xl:text-[18px] max-xl:gap-4 max-sm:justify-end">
        <ThemeToggle />
        <Link href="/" className="max-sm:hidden">
          Home
        </Link>
        <Link href="/" className="max-sm:hidden">
          Contact
        </Link>
        <Link href="/" className="max-sm:hidden">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;