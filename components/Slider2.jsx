import React from "react";
import { useState } from "react";
import { Slides } from "./Slides";

const Slider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(Slides.length - 1);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + Slides.length) % Slides.length;
    setCurrentIndex(newIndex);
    setPrevIndex((newIndex - 1 + Slides.length) % Slides.length);
    setNextIndex(currentIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % Slides.length;
    setCurrentIndex(newIndex);
    setPrevIndex(currentIndex);
    setNextIndex((newIndex + 1) % Slides.length);
  };

  console.log(prevIndex, currentIndex, nextIndex);
  return (
    <div className="p-10 flex justify-center items-center">
      <button
        onClick={prevSlide}
        className="p-2 rounded-full h-[30px] w-[30px] bg-primary-black"
      ></button>
      <div className="hidden  h-[200px] w-[200px] bg-primary-blue mx-5 md:flex items-center justify-center">
        <div className="flex flex-col p-3  items-center">
          <h1>{Slides[prevIndex].name}</h1>
          <p className="text-center">{Slides[prevIndex].content}</p>
        </div>
      </div>
      <div className="h-[200px] w-[200px] bg-primary-blue mx-5 flex items-center justify-center">
        <div className="flex flex-col p-3  items-center">
          <h1>{Slides[currentIndex].name}</h1>
          <p className="text-center">{Slides[currentIndex].content}</p>
        </div>
      </div>
      <div className="hidden  h-[200px] w-[200px] bg-primary-blue mx-5 md:flex items-center justify-center">
        <div className="flex flex-col p-3  items-center">
          <h1>{Slides[nextIndex].name}</h1>
          <p className="text-center">{Slides[nextIndex].content}</p>
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="p-2 rounded-full h-[30px] w-[30px] bg-primary-black"
      ></button>
    </div>
  );
};

export default Slider2;
