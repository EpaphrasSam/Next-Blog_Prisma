import React from "react";

const Pagination = () => {
  return (
    <div className="justify-between flex pb-4">
      <button className="w-24 border-none p-4 bg-[crimson] cursor-pointer hover:opacity-90 rounded">
        Previous
      </button>
      <button className="w-24 border-none p-4 bg-[crimson] cursor-pointer hover:opacity-90 rounded">
        Next
      </button>
    </div>
  );
};

export default Pagination;
