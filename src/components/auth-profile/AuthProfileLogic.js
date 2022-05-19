import UserAndImage from "../UserAndImage/UserAndImage";
import { useContext } from "react";
import UserImagesContext from "../../context/UserImagesContext";
const AuthProfileLogic = () => {
  const { image, isImage, userToSearch } = useContext(UserImagesContext);

  return (
    <UserAndImage
      isProfileImage={isImage}
      dataImage={image}
      user={userToSearch}
    ></UserAndImage>
  );
};

export default AuthProfileLogic;
