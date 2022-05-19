import { Link } from "@mui/material";
import React from "react";

const UserProfile = () => {
  return (
    //FORM FOR CREATE IMAGE
    <div>
      {" "}
      <h1 className="mb-2 text-3xl font-semibold text-center">Settings user</h1>
      <div id="settingsForm">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="grid grid-cols-2 ">
              <div className="form-group mb-6">
                <label
                  className="block  tracking-wider text-[#4c4a49] text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control
          border border-[#c2baba] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="name"
                />
              </div>
              <div className="form-group mb-6">
                <label
                  className="block  tracking-wider text-[#4c4a49] text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="form-control
          border border-[#c2baba] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="username"
                />
              </div>
            </div>
            <div className="form-group mb-6">
              <label
                className="block  tracking-wider text-[#4c4a49] text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="********"
                className="form-control block
        border border-[#c2baba] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="password"
              />
            </div>

            <div className="flex flex-row-reverse items-center justify-between">
              <button
                type="submit"
                className="
     
      px-5 py-2.5
      bg-[#7b32f8]
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
              >
                Sign up
              </button>

              <Link
                to="/forgot"
                className="inline-block text-[#4c4a49] align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
