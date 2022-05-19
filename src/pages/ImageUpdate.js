import React from "react";
import Menu from "../components/menu/Menu";
import FormImageUpdate from "../components/form/FormImage";
import imageService from "../services/images";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const ImageUpdate = () => {
  const [imageData, setImageData] = useState([]);
  const { user } = useContext(AuthContext);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (!id) return false;
    const getImageToUpdate = async () => {
      const res = await imageService.getOne(id);
      setImageData([res]);
    };
    getImageToUpdate();
  }, [id]);
  const handleSubmit = async (e, image, name = null) => {
    e.preventDefault();

    const updateImage = name ? { image, name } : { image };
    await imageService.update(id, updateImage, user);
  };
  return (
    <section id="image-update">
      <Menu windowScrollActive={false} />

      {imageData.length > 0 && (
        <FormImageUpdate
          onFileUpload={handleSubmit}
          formType={{
            type: "Update",
            image: imageData[0],
          }}
        ></FormImageUpdate>
      )}
    </section>
  );
};

export default ImageUpdate;
