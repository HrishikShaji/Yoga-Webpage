import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col justify-center p-10 ">
      <h1 className="text-center text-4xl">Why YourYoga?</h1>
      <div className="flex flex-col md:flex-row  items-center  justify-around p-10 ">
        <div className="bg-primary-white mb-10 flex flex-col justify-center items-center h-[250px] md:w-[350px] sm:w-[300px] w-[250px] rounded-lg">
          <h2>title</h2>
          <p>content</p>
        </div>
        <div className="bg-primary-white mb-10 flex flex-col justify-center items-center h-[250px] md:w-[350px] sm:w-[300px] w-[250px] rounded-lg">
          <h2>title</h2>
          <p>content</p>
        </div>
        <div className="bg-primary-white mb-10 flex flex-col justify-center items-center h-[250px] md:w-[350px] sm:w-[300px] w-[250px] rounded-lg">
          <h2>title</h2>
          <p>content</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
