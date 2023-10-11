"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const toggleIcon = document.getElementById("toggle-icon");
    const toggleDiv = document.getElementById("toggle-div");

    if (toggleIcon && toggleDiv) {
      if (theme === "dark") {
        toggleIcon.style.left = "0";
        toggleIcon.style.backgroundColor = "#0f172a";
        toggleDiv.style.backgroundColor = " white";
      } else {
        toggleIcon.style.left = "calc(100% - 17px)";

        toggleIcon.style.backgroundColor = "white";
        toggleDiv.style.backgroundColor = " #0f172a";
      }
    }
  }, [theme]);

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      id="toggle-div"
      className={`w-10 h-5 relative rounded-xl cursor-pointer flex items-center justify-between ${
        theme === "dark" ? "bg-white" : "bg-[#0f172a]"
      }`}
      onClick={toggle}
    >
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        id="toggle-icon"
        className={`${
          theme === "dark" ? "left-0 bg-[#0f172a]" : "right-0 bg-white"
        } w-4 h-4 rounded-[50%] absolute`}
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
