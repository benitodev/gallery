import React, { useEffect, useState } from "react";
import { useGetImages } from "../../hooks/useGetImages";
import UserAndImage from "../UserAndImage/UserAndImage";
import userService from "../../services/user";
const ImageLogic = () => {
  const { isImage, dataImage } = useGetImages("one");
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (!dataImage.length > 0) return;
    console.log(dataImage[0].user);
    const { user } = dataImage[0];
    const getImages = async () => {
      const userToSearch = await userService.getUser(user[0]);
      setUsername(userToSearch);
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
