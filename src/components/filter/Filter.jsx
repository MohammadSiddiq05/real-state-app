import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-col gap-3">
      
      <h1 className="text-2xl font-light">
        Search results for Tokyo
      </h1>

      <div>
        <div className="flex flex-col gap-1">
          
          <label
            htmlFor="city"
            className="text-[10px]"
          >
            Location
          </label>

          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            className="
              w-full
              p-3
              border
              border-gray-300
              rounded-md
              text-sm
              outline-none
            "
          />
        </div>
      </div>

      <div
        className="
          flex
          flex-wrap
          justify-between
          gap-5
        "
      >
        
        <div className="flex flex-col gap-1">
          
          <label
            htmlFor="type"
            className="text-[10px]"
          >
            Type
          </label>

          <select
            name="type"
            id="type"
            className="
              w-[100px]
              p-2.5
              border
              border-gray-300
              rounded-md
              text-sm
              outline-none
            "
          >
            <option value="any">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          
          <label
            htmlFor="property"
            className="text-[10px]"
          >
            Property
          </label>

          <select
            name="property"
            id="property"
            className="
              w-[100px]
              p-2.5
              border
              border-gray-300
              rounded-md
              text-sm
              outline-none
            "
          >
            <option value="any">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          
          <label
            htmlFor="minprice"
            className="text-[10px]"
          >
            Min Price
          </label>

          <input
            type="number"
            id="minprice"
            name="minprice"
            placeholder="Any"
            className="
              w-[100px]
              p-2.5
              border
              border-gray-300
              rounded-md
              text-sm
              outline-none
            "
          />
        </div>

        <div className="flex flex-col gap-1">
          
          <label
            htmlFor="maxprice"
            className="text-[10px]"
          >
            Max Price
          </label>

          <input
            type="number"
            id="maxprice"
            name="maxprice"
            placeholder="Any"
            className="
              w-[100px]
              p-2.5
              border
              border-gray-300
              rounded-md
              text-sm
              outline-none
            "
          />
        </div>

        <div className="flex flex-col gap-1">
          
          <label
            htmlFor="bedroom"
            className="text-[10px]"
          >
            Bedroom
          </label>

          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="Any"
            className="
              w-[100px]
              p-2.5
              border
              border-gray-300
              rounded-md
              text-sm
              outline-none
            "
          />
        </div>

        <button
          className="
            w-[100px]
            bg-[#fece51]
            flex
            items-center
            justify-center
            rounded-md
            cursor-pointer
            hover:opacity-90
            transition
          "
        >
          <img
            src="/search.png"
            alt="search"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};

export default Filter;