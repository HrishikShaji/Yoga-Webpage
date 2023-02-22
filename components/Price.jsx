import React from "react";
import img1 from "../public/assets/1.png";
import Image from "next/image";

const Price = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl text-center mb-10">YourYoga Pricing Plans</h1>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="flex flex-col justify-around p-5 items-center h-[400px] w-[300px] sm:w-[400px] md:w-[300px] mb-5 bg-primary-white">
          <Image
            src={img1}
            height={900}
            width={900}
            alt="image"
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <h2>$40 Per Month</h2>
          <p>
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </p>
          <button className="bg-primary-blue p-2">Join Now</button>
        </div>
        <div className="flex flex-col justify-around p-5 items-center h-[400px] w-[300px] sm:w-[400px] md:w-[300px] mb-5 bg-primary-white">
          <Image
            src={img1}
            height={900}
            width={900}
            alt="image"
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <h2>$40 Per Month</h2>
          <p>
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </p>
          <button className="bg-primary-blue p-2">Join Now</button>
        </div>
        <div className="flex flex-col justify-around p-5 items-center h-[400px] w-[300px] sm:w-[400px] md:w-[300px] mb-5 bg-primary-white">
          <Image
            src={img1}
            height={900}
            width={900}
            alt="image"
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <h2>$40 Per Month</h2>
          <p>
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </p>
          <button className="bg-primary-blue p-2">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Price;
