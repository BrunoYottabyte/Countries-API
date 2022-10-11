import React from "react";
import { Moon } from "phosphor-react";

const Header = () => {
  return (
    <header className="relative z-10 h-16 shadow-sm flex items-center justify-between px-16">
      <p className="font-bold">Where in the world?</p>
      <div className="flex gap-1 items-center">
        <Moon size={16} />
        <p className="text-sm ">Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
