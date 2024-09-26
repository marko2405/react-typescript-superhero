import React from "react";
import Button from "./Button";
const logo = require("../Assets/logo.png");
type Props = {};

const Header = () => {
  return (
    <div className="flex flex-wrap sm:flex-row gap-5 items-center justify-between bg-gradient-to-r from-myBlue drop-shadow-md to-myPink px-5 py-5 md:py-2 text-white">
      <img
        src={logo}
        className="w-[70px] drop-shadow-md cursor-pointer"
        alt="logo"
      />
      <div className="flex">
        <Button text="Add new ListBoard" secondary />
      </div>
    </div>
  );
};

export default Header;
