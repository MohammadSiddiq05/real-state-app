import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleFilter = () => {
    setSearchParams(query); 
  };

  return (
    <div className="flex flex-col gap-3">

      {/* TITLE */}
      <h1 className="text-2xl font-light">
        Search results for <b>{searchParams.get("city")}</b>
      </h1>

      {/* CITY */}
      <div>
        <div className="flex flex-col gap-1">
          <label htmlFor="city" className="text-[10px]">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            onChange={handleChange}
            defaultValue={query.city}
            className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none"
          />
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap justify-between gap-5">

        {/* TYPE */}
        <div className="flex flex-col gap-1">
          <label htmlFor="type" className="text-[10px]">Type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            defaultValue={query.type}
            className="w-[100px] p-2.5 border border-gray-300 rounded-md text-sm outline-none"
          >
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        {/* PROPERTY */}
        <div className="flex flex-col gap-1">
          <label htmlFor="property" className="text-[10px]">Property</label>
          <select
            name="property"
            id="property"
            onChange={handleChange}
            defaultValue={query.property}
            className="w-[100px] p-2.5 border border-gray-300 rounded-md text-sm outline-none"
          >
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        {/* MIN PRICE */}
        <div className="flex flex-col gap-1">
          <label htmlFor="minPrice" className="text-[10px]">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Any"
            onChange={handleChange}
            defaultValue={query.minPrice}
            className="w-[100px] p-2.5 border border-gray-300 rounded-md text-sm outline-none"
          />
        </div>

        {/* MAX PRICE */}
        <div className="flex flex-col gap-1">
          <label htmlFor="maxPrice" className="text-[10px]">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Any"
            onChange={handleChange}
            defaultValue={query.maxPrice}
            className="w-[100px] p-2.5 border border-gray-300 rounded-md text-sm outline-none"
          />
        </div>

        {/* BEDROOM */}
        <div className="flex flex-col gap-1">
          <label htmlFor="bedroom" className="text-[10px]">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="Any"
            onChange={handleChange}
            defaultValue={query.bedroom}
            className="w-[100px] p-2.5 border border-gray-300 rounded-md text-sm outline-none"
          />
        </div>

        {/* SEARCH BUTTON */}
        <button
          onClick={handleFilter}
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
          <img src="/search.png" alt="search" className="w-6 h-6" />
        </button>

      </div>
    </div>
  );
};

export default Filter;