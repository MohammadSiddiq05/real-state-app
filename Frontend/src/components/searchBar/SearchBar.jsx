import React, { useState } from "react";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: "",
    maxPrice: "",
  });

  const switchType = (val) => {
    setQuery((prev) => ({
      ...prev,
      type: val,
    }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full max-w-[900px]">
      
      {/* TYPES */}
      <div className="flex">
        {types.map((type, index) => (
          <button
            type="button"
            key={type}
            onClick={() => switchType(type)}
            className={`
              px-8
              py-4
              border
              border-[#999]
              border-b-0
              capitalize
              transition-all
              duration-300

              ${
                query.type === type
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }

              ${
                index === 0
                  ? "rounded-tl-md border-r-0"
                  : ""
              }

              ${
                index === types.length - 1
                  ? "rounded-tr-md border-l-0"
                  : ""
              }
            `}
          >
            {type}
          </button>
        ))}
      </div>

      {/* FORM */}
      <form
        className="
          border
          border-[#999]
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
        "
      >
        {/* CITY */}
        <input
          type="text"
          name="city"
          placeholder="City Location"
          onChange={handleChange}
          className="
            w-full
            md:w-[220px]
            p-5
            outline-none
            border-b
            md:border-b-0
            md:border-r
            border-[#999]
          "
        />

        {/* MIN PRICE */}
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={handleChange}
          className="
            w-full
            md:w-[200px]
            p-5
            outline-none
            border-b
            md:border-b-0
            md:border-r
            border-[#999]
          "
        />

        {/* MAX PRICE */}
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          onChange={handleChange}
          className="
            w-full
            md:w-[200px]
            p-5
            outline-none
          "
        />

        {/* SEARCH BUTTON */}
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          className="
            w-full
            md:w-[120px]
          "
        >
          <button
            type="button"
            className="
              w-full
              bg-[#fece51]
              h-[70px]
              flex
              items-center
              justify-center
              hover:bg-yellow-400
              transition-all
              duration-300
            "
          >
            <img
              src="/search.png"
              alt="search"
              className="w-6 h-6"
            />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;