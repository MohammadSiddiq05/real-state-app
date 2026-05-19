import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiRequest from "../../lib/apiRequest";

const schema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

const Register = () => {
  const navigate = useNavigate();

  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setServerError("");

      await apiRequest.post("/auth/register", data);

      navigate("/login");
    } catch (err) {
      console.log(err);

      setServerError(
        err.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="flex-[4] flex items-center justify-center">
        <div className="w-full max-w-md px-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <h1 className="text-3xl font-bold mb-2">
              Create an Account
            </h1>

            {/* USERNAME */}
            <div>
              <input
                type="text"
                placeholder="Username"
                {...register("username")}
                className="p-5 border border-gray-300 rounded-md outline-none w-full"
              />

              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="p-5 border border-gray-300 rounded-md outline-none w-full"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="p-5 border border-gray-300 rounded-md outline-none w-full"
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* SERVER ERROR */}
            {serverError && (
              <p className="text-red-500 text-sm font-medium">
                {serverError}
              </p>
            )}

            <button
              disabled={isSubmitting}
              className="p-5 rounded-md bg-teal-600 text-white font-bold cursor-pointer disabled:bg-[#bed9d8] disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>

            <Link
              to="/login"
              className="text-sm text-gray-500 border-b border-gray-400 w-max"
            >
              Do you have an account?
            </Link>
          </form>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-[2] bg-[#fcf5f3] flex items-center justify-center">
        <img
          src="/bg.png"
          alt=""
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Register;