
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
 
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
 const onSubmit = async (data) => {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      await axios
        .post("http://localhost:4001/users/login", userInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
           toast.success(' Login Successfully ');
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }
          
        })
        .catch((err) => {
          if (err.response) {
            console.log(err);
            toast.error("error :" + err.response.data.message);
          }
        });
    };


  return (
    <>
      {/* Login Modal */}
      <dialog id="login_modal" className="modal">
        <div className="modal-box relative">

          {/* Close Button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className="font-bold text-lg">Login</h3>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Email */}
            <div className="py-4">
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none px-5 py-2 my-2 rounded border w-full"
                {...register("email", { required: true })}
              />
              <br />
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
              <br />
                  {errors.password && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Footer */}
            <div className="flex justify-between mt-3">
              <button
                type="submit"
                className="px-4 py-1 bg-pink-500 text-white rounded-md"
              >
                Login
              </button>

              <p>
                Not registered?{" "}
                <Link to="/signup" className="text-blue-400">
                  Sign Up
                </Link>
              </p>
            </div>

          </form>
        </div>
      </dialog>
    </>
  );
}
