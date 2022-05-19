import { useEffect } from "react";
import { useState } from "react";
import { useUser } from "./useUser";
import imageService from "../services/images";
export const useUserImages = () => {
  const { isImage, dataImage: user } = useUser("one");
  const [image, setImage] = useState([]);
  const [userToSearch, setUserToSearch] = useState("");

  useEffect(() => {
    if (!user.length > 0) return;

    const imageArray = user[0].images;
    const getImages = async () => {
      const images = await Promise.all(
        imageArray.map(async (image) => {
          return await imageService.getOne(image);
        })
      );
      setImage(images);
      setUserToSearch(user[0]);
    };
    getImages();
  }, [user]);

  return { isImage, image, setImage, userToSearch };
};
