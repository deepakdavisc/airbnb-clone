"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto rounded shadow-sm hover:shadow-md transition py-2 cusr">
      <div className="flex flex-row items-center justify-between">
        <div className="px-6 font-semibold text-sm">Anywhere</div>
        <div className="hidden sm:block px-6 text-sm text-center font-semibold flex-1 border-x-[1px]">
          Any week
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-500 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add guest</div>
          <div className="p-2 bg-rose-500 text-white rounded-full">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
