import React from "react";
import { useState } from "react";
import DropdownTrendings from "../components/button/DropdownTrendings";
import Loader from "../components/loader/Loader";

import MainImageCarrusel from "../components/main-image/MainImageCarrusel";
import Menu from "../components/menu/Menu";
import PhotoList from "../components/photo/PhotoList";

const Home = () => {
  const [loader, setLoader] = useState(false);
  return (
    <section id="home" className="bg-slate-100">
      <Menu windowScrollActive />
      {loader && <Loader />}
      <MainImageCarrusel
        loader={loader}
        setLoader={setLoader}
      ></MainImageCarrusel>
      <article className="py-10 pl-4 pr-4 pt-5 w-full min-h-screen bg-slate100">
        <div className="flex w-full justify-between">
          <h2 className="text-lg font-semibold my-3">Photos</h2>
          <DropdownTrendings />
        </div>
        <PhotoList />
      </article>
    </section>
  );
};

export default Home;
