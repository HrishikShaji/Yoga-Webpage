import React from "react";
import Image from "next/image";
import img1 from "../public/assets/yoga.svg";

const Welcome = () => {
  return (
    <div className="sm:h-screen flex flex-col sm:flex-row items-center py-10  justify-around w-full bg-primary-cyan">
      <div>
        <Image
          src={img1}
          height={600}
          width={600}
          className="block sm:hidden md:block sm:h-[350px] h-[300px] w-[300px] sm:w-[350px] sm:mr-10 mb-10 sm:mb-0"
          alt="image"
        />
      </div>
      <div className="bg-primary-blue p-10 w-[80%] md:w-[40%] h-[60%] sm:h-[70%] md:h-[60%] text-center items-center flex flex-col justify-center">
        <h1 className="text-3xl">
          What is <span className="text-primary-white text-6xl">YourYoga</span>{" "}
          ?
        </h1>
        <p className="text-xl mt-6">
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum '
        </p>
      </div>
    </div>
  );
};

export default Welcome;
