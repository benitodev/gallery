import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import FormContainer from "../components/form/FormContainer";
import Menu from "../components/menu/Menu";
import loginService from "../services/login";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (
    e,
    { username, setUsername },
    { password, setPassword }
  ) => {
    e.preventDefault();
    try {
      await loginService.login({ username, password }, dispatch);
      setUsername("");
      setPassword("");
      navigate("/gallery/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      id="login"
      className="min-h-screen  bg-[#ced2d32e] flex flex-col justify-center w-full bg-slate-100"
    >
      {" "}
      <Menu windowScrollActive={false} />
      <FormContainer
        handleSubmit={handleLogin}
        custom={{
          title: "Login your account",
          secondTitle: "you don't have account?",
          submitButton: "Sign in",
          buttonLink: "create",
        }}
        typeOfForm="login"
      />
    </section>
  );
};

export default Login;
