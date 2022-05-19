import React from "react";

const MainImage = () => {
  return (
    <>
      <div className="relative flex justify-center items-center min-h-screen ">
        <p className="flex justify-center font-bold text-3xl relative w-full text-effect md:w-52  bg-2">
          <span className="w-full px-1 text-mainTitle t-stroke-shadow leading-10 font-normal main-title">
            Proffesional gallery
          </span>
          <span
            className="absolute left-0 -bottom-1 w-full h-1 transition-all bg-yellow-400 "
            style={{ zIndex: "-9" }}
          ></span>
        </p>

        <img
          className="absolute min-h-screen z-[-1] object-cover bg-fixed"
          src="https://images.pexels.com/photos/11808270/pexels-photo-11808270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1920&w=1280"
          alt=""
        />
      </div>
    </>
  );
};

export default MainImage;
