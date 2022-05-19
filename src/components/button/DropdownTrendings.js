import React, { useState } from "react";
import Dropdown from "./Dropdown";

const DropdownTrendings = () => {
  const [isClick, setIsClick] = useState(null);
  const handleClick = () => setIsClick(!isClick);
  return (
    <>
      {" "}
      <button
        onClick={handleClick}
        id="dropdownNavbarLink"
        className="flex justify-end items-center  relative pr-4 pl-3 w-full font-medium text-gray-700 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      >
        Trendings{" "}
        <svg
          className="ml-1 w-4 h-4 "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <Dropdown
          click={isClick}
          content={["Popular", "Most searched"]}
          styles={{ top: "3rem" }}
        ></Dropdown>
      </button>
    </>
  );
};

export default DropdownTrendings;
