import React from "react";
import { Link } from "react-router-dom";
import Download from "../button/Download";

import ImageToMap from "./ImageToMap";
const UserAndImage = ({
  isProfileImage,
  dataImage,
  user,
  createButtonDownload = false,
}) => {
  return (
    <div className="p-4 mt-[3.5rem]">
      <article className="flex items-center  h-10 mb-3">
        {isProfileImage ? (
          <img
            className="rounded-full mr-2"
            src="https://images.unsplash.com/profile-1606461740431-95465625c236image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
            alt=""
          />
        ) : (
          <div className="flex justify-center items-center rounded-full mr-2 bg-blue w-10 h-10">
            <h1 className="text-white">NK</h1>
          </div>
        )}
        <Link to={`/profile/${user.id}`}>
          <h1 className="font-medium">{user.username && user.username}</h1>
        </Link>
      </article>
      <section className="overflow-hidden text-gray-700 ">
        <div className="container py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2 gap-5">
            {dataImage.length > 0 &&
              dataImage.map((imageObject) => (
                <ImageToMap
                  key={imageObject.id}
                  imageObject={imageObject}
                ></ImageToMap>
              ))}
          </div>
        </div>
      </section>

      {createButtonDownload && (
        <article className="w-full flex justify-end mt-3">
          <Download />
        </article>
      )}
    </div>
  );
};

export default UserAndImage;
