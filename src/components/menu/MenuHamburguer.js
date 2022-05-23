import React, { useContext, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import Dropdown from "../button/Dropdown";
import AuthContext from "../../context/AuthContext";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
const MenuHamburguer = () => {
  const [isClick, setIsClick] = useState();
  const handleClick = () => setIsClick(!isClick);
  const { user, dispatch } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <PersonIcon
          onClick={handleClick}
          id="menu-hamburguer"
          className=" relative"
          sx={{ color: "white" }}
        />
      ) : (
        <Link to="/gallery/login">
          <LoginIcon sx={{ color: "white" }} />
        </Link>
      )}
      <Dropdown
        click={isClick}
        content={["profile", "settings", "image"]}
        styles={{ top: "3rem", right: 0 }}
        dispatch={dispatch}
      />
    </>
  );
};

export default MenuHamburguer;
