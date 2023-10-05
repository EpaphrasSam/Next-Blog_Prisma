"use client";
import "react-quill/dist/quill.bubble.css";

import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FaPlus, FaImage, FaExternalLinkAlt, FaVideo } from "react-icons/fa";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Write = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        className="p-12 text-5xl border-none outline-none bg-transparent placeholder:text-[#b3b3b1]"
      />
      <div className="flex gap-5 h-[700px] relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-full border border-solid border-gray-600 bg-transparent flex items-center justify-center cursor-pointer"
        >
          <FaPlus size={16} />
        </button>
        {open && (
          <div className="flex gap-5 absolute z-50 w-full left-12">
            <button className="w-9 h-9 rounded-full border border-solid border-[#1a8917] bg-transparent flex items-center justify-center cursor-pointer">
              <FaImage size={16} color="#1a8917" />
            </button>
            <button className="w-9 h-9 rounded-full border border-solid border-[#1a8917] bg-transparent flex items-center justify-center cursor-pointer">
              <FaExternalLinkAlt size={16} color="#1a8917" />
            </button>
            <button className="w-9 h-9 rounded-full border border-solid border-[#1a8917] bg-transparent flex items-center justify-center cursor-pointer">
              <FaVideo size={16} color="#1a8917" />
            </button>
          </div>
        )}

        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
          className="border border-gray-500 rounded-lg w-full"
        />
      </div>
      <button className="absolute top-[26px] right-[20px] border-none py-2 px-5 flex items-center justify-center bg-[#1a8917] text-white rounded-[20px] hover:opacity-80 cursor-pointer">
        Publish
      </button>
    </div>
  );
};

export default Write;
