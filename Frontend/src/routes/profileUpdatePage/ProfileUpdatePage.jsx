import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  password: z
    .string()
    .optional()
    .or(z.literal("")),

});

function ProfileUpdatePage() {
  const { currentUser, updateUser } =
    useContext(AuthContext);

  const [serverError, setServerError] =
    useState("");

  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),

    defaultValues: {
      username: currentUser?.username || "",
      email: currentUser?.email || "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setServerError("");

    try {
      const res = await apiRequest.put(
        `/user/${currentUser.id}`,
        {
          username: data.username,
          email: data.email,
          password: data.password,
          avatar: avatar[0],
        }
      );

      updateUser(res.data);

      navigate("/profile");
    } catch (err) {
      console.log(err);

      setServerError(
        err.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div
      className="
        flex
        flex-col-reverse
        lg:flex-row
        h-full
      "
    >
      {/* FORM */}
      <div
        className="
          flex-[3]
          flex
          items-center
          justify-center
          py-10
        "
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
            w-full
            max-w-lg
            flex
            flex-col
            gap-5
            px-5
          "
        >
          <h1
            className="
              text-3xl
              font-bold
              mb-2
            "
          >
            Update Profile
          </h1>

          {/* USERNAME */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="font-medium"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              {...register("username")}
              className="
                p-4
                rounded-md
                border
                border-gray-300
                outline-none
                focus:border-teal-500
              "
            />

            {errors.username && (
              <p className="text-red-500 text-sm">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-medium"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              {...register("email")}
              className="
                p-4
                rounded-md
                border
                border-gray-300
                outline-none
                focus:border-teal-500
              "
            />

            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="font-medium"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Leave empty if no change"
              {...register("password")}
              className="
                p-4
                rounded-md
                border
                border-gray-300
                outline-none
                focus:border-teal-500
              "
            />

            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* SERVER ERROR */}
          {serverError && (
            <p className="text-red-500 text-sm">
              {serverError}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              p-4
              rounded-md
              bg-teal-600
              text-white
              font-bold
              transition
              hover:bg-teal-700
              disabled:bg-teal-300
              disabled:cursor-not-allowed
            "
          >
            {isSubmitting
              ? "Updating..."
              : "Update"}
          </button>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          flex-[2]
          bg-[#fcf5f3]
          flex
          flex-col
          items-center
          justify-center
          gap-6
          py-10
        "
      >
        {/* AVATAR */}
          <img
            src={currentUser.avatar || "/noavatar.png"}
            alt=""
            className="
              w-[220px]
              h-[220px]
              rounded-full
              object-cover
              border-4
              border-white
              shadow-lg
            "
          />
        

        {/* UPLOAD */}
        {/* <UploadWidget
          uwConfig={{
            cloudName: "lamadev",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        /> */}
      </div>
    </div>
  );
}

export default ProfileUpdatePage;