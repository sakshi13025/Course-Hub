import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import MyCourses from "../pages/MyCourses";
import Profile from "../pages/Profile";
import CourseDetails from "../pages/CourseDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/my-courses" element={<MyCourses />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/course/:id" element={<CourseDetails />} />
    </Routes>
  );
};

export default AppRoutes;
