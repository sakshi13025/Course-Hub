import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contactNo: "",
    password: "",
    role: "student",
    profileImage: "",
    bio: "",
  });

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 py-10">
      <form
        className="bg-white w-md p-8 rounded-lg shadow-lg"
        onSubmit={submitHandler}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={user.name}
          onChange={changeHandler}
          className="w-full border p-3 rounded-md mb-4"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={user.email}
          onChange={changeHandler}
          className="w-full border p-3 rounded-md mb-4"
        />
        <input
          type="tel"
          name="contactNo"
          placeholder="Enter Your Contact Number"
          value={user.contactNo}
          onChange={changeHandler}
          className="w-full border p-3 rounded-md mb-4"
        />
        <input
          type="text"
          name="password"
          placeholder="Enter Your Password"
          value={user.password}
          onChange={changeHandler}
          className="w-full border p-3 rounded-md mb-4"
        />
        <input
          type="text"
          name="role"
          placeholder="Enter Your Role"
          value={user.role}
          onChange={changeHandler}
          className="w-full border p-3 rounded-md mb-4"
        />
        <input
          type=""
          name="profileImage"
          placeholder="Enter Your Profile Image"
          value={user.profileImage}
          onChange={changeHandler}
          className="w-full border p-3 rounded-md mb-4"
        />
        <input
          type="text"
          name="bio"
          placeholder="Enter Your Bio"
          value={user.bio}
          onChange={changeHandler}
          className="w-full border p-3 rounded-md mb-4"
        />
      </form>
    </div>
  );
};

export default Register;
