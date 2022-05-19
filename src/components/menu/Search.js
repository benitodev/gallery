import React from "react";

const Search = () => {
  return (
    <div className="relative overflow-x-auto ">
      <div className="p-6 pl-0 pr-0">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="#808080"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="text-base font-medium border-[gray] border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-gray"
            placeholder="Search for photos"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
