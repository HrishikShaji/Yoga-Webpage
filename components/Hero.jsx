import React from "react";
import img1 from "../public/assets/budha.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center h-screen w-full bg-primary-blue">
      <div></div>
      <div className="sm:w-[50%] flex md:flex-col md:justify-between justify-center items-center text-center sm:px-6 sm:pt-10">
        <h1 className="text-4xl sm:text-6xl  text-primary-white">
          Welcome to{" "}
          <span className="text-primary-black text-6xl sm:text-8xl">
            YourYoga
          </span>
        </h1>
        <p className="p-7 font-bold hidden md:block">
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '
        </p>
      </div>

      <Image
        src={img1}
        height={600}
        width={600}
        className="sm:h-[350px] h-[300px] w-[300px] sm:w-[350px] sm:mr-10"
        alt="image"
      />
    </div>
  );
};

export default Hero;
