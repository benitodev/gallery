import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../context/AuthActions";

const Dropdown = ({ click, content, styles, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div
      id="dropdownNavbar"
      className={`${
        click ? "block" : "hidden"
      } z-10 w-44 bg-slate100 border-[#c6c6c6] border-2 absolute  rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
      style={styles}
    >
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-400"
        aria-labelledby="dropdownLargeButton"
      >
        {content &&
          content.map((name) => (
            <li key={name}>
              <Link
                to={"/gallery/" + name}
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {name}
              </Link>
            </li>
          ))}
      </ul>
      <div className="py-1">
        <span
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
        >
          Sign out
        </span>
      </div>
    </div>
  );
};

export default Dropdown;
