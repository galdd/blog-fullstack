import React from "react";
import ImageComponent from "../Shared/ImageComponent";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full bg-white border-b border-gray-100 py-2 px-5 md:px-9 relative z-50">
      <div className="flex items-center">
        <ImageComponent
          src="/images/logo.png"
          alt="Company Logo"
          className="max-w-[125px] max-h-[75px]"
        />
      </div>
      <nav className="flex-grow flex justify-center">
        <div className="flex gap-5 items-center text-base text-slate-600">
          <a href="#about-me" className="hover:text-cyan-700 cursor-pointer">
            About Me
          </a>
          <a href="#blog" className="hover:text-cyan-700 cursor-pointer">
            Blog
          </a>
          <a
            href="#recent-works"
            className="hover:text-cyan-700 cursor-pointer"
          >
            Recent Works
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
