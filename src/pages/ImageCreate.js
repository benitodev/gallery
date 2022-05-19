import React, { useContext } from "react";
import FormImageCreate from "../components/form/FormImage";
import Menu from "../components/menu/Menu";
import AuthContext from "../context/AuthContext";
import imageService from "../services/images";

const ImageCreate = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = async (e, selectedFile, imageName) => {
    e.preventDefault();
    const newImage = { selectedFile, imageName };
    await imageService.create(newImage, user);
  };
  return (
    <section id="image-create">
      <Menu windowScrollActive={false} />
      <FormImageCreate
        onFileUpload={handleSubmit}
        formType={{ type: "Create" }}
      ></FormImageCreate>
    </section>
  );
};

export default ImageCreate;
