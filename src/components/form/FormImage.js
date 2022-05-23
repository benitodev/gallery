import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FormImage = ({ onFileUpload, formType, setMessage, message = "" }) => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const { type, image = {} } = formType;
  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const onInputChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (!message) return;
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  useEffect(() => {
    if (!image.name) return;
    setName(image.name);
  }, [image]);
  return (
    <div className="min-h-screen flex flex-col  justify-center items-center">
      {" "}
      <h1 className="mb-2 text-3xl font-semibold text-center">{type} Image</h1>
      {message && <p>{message}</p>}
      <div id="settingsForm">
        <div className="block p-6 bg-white max-w-md">
          <article className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                  onChange={(event) => onInputChange(event)}
                  id={!image.name ? "Name" : image.name}
                  name={!image.name ? "Name" : image.name}
                  placeholder={!image.name ? "Name" : image.name}
                />
              </div>
              <div className="form-group mb-6">
                <label
                  className="block  tracking-wider text-[#4c4a49] text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Image
                </label>
                <input
                  type="file"
                  onChange={(event) => onFileChange(event)}
                  name="image"
                  className="form-control
          border border-[#c2baba] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="username"
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between">
              <button
                type="submit"
                onClick={(event) => onFileUpload(event, selectedFile, name)}
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
                Submit
              </button>

              <Link
                to="/forgot"
                className="inline-block text-[#4c4a49] align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Forgot password?
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default FormImage;
