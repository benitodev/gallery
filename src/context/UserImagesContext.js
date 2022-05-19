import { createContext } from "react";
import { useUserImages } from "../hooks/useUserImages";

const UserImagesContext = createContext([]);

const UserImagesProvider = ({ children }) => {
  const { image, isImage, userToSearch, setImage } = useUserImages();
  return (
    <UserImagesContext.Provider
      value={{ image, isImage, userToSearch, setImage }}
    >
      {children}
    </UserImagesContext.Provider>
  );
};

export { UserImagesProvider };
export default UserImagesContext;
