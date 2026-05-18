import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const HomePage = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div
      className="
        flex
        flex-col
        md:flex-row
        h-screen
        max-w-[1400px]
        mx-auto
      "
    >

      {/* LEFT */}
      <div
        className="
          flex-[3]
          flex
          items-center
          px-5
          md:px-10
          lg:px-16
        "
      >
        <div
          className="
            flex
            flex-col
            justify-center
            gap-4
            w-full
          "
        >

          {/* TITLE */}
          <h1
            className="
              text-[34px]
              md:text-[36px]
              xl:text-[40px]
              font-bold
              leading-tight
              max-w-[600px]
            "
          >
            Find Real Estate & Get Your Dream Place
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-gray-600
              leading-7
              text-sm
              md:text-base
              max-w-[600px]
            "
          >
            Discover modern spaces designed for the way you live today.
            Whether you're searching for a cozy apartment, a family home,
            or your next investment, we make finding the perfect place
            simple, fast, and seamless.
          </p>

          {/* SEARCHING */}
          <SearchBar />

          <div
            className="
              hidden
              sm:flex
              items-center
              justify-between
              max-w-[600px]
              pt-2
            "
          >

            <div>
              <h1 className="text-3xl font-bold">
                16+
              </h1>

              <h2 className="text-base text-gray-500 font-light">
                Years of Experience
              </h2>
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                200
              </h1>

              <h2 className="text-base text-gray-500 font-light">
                Awards Gained
              </h2>
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                2000+
              </h1>

              <h2 className="text-base text-gray-500 font-light">
                Property Ready
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-[3] bg-[#fcf5f3] min-h-screen flex items-start justify-center">
        <img src="/bg.png" alt="" className="w-full object-contain" />

      </div>
    </div>
  );
};

export default HomePage;