import React, { useState } from "react";
import { Link } from "react-router-dom";
const Form = ({ handleSubmit, submit, typeOfForm }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {typeOfForm === "login" ? (
        <>
          <div className="mb-4">
            <label
              className="block  tracking-wider text-[#4c4a49] text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="border border-[#c2baba] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              placeholder="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block tracking-wider text-[#4c4a49] text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-[#c2baba] hover:border-indigo-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="***********"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
        </>
      ) : (
        <>
          <div className="mb-4">
            <label
              className="block  tracking-wider text-[#4c4a49] text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border border-[#c2baba] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              placeholder="Name"
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block  tracking-wider text-[#4c4a49] text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="border border-[#c2baba] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              placeholder="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block tracking-wider text-[#4c4a49] text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-[#c2baba] hover:border-indigo-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="***********"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
        </>
      )}
      <div className="flex flex-row-reverse items-center justify-between">
        <button
          onClick={(e) =>
            handleSubmit(
              e,
              { username, setUsername },
              { password, setPassword },
              { name, setName }
            )
          }
          type="button"
          className="focus:outline-none  tracking-wide bg-[#7b32f8] text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          {submit}
        </button>
        {typeOfForm === "login" && (
          <Link
            to="/gallery/forgot"
            className="inline-block text-[#4c4a49] align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Forgot password?
          </Link>
        )}
      </div>
    </form>
  );
};

export default Form;
