"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "undefined") {
      setTheme("light");
    }
  }, [theme]);

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
