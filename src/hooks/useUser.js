import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../services/user";
export const useUser = ({ get = "one" }) => {
  // eslint-disable-next-line no-unused-vars
  const [isImage, setIsImage] = useState(null);
  const [dataImage, setDataimage] = useState([]);
  const params = useParams();
  const user = JSON.parse(localStorage.getItem("authGalleryApp")) || params;
  const userId = user.id || null;
  console.log(user);
  let serviceMethod = null;
  if (get === "one") {
    serviceMethod = userService.getUser;
  } else if (get === "all") {
    serviceMethod = userService.getUsers;
  }

  useEffect(() => {
    if (!serviceMethod) return;
    console.log(userId);
    serviceMethod(userId).then((res) => {
      setDataimage([res]);
    });
  }, [userId, serviceMethod]);

  return { dataImage, isImage };
};
