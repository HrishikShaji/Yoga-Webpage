import React from "react";
import yoga1 from "../public/assets/yoga1.jpg";
import yoga2 from "../public/assets/yoga2.jpg";
import yoga3 from "../public/assets/yoga3.jpg";
import yoga4 from "../public/assets/yoga4.jpg";
import yoga5 from "../public/assets/yoga5.jpg";
import yoga6 from "../public/assets/yoga6.jpg";
import yoga7 from "../public/assets/yoga7.jpg";
import yoga8 from "../public/assets/yoga8.jpg";
import yoga9 from "../public/assets/yoga9.jpg";
import Image from "next/image";

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="flex flex-col justify-center items-center p-10"
    >
      <h1 className="text-4xl m-10">YourYoga Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <Image
          src={yoga1}
          height={900}
          width={900}
          alt="image"
          className="h-[400px] w-[300px] object-cover"
        />
        <Image
          src={yoga2}
          height={900}
          width={900}
          alt="image"
          className="h-[400px] w-[300px] object-cover"
        />
        <Image
          src={yoga3}
          height={900}
          width={900}
          alt="image"
          className="h-[400px] w-[300px] object-cover"
        />
        <Image
          src={yoga4}
          height={900}
          width={900}
          alt="image"
          className="h-[400px] w-[300px] object-cover"
        />
        <Image
          src={yoga5}
          height={900}
          width={900}
          alt="image"
          className="h-[400px] w-[300px] object-cover"
        />
        <Image
          src={yoga6}
          height={900}
          width={900}
          alt="image"
          className="h-[400px] w-[300px] object-cover"
        />
        <Image
          src={yoga7}
          height={900}
          width={900}
          alt="image"
          className="h-[400px] w-[300px] object-cover"
        />
        <Image
          src={yoga8}
          height={900}
          width={900}
          alt="image"
          className="h-[400px] w-[300px] object-cover"
        />
        <Image
          src={yoga9}
          height={900}
          width={900}
          alt="image"
          className="h-[400px] w-[300px] object-cover"
        />
      </div>
    </div>
  );
};

export default Gallery;
