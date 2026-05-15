import React from "react";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/map/Map";

const SinglePage = () => {
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
          <Slider images={singlePostData.images} />

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
                  {singlePostData.title}
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

                  <span>{singlePostData.address}</span>
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
                  $ {singlePostData.price}
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
                  src={userData.img}
                  alt=""
                  className="
                    w-14
                    h-14
                    rounded-full
                    object-cover
                  "
                />

                <span>{userData.name}</span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                mt-12
                text-gray-600
                leading-7
              "
            >
              {singlePostData.description}
            </div>
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
                    Renter is responsible
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
                    Pets Allowed
                  </p>
                </div>
              </div>

              {/* FEES */}
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
                    Property Fees
                  </span>

                  <p className="text-sm text-gray-500">
                    Must have 3x the rent in total household income
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SIZES */}
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

                <span>80 sqft</span>
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

                <span>2 beds</span>
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

                <span>1 bathroom</span>
              </div>
            </div>
          </div>

          {/* NEARBY */}
          <div>
            <p
              className="
                text-lg
                font-bold
                mb-4
              "
            >
              Nearby Places
            </p>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-4
                bg-white
                p-5
                rounded-xl
              "
            >
              
              <div className="flex flex-col gap-1">
                <img
                  src="/school.png"
                  alt=""
                  className="w-6 h-6"
                />

                <span className="font-semibold">
                  School
                </span>

                <p className="text-sm text-gray-500">
                  250m away
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <img
                  src="/bus.png"
                  alt=""
                  className="w-6 h-6"
                />

                <span className="font-semibold">
                  Bus Stop
                </span>

                <p className="text-sm text-gray-500">
                  100m away
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <img
                  src="/restaurant.png"
                  alt=""
                  className="w-6 h-6"
                />

                <span className="font-semibold">
                  Restaurant
                </span>

                <p className="text-sm text-gray-500">
                  200m away
                </p>
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
              <Map items={[singlePostData]} />
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
