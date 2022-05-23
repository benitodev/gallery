import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";
import Image from "./pages/Image";
import Login from "./pages/Login";
import ImageCreate from "./pages/ImageCreate";
import AuthContext from "./context/AuthContext";
import AuthProfile from "./pages/AuthProfile";
import Create from "./pages/Create";
import Settings from "./pages/Settings";
import ImageUpdate from "./pages/ImageUpdate";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="gallery/" element={<Home />}></Route>
        {/* <Route path="user/:user" element={<UserProfile />}></Route> */}

        <Route path="gallery/profile" element={<AuthProfile />} />
        <Route path="gallery/profile/:id" element={<AuthProfile />} />
        {!user && (
          <>
            <Route path="gallery/create" element={<Create />}></Route>
            <Route
              path="gallery/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
          </>
        )}

        {user && (
          <>
            <Route path="gallery/settings" element={<Settings />} />
            <Route path="gallery/image" element={<ImageCreate />} />
            <Route path="gallery/image/:id" element={<Image />}></Route>
            <Route
              path="gallery/image/update/:id"
              element={<ImageUpdate />}
            ></Route>
          </>
        )}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
