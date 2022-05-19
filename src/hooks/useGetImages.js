import imageService from "../services/images";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const useGetImages = ({ get = "one" }) => {
  const [dataImage, setDataimage] = useState([]);
  //we need see if the user have created an user-image
  // eslint-disable-next-line no-unused-vars
  const [isImage, setIsImage] = useState(null);
  let params = useParams();
  let serviceMethod = null;
  if (get === "one") {
    serviceMethod = imageService.getOne;
  } else if (get === "all") {
    serviceMethod = imageService.getAll;
  }
  useEffect(() => {
    if (!serviceMethod) return;
    serviceMethod(params.id).then((res) => setDataimage([res]));
  }, [params.id, serviceMethod]);

  return { dataImage, isImage };
};
