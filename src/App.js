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
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="user/:user" element={<UserProfile />}></Route> */}

        <Route path="profile" element={<AuthProfile />} />
        <Route path="profile/:id" element={<AuthProfile />} />
        {!user && (
          <>
            <Route path="/create" element={<Create />}></Route>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
          </>
        )}

        {user && (
          <>
            <Route path="settings" element={<Settings />} />
            <Route path="image" element={<ImageCreate />} />
            <Route path="image/:id" element={<Image />}></Route>
            <Route path="image/update/:id" element={<ImageUpdate />}></Route>
          </>
        )}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
