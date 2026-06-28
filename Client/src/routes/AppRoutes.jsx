import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import MyCourses from "../pages/MyCourses";
import Profile from "../pages/Profile";
import CourseDetails from "../pages/CourseDetails";

import InstructorDashboard from "../pages/InstructorDashboard";
import AddCourse from "../pages/AddCourse";
import InstructorCourses from "../pages/InstructorCourses";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/course/:id" element={<CourseDetails />} />

      {/* Student Protected Routes */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-courses"
        element={
          <ProtectedRoute>
            <MyCourses />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Instructor Protected Routes */}
      <Route
        path="/instructor"
        element={
          <ProtectedRoute role="instructor">
            <InstructorDashboard />
          </ProtectedRoute>
        }
      >
        <Route path="add-course" element={<AddCourse />} />
        <Route path="my-courses" element={<InstructorCourses />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
