import React from "react";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";
import Dompurify from "dompurify"

const SinglePage = () => {
  const post = useLoaderData();

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row
        h-full
      "
    >
      {/* LEFT */}
      <div
        className="
          flex-[3]
          h-full
          overflow-y-auto
        "
      >
        <div
          className="
            lg:pr-12
            pb-10
          "
        >
          {/* SLIDER */}
          <Slider images={post.images || []} />

          {/* INFO */}
          <div className="mt-12">
            {/* TOP */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                justify-between
                gap-6
              "
            >
              {/* POST */}
              <div
                className="
                  flex
                  flex-col
                  gap-5
                "
              >
                <h1
                  className="
                    text-3xl
                    font-semibold
                    text-gray-800
                  "
                >
                  {post.title}
                </h1>

                {/* ADDRESS */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-gray-500
                    text-sm
                  "
                >
                  <img
                    src="/pin.png"
                    alt=""
                    className="w-4 h-4"
                  />

                  <span>{post.address}</span>
                </div>

                {/* PRICE */}
                <div
                  className="
                    bg-[rgba(254,205,81,0.438)]
                    px-3
                    py-2
                    rounded-md
                    text-xl
                    font-light
                    w-max
                  "
                >
                  $ {post.price}
                </div>
              </div>

              {/* USER */}
              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                  bg-[rgba(254,205,81,0.209)]
                  px-10
                  py-6
                  rounded-xl
                  font-semibold
                  w-full
                  sm:w-auto
                "
              >
                <img
                  src={
                    post.user?.avatar ||
                    "/noavatar.jpg"
                  }
                  alt=""
                  className="
                    w-14
                    h-14
                    rounded-full
                    object-cover
                  "
                />

                <span>
                  {post.user?.username}
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                mt-12
                text-gray-600
                leading-7
              "
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(
                  post.postDetail?.desc || "",
                )
              }}
            />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="
          flex-[2]
          bg-[#fcf5f3]
          h-full
          overflow-y-auto
        "
      >
        <div
          className="
            p-5
            flex
            flex-col
            gap-6
          "
        >
          {/* GENERAL */}
          <div>
            <p
              className="
                text-lg
                font-bold
                mb-4
              "
            >
              General
            </p>

            <div
              className="
                flex
                flex-col
                gap-5
                bg-white
                p-5
                rounded-xl
              "
            >
              {/* UTILITIES */}
              <div className="flex items-center gap-3">
                <img
                  src="/utility.png"
                  alt=""
                  className="
                    w-6
                    h-6
                    bg-[rgba(254,205,81,0.209)]
                    p-1
                    rounded
                  "
                />

                <div>
                  <span className="font-semibold">
                    Utilities
                  </span>

                  <p className="text-sm text-gray-500">
                    {post.postDetail?.utilities ===
                      "owner"
                      ? "Owner Responsible"
                      : "Tenant Responsible"}
                  </p>
                </div>
              </div>

              {/* PET */}
              <div className="flex items-center gap-3">
                <img
                  src="/pet.png"
                  alt=""
                  className="
                    w-6
                    h-6
                    bg-[rgba(254,205,81,0.209)]
                    p-1
                    rounded
                  "
                />

                <div>
                  <span className="font-semibold">
                    Pet Policy
                  </span>

                  <p className="text-sm text-gray-500">
                    {post.postDetail?.pet ===
                      "allowed"
                      ? "Pets Allowed"
                      : "Pets Not Allowed"}
                  </p>
                </div>
              </div>

              {/* INCOME */}
              <div className="flex items-center gap-3">
                <img
                  src="/fee.png"
                  alt=""
                  className="
                    w-6
                    h-6
                    bg-[rgba(254,205,81,0.209)]
                    p-1
                    rounded
                  "
                />

                <div>
                  <span className="font-semibold">
                    Income Policy
                  </span>

                  <p className="text-sm text-gray-500">
                    {post.postDetail?.income}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ROOM SIZES */}
          <div>
            <p
              className="
                text-lg
                font-bold
                mb-4
              "
            >
              Room Sizes
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-4
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  bg-white
                  px-4
                  py-3
                  rounded-lg
                "
              >
                <img
                  src="/size.png"
                  alt=""
                  className="w-5 h-5"
                />

                <span>
                  {post.postDetail?.size} sqft
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  bg-white
                  px-4
                  py-3
                  rounded-lg
                "
              >
                <img
                  src="/bed.png"
                  alt=""
                  className="w-5 h-5"
                />

                <span>
                  {post.bedroom} Beds
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  bg-white
                  px-4
                  py-3
                  rounded-lg
                "
              >
                <img
                  src="/bath.png"
                  alt=""
                  className="w-5 h-5"
                />

                <span>
                  {post.bathroom} Bathroom
                </span>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div>
            <p
              className="
                text-lg
                font-bold
                mb-4
              "
            >
              Location
            </p>

            <div
              className="
                w-full
                h-[250px]
              "
            >
              <Map items={[post]} />
            </div>
          </div>

          {/* BUTTONS */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
            "
          >
            <button
              className="
                flex-1
                flex
                items-center
                justify-center
                gap-2
                border
                border-[#fece51]
                bg-white
                py-4
                rounded-lg
                hover:bg-[#fff7dd]
                transition
              "
            >
              <img
                src="/chat.png"
                alt=""
                className="w-4 h-4"
              />

              Send a Message
            </button>

            <button
              className="
                flex-1
                flex
                items-center
                justify-center
                gap-2
                border
                border-[#fece51]
                bg-white
                py-4
                rounded-lg
                hover:bg-[#fff7dd]
                transition
              "
            >
              <img
                src="/save.png"
                alt=""
                className="w-4 h-4"
              />

              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;