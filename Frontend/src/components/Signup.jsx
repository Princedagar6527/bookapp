
import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast from "react-hot-toast";


export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookapp-backend.onrender.com/users/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
        toast.success(' Signup Successfully ')
         
        }
         localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("error :" + err.response.data.message);
        }
      });
  };
return (
<> <div className="flex items-center justify-center h-screen">

    {/* Signup Modal */}
    <div id="signup_modal" className="">
      <div className="border-[2px] shadow-md px-3 py-3">

        {/* Close Button */}
        <form method="dialog">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            </form>

        <h3 className="font-bold text-lg">Sign Up</h3>
        <form  onSubmit={handleSubmit(onSubmit)} >
        {/* Name */}
          <div className="py-4">
          <span>Name</span>
          <input
            type="text"
            placeholder="Enter your name"
            className="outline-none px-5 py-2 my-2 rounded border w-full"
              {...register("fullname", { required: true })}
          />
          {errors.fullname && < span className="text-red-500">This field is required</span>}
        </div>

        {/* Email */}
        <div className="py-4">
          <span>Email</span>
          <input
            type="email"
            placeholder="Enter your email"
            className="outline-none px-5 py-2 my-2 rounded border w-full"
              {...register("email", { required: true })}
          />
         {errors.email && < span className="text-red-500">This field is required</span>}
        </div>

        {/* Password */}
        <div className="py-2">
          <span>Password</span>
          <input
            type="password"
            placeholder="Enter your password"
            className="outline-none px-5 py-2 my-2 rounded border w-full"
              {...register("password", { required: true })}
            />
           {errors.password && < span className="text-red-500">This field is required</span>}
        
        </div>

        {/* Footer */}
        <div className="flex gap-4 mt-4 items-center">
          <button className="px-4 py-1 bg-pink-500 text-white rounded-md">
            Sign Up
          </button>

          <p>
            Have an account?{" "}
            <button
              className="text-blue-400"
              onClick={() =>
                document.getElementById("login_modal").showModal()
              }
            >
              Login
            </button>
          </p>
        </div>
        </form>
      </div>
    </div>

    {/* Login Modal */}
    <Login />
  </div>
</>


);
}

