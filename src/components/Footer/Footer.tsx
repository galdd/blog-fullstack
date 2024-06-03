// src/components/Footer.tsx
import React from "react";
import ImageComponent from "../ImageComponent";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center px-16 py-6 w-full bg-black max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-wrap">
        {/* <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c46c1b3ec8c64db912c2baa5b147b62828c8121df4ea121d38e270eae7216a3c?apiKey=68f079f8729e4181b13bdd329a153cde&"
          alt="Company Logo"
          className="shrink-0 max-w-full aspect-[3.7] w-[105px]"
          index={0}
        /> */}
        <div className="flex flex-1 gap-4 pl-20 my-auto max-md:flex-wrap">
          <ImageComponent
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/19094dd6e0ade28cd6d063e4b59775247c1889b9aa9727ff23247da527e80cff?apiKey=68f079f8729e4181b13bdd329a153cde&"
            alt="Icon 1"
            className="w-8 h-8"
          />
          <ImageComponent
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c2242656887d7760132517e6b39c3a461c845979e50028d18abb878f900cd79?apiKey=68f079f8729e4181b13bdd329a153cde&"
            alt="Icon 2"
            className="w-8 h-8"
          />
          <ImageComponent
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c2242656887d7760132517e6b39c3a461c845979e50028d18abb878f900cd79?apiKey=68f079f8729e4181b13bdd329a153cde&"
            alt="Icon 2"
            className="w-8 h-8"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
