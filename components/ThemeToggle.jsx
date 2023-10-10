"use client";

import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const forcedTheme = localStorage.getItem("theme");
  const { theme, setTheme } = useTheme({ forcedTheme: forcedTheme });

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className={`w-10 h-5 relative rounded-xl cursor-pointer flex items-center justify-between ${
        theme === "dark" ? "bg-white" : "bg-[#0f172a]"
      }`}
      onClick={toggle}
    >
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className={`${
          theme === "dark" ? "left-0 bg-[#0f172a]" : "right-0 bg-white"
        } w-4 h-4 rounded-[50%] absolute`}
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
