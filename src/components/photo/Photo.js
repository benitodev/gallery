import React from "react";
import { Link } from "react-router-dom";

const Photo = ({ name, url, owner, id, wideClass, tallClass }) => {
  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <div
      className={`w-full max-w-full h-auto  ${wideClass ? wideClass : ""} ${
        tallClass ? tallClass : ""
      }`}
    >
      <Link to={"/gallery/image/" + id}>
        <img
          onClick={handleClick}
          className="w-full max-w-full h-auto object-cover"
          src={url}
          alt={name}
        />
      </Link>
    </div>
  );
};

export default Photo;
