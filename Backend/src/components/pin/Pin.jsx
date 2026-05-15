import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        
        <div
          className="
            w-[220px]
            flex
            gap-3
            items-start
          "
        >
          
          {/* IMAGE */}
          <img
            src={item.images}
            alt=""
            className="
              w-20
              h-16
              object-cover
              rounded-md
              flex-shrink-0
            "
          />

          {/* TEXT */}
          <div
            className="
              flex
              flex-col
              gap-1
              min-w-0
            "
          >
            
            <Link
              to={`/${item.id}`}
              className="
                text-[16px]
                font-semibold
                text-gray-800
                hover:text-blue-600
                transition
                leading-5
              "
            >
              {item.title}
            </Link>

            <span
              className="
                text-sm
                text-gray-500
              "
            >
              {item.bedroom} bedroom
            </span>

            <span
              className="
                text-[18px]
                font-bold
                text-black
              "
            >
              $ {item.price}
            </span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;