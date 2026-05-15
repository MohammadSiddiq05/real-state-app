import React, { useState } from "react";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div
      className="
        w-full
        h-[350px]
        sm:h-[280px]
        flex
        gap-5
      "
    >
      {/* FULL SCREEN SLIDER */}
      {imageIndex !== null && (
        <div
          className="
            fixed
            inset-0
            bg-black/95
            z-[9999]
            flex
            items-center
            justify-between
          "
        >
          {/* LEFT ARROW */}
          <div
            className="
              flex-1
              flex
              items-center
              justify-center
              cursor-pointer
            "
            onClick={() => changeSlide("left")}
          >
            <img
              src="/arrow.png"
              alt=""
              className="
                w-[50px]
                md:w-[30px]
                sm:w-[20px]
              "
            />
          </div>

          {/* IMAGE */}
          <div
            className="
              flex-[10]
              h-full
              flex
              items-center
              justify-center
              p-5
            "
          >
            <img
              src={images[imageIndex]}
              alt=""
              className="
                w-full
                h-full
                object-cover
                rounded-xl
              "
            />
          </div>

          {/* RIGHT ARROW */}
          <div
            className="
              flex-1
              flex
              items-center
              justify-center
              cursor-pointer
            "
            onClick={() => changeSlide("right")}
          >
            <img
              src="/arrow.png"
              alt=""
              className="
                w-[50px]
                md:w-[30px]
                sm:w-[20px]
                rotate-180
              "
            />
          </div>

          {/* CLOSE BUTTON */}
          <div
            className="
              absolute
              top-5
              right-5
              text-white
              text-4xl
              font-bold
              cursor-pointer
            "
            onClick={() => setImageIndex(null)}
          >
            ✕
          </div>
        </div>
      )}

      {/* BIG IMAGE */}
      <div
        className="
          flex-[3]
          sm:flex-[2]
        "
      >
        <img
          src={images[0]}
          alt=""
          onClick={() => setImageIndex(0)}
          className="
            w-full
            h-full
            object-cover
            rounded-xl
            cursor-pointer
          "
        />
      </div>

      {/* SMALL IMAGES */}
      <div
        className="
          flex-1
          flex
          flex-col
          justify-between
          gap-5
        "
      >
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() => setImageIndex(index + 1)}
            className="
              h-[100px]
              sm:h-[80px]
              w-full
              object-cover
              rounded-xl
              cursor-pointer
            "
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;