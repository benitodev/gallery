import React from "react";
import FormContainer from "../components/form/FormContainer";
import Menu from "../components/menu/Menu";
import userService from "../services/user";
const Create = () => {
  const handleCreateUser = async (
    e,
    { username, setUsername },
    { password, setPassword },
    { name, setName }
  ) => {
    e.preventDefault();
    const user = {
      username,
      password,
      name,
    };
    const newUser = await userService.createUser(user);
    setUsername("");
    setPassword("");
    setName("");

    console.log(newUser);
  };
  return (
    <section
      id="login"
      className="min-h-screen  bg-[#ced2d32e] flex flex-col justify-center w-full bg-slate-100"
    >
      {" "}
      <Menu windowScrollActive={false} />
      <FormContainer
        handleSubmit={handleCreateUser}
        custom={{
          title: "Create your account",
          secondTitle: "you have account?",
          submitButton: "Sign up",
        }}
        typeOfForm="create"
      />
    </section>
  );
};

export default Create;
