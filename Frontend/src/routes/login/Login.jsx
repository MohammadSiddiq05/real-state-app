import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

// Zod Schema
const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  const [serverErrors, setServerErrors] = useState({});

  const { updateUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setServerErrors({});

    try {
      const res = await apiRequest.post("/auth/login", data);

      updateUser(res.data);

      navigate("/");
    } catch (err) {
      console.log(err);

      setServerErrors(err.response?.data || {});
    }
  };

  return (
    <div className="flex min-h-screen">
      
      {/* LEFT */}
      <div className="flex-[4] flex items-center justify-center">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <h1 className="text-3xl font-bold mb-2">
              Welcome back
            </h1>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="p-5 border border-gray-400 rounded-md outline-none w-full"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}

              {serverErrors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {serverErrors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="p-5 border border-gray-400 rounded-md outline-none w-full"
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}

              {serverErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {serverErrors.password}
                </p>
              )}
            </div>

            {/* SERVER ERROR */}
            {serverErrors.message && (
              <p className="text-red-500 text-sm">
                {serverErrors.message}
              </p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="p-5 rounded-md bg-teal-600 text-white font-bold cursor-pointer disabled:bg-[#BED9D8] disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <Link
              to="/register"
              className="text-sm text-gray-500 border-b border-gray-400 w-max"
            >
              Don't have an account?
            </Link>
          </form>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-[2] bg-[#fcf5f3] min-h-screen flex items-start justify-center">
        <img src="/bg.png" alt="" className="w-full object-contain" />
      </div>
    </div>
  );
};

export default Login;