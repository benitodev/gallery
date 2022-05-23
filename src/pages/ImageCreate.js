import React, { useContext } from "react";
import { useState } from "react";
import FormImageCreate from "../components/form/FormImage";
import Menu from "../components/menu/Menu";
import AuthContext from "../context/AuthContext";
import imageService from "../services/images";

const ImageCreate = () => {
  const [message, setMessage] = useState("");
  const { user } = useContext(AuthContext);
  const handleSubmit = async (e, selectedFile, imageName) => {
    try {
      e.preventDefault();
      const newImage = { selectedFile, imageName };
      const res = await imageService.create(newImage, user);
      const { message = "", error } = res;
      setMessage(() => (message ? message : error));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section id="create-image" data-testid="create-image">
      <Menu windowScrollActive={false} />
      <FormImageCreate
        onFileUpload={handleSubmit}
        formType={{ type: "Create" }}
        message={message}
        setMessage={setMessage}
      ></FormImageCreate>
    </section>
  );
};

export default ImageCreate;
