import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("authGalleryApp")) || false,
  isFetching: false,
  error: false,
};

const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const { user, isFetching, error } = state;
  useEffect(() => {
    localStorage.setItem("authGalleryApp", JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider
      value={{
        user,
        isFetching,
        error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
