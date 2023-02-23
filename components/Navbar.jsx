import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={
        toggle
          ? "h-screen w-screen bg-primary-white fixed z-40 top-0 opacity-90"
          : "w-screen h-[100px] fixed top-0 z-40 bg-primary-black flex justify-around items-center"
      }
    >
      {toggle ? (
        <div className="flex flex-col justify-center  items-center w-full h-full">
          <ul className="flex flex-col justify-around items-center">
            <a onClick={handleToggle} href="#home" className="my-6 text-4xl">
              Home
            </a>
            <a onClick={handleToggle} href="#about" className="my-6 text-4xl">
              About
            </a>
            <a onClick={handleToggle} href="#gallery" className="my-6 text-4xl">
              Gallery
            </a>
            <a onClick={handleToggle} href="#trainer" className="my-6 text-4xl">
              Trainer
            </a>
            <a onClick={handleToggle} href="#contact" className="my-6 text-4xl">
              Contact
            </a>
            <button
              onClick={handleToggle}
              className="h-[30px] w-[30px] my-6 rounded-full bg-primary-black"
            ></button>
          </ul>
        </div>
      ) : (
        ""
      )}
      <h1 className="text-2xl sm:text-4xl text-primary-white">YourYoga</h1>
      <div
        className="bg-primary-white h-[30px] cursor-pointer w-[30px] rounded-full"
        onClick={handleToggle}
      />
    </div>
  );
};
//"h-screen w-screen bg-primary-white fixed z-40 top-0 opacity-90"

export default Navbar;
