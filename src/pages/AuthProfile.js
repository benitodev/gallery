import React from "react";
import AuthProfileLogic from "../components/auth-profile/AuthProfileLogic";
import Menu from "../components/menu/Menu";
import { UserImagesProvider } from "../context/UserImagesContext";

const AuthProfile = () => {
  //we need get info of users

  return (
    <section id="auth-profile">
      <Menu></Menu>
      <UserImagesProvider>
        <AuthProfileLogic></AuthProfileLogic>
      </UserImagesProvider>
    </section>
  );
};

export default AuthProfile;
