import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-blue-400">
          CourseHub
        </NavLink>
        <div className="flex items-center gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/my-courses">My Courses</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register" className="bg-blue-500 px-4 py-2 rounded-md">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
