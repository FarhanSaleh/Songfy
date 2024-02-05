import { useState } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { Card } from "../Card";

const Carousel = ({ slides, title, className, id }) => {
  let box = document.querySelector(`.${id}`);

  const prevSlide = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };
  const nextSlide = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };

  return (
    <div className={`${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <div className="flex items-center gap-2 text-white text-3xl">
          <button
            onClick={prevSlide}
            className="hover:scale-110 duration-200 active:scale-95"
          >
            <IoMdArrowDropleftCircle />
          </button>
          <button
            onClick={nextSlide}
            className="hover:scale-110 duration-200 active:scale-95"
          >
            <IoMdArrowDroprightCircle />
          </button>
        </div>
      </div>
      <div className={`${id} flex gap-2 overflow-hidden scroll-smooth`}>
        {slides?.map((item, index) => {
          return (
            <Card
              key={index}
              imgSrc={`${item?.images[0]?.url}`}
              title={item?.name}
              desc={item?.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
