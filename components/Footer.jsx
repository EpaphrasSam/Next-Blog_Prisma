import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between py-5 items-center max-md:flex-col max-md:gap-12">
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <p className="text-2xl">SINE</p>
        </div>
        <p className="font-[300]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          corporis! Minus veniam asperiores quis voluptate? Cupiditate officia,
          ipsa mollitia ducimus eum nemo, in optio ullam facere sint iure
          tenetur illo.
        </p>
        <div className="mt-3 gap-3 flex">
          <Image src="/facebook.png" alt="facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="facebook" width={18} height={18} />
          <Image src="/tiktok.png" alt="facebook" width={18} height={18} />
          <Image src="/youtube.png" alt="facebook" width={18} height={18} />
        </div>
      </div>

      <div className="flex-1 flex justify-end gap-24 max-lg:gap-12 max-md:w-full max-md:justify-between">
        <div className="flex flex-col gap-3 font-[300]">
          <span className="font-bold">Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-3 font-[300]">
          <span className="font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="flex flex-col gap-3 font-[300]">
          <span className="font-bold">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
