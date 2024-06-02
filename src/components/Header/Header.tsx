import React from "react";
import ImageComponent from "../ImageComponent";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col justify-center px-9 w-full bg-white border-b border-gray-100 border-solid max-md:px-5 max-md:max-w-full relative z-30">
      <div className="flex flex-col justify-center py-0 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-8 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
            <div className="flex justify-center items-center">
              <ImageComponent
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/27eef4edcbe8aa552f1b2c1020d6bb005a84c5b4166b0fb5093370368103a40b?apiKey=68f079f8729e4181b13bdd329a153cde&"
                alt="Company Logo"
                className="aspect-[4.35] w-[142px] max-md:w-[100px]"
                index={0}
              />
            </div>
            <div className="flex gap-5 justify-between text-base leading-6 whitespace-nowrap font-[250] text-slate-600 max-md:flex-wrap max-md:gap-2">
              <button className="justify-center my-auto max-md:my-0">
                Button
              </button>
              <button className="py-1 max-md:py-0">Button</button>
              <button className="py-1 max-md:py-0">Button</button>
            </div>
          </div>
          <div className="flex flex-col justify-center text-base leading-6 py-2 text-white max-md:py-1 max-md:mt-2 max-md:w-full max-md:flex max-md:justify-center">
            <button className="justify-center px-5 py-2 bg-cyan-700 border border-blue-800 border-solid shadow-sm rounded-[63px] max-md:px-3 max-md:py-1">
              Call to Action 2
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
