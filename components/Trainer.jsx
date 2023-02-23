import React from "react";
import trainer1 from "../public/assets/trainer1.jpg";
import trainer2 from "../public/assets/trainer2.jpg";
import trainer3 from "../public/assets/trainer3.jpg";
import Image from "next/image";

const Trainer = () => {
  return (
    <div
      id="trainer"
      className="bg-primary-green p-20 flex flex-col justify-center "
    >
      <h1 className="text-4xl mb-10 text-center">YourYoga Trainers</h1>
      <div className="flex justify-around flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={trainer1}
            height={900}
            width={900}
            alt="image"
            className="h-[400px] w-[300px] object-cover "
          />
          <h2 className="text-2xl mt-3">Trainer 1</h2>
          <p className="text-2xl  mb-5">Yoga Instructor</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={trainer2}
            height={900}
            width={900}
            alt="image"
            className="h-[400px] w-[300px] object-cover "
          />
          <h2 className="text-2xl mt-3">Trainer 2</h2>
          <p className="text-2xl mb-5">Yoga Instructor</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={trainer3}
            height={900}
            width={900}
            alt="image"
            className="h-[400px] w-[300px] object-cover "
          />
          <h2 className="text-2xl mt-3">Trainer 3</h2>
          <p className="text-2xl mb-5">Yoga Instructor</p>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
