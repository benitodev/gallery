import React from "react";
import ImageLogic from "../components/image/ImageLogic";
import Menu from "../components/menu/Menu";

const Image = () => {
  return (
    <section id="image" className="min-h-screen w-full bg-slate-100">
      <Menu windowScrollActive={false} />
      <ImageLogic></ImageLogic>
    </section>
  );
};

export default Image;
