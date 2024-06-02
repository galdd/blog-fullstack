// src/components/Footer.tsx
import React from "react";
import ImageComponent from "../ImageComponent";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center px-16 py-6 w-full bg-black max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-wrap">
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c46c1b3ec8c64db912c2baa5b147b62828c8121df4ea121d38e270eae7216a3c?apiKey=68f079f8729e4181b13bdd329a153cde&"
          alt="Company Logo"
          className="shrink-0 max-w-full aspect-[3.7] w-[105px]"
          index={0}
        />
        <div className="flex flex-1 gap-4 pl-20 my-auto max-md:flex-wrap">
          <ImageComponent
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b10f40a7510d9e98ed44bc25d99496a919416ff5748f5fba5e33c119169f8470?apiKey=68f079f8729e4181b13bdd329a153cde&"
            alt="Social Media Icon 1"
            className="shrink-0 w-6 aspect-square"
            index={0}
          />
          <ImageComponent
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d19e5d3c6cf391c1e214691b9f1ba9a85607f468dc44d1fc084736399468816f?apiKey=68f079f8729e4181b13bdd329a153cde&"
            alt="Social Media Icon 2"
            className="shrink-0 w-6 aspect-square"
            index={0}
          />
          <ImageComponent
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18e14d5516378b7f42c17afe8d22edebe78cec75779c8b226ea8527c547d9f52?apiKey=68f079f8729e4181b13bdd329a153cde&"
            alt="Social Media Icon 3"
            className="shrink-0 w-6 aspect-square"
            index={0}
          />
          <ImageComponent
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1dc3f3690b7b9b8eeb2e01d5abb0c5817f010cf7e5315705654cfd41e708382?apiKey=68f079f8729e4181b13bdd329a153cde&"
            alt="Social Media Icon 4"
            className="shrink-0 w-6 aspect-square"
            index={0}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
