import React, { useState, useEffect } from "react";
import MenuHamburguer from "./MenuHamburguer";
import Search from "./Search";
import CottageIcon from "@mui/icons-material/Cottage";
import { Link } from "react-router-dom";
const Menu = ({ windowScrollActive = false }) => {
  // eslint-disable-next-line no-unused-vars
  const [windowActivate, setWindowActive] = useState(windowScrollActive);
  const [isScroll, setIsScroll] = useState(false);
 
  useEffect(() => {
    if (!windowActivate) {
      setIsScroll(true);
      return undefined;
    }
    window.onscroll = () => {
      const scroll = window.scrollY;

      setIsScroll(scroll !== 0 ? true : false);

      return () => (window.onscroll = null);
    };
  }, [windowActivate]);
  return (
    <article
      className={`${
        isScroll ? "flex" : "hidden"
      } z-40 justify-around items-center w-full h-[3.5rem] fixed top-0  bg-mainColor`}
    >
      <Link to="/">
        <CottageIcon id="home-icon" sx={{ color: "white" }} />
      </Link>
      <Search />
      <MenuHamburguer />
    </article>
  );
};

export default Menu;
