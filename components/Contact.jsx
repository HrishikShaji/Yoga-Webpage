import React from "react";

const Contact = () => {
  return (
    <div className="bg-primary-green relative h-screen w-full flex flex-col justify-center items-center">
      <div className="bg-primary-blue p-10 flex flex-col justify-center items-center absolute bottom-[100px] w-[70%] h-[70%] z-20">
        <h1 className="text-4xl text-center">Contact YourYoga</h1>
        <form className="flex flex-col justify-center items-center p-10 w-[300px] md:w-[50%]">
          <input className="w-full p-3 my-2" placeholder="Name..." />
          <input className="w-full p-3 my-2" placeholder="Email..." />
          <textarea className="w-full p-3 my-2" placeholder="Message..." />
          <button className="p-2 bg-primary-black text-primary-white my-2">
            Submit
          </button>
        </form>
      </div>
      <div className="bg-primary-black absolute bottom-0 z-10 h-[200px] w-full"></div>
      <h2 className="text-center text-2xl text-primary-white absolute z-20 bottom-[30px] ">
        © Copyright 2020. All rights reserved by Designer
      </h2>
    </div>
  );
};

export default Contact;
