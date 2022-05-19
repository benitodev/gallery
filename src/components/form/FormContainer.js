import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

const FormContainer = ({ handleSubmit, custom, typeOfForm }) => {
  const { title, secondTitle, submitButton, buttonLink } = custom;
  return (
    <div className="p-4">
      <article className="flex flex-col items-center mb-6">
        <h1 className="mb-2 text-3xl font-semibold text-center">{title}</h1>
        <h4 className="text-[#6d6c6c]">
          {secondTitle}
          {typeOfForm === "login" ? (
            <Link to="/create">
              <span> create</span>
            </Link>
          ) : (
            <Link to="/login">
              <span> login</span>
            </Link>
          )}
        </h4>
      </article>
      <div className="w-full">
        <Form
          handleSubmit={handleSubmit}
          submit={submitButton}
          typeOfForm={typeOfForm}
        />
      </div>
    </div>
  );
};

export default FormContainer;
