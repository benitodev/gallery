import React from "react";

import { RotatingCircleLoader } from "react-loaders-kit";

const Loader = () => {
  const loaderProps = {
    loading: true,
    size: 100,
    duration: 2,
    colors: ["#99fffe", "#f42e00", "#042549"],
  };
  return (
    <div
      id="loader"
      className="absolute flex justify-center items-center w-full h-screen z-50"
    >
      <RotatingCircleLoader {...loaderProps} />
    </div>
  );
};

export default Loader;
