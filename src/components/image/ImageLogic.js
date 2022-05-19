import React, { useEffect, useState } from "react";
import { useGetImages } from "../../hooks/useGetImages";
import UserAndImage from "../UserAndImage/UserAndImage";
import userService from "../../services/user";
const ImageLogic = () => {
  const { isImage, dataImage } = useGetImages("one");
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (!dataImage.length > 0) return;

    const { id } = dataImage[0];
    const getImages = async () => {
      const user = await userService.getUser(id);
      setUsername(user);
    };
    getImages();
  }, [dataImage]);
  return (
    <UserAndImage
      isImage={isImage}
      dataImage={dataImage}
      createButtonDownload={true}
      user={username}
    />
  );
};

export default ImageLogic;
