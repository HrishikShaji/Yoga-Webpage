import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] fixed top-0 z-40 bg-primary-black flex justify-between px-10 items-center">
      <h1 className="text-2xl sm:text-4xl text-primary-white">YourYoga</h1>
      <div className="bg-primary-white h-[30px] w-[30px] rounded-full" />
    </div>
  );
};

export default Navbar;
