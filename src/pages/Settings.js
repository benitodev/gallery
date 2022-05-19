import React from "react";

import FormContainer from "../components/form/FormContainer";
import Menu from "../components/menu/Menu";

const Settings = () => {
  const handleSettings = () => {};
  return (
    <section
      id="settings"
      className="min-h-screen  bg-[#ced2d32e] flex flex-col justify-center w-full bg-slate-100"
    >
      <Menu></Menu>
      <FormContainer
        handleSubmit={handleSettings}
        custom={{
          title: "Settings for user",
          secondTitle: "Forgot password?",
          submitButton: "Send",
          buttonLink: "remember"
        }}
        typeOfForm="create"
      />
    </section>
  );
};

export default Settings;
