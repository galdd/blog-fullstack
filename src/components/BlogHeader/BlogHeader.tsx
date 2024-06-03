import React from "react";
import ImageComponent from "../ImageComponent";

type BlogHeaderProps = {
  title: string;
  subtitle: string;
};

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, subtitle }) => (
  <header
    className="flex flex-row items-center bg-white w-full py-0 px-24 max-md:px-5 max-md:max-w-full relative z-20 overflow-hidden pr-0"
    style={{ height: "320px" }}
  >
    <div className="flex flex-col w-2/3 px-6">
      <h1 className="text-6xl tracking-tighter text-gray-900 leading-[72px] max-md:text-4xl max-md:leading-[55px] font-BygonestRusticRegular">
        {title}
      </h1>
      <p className="mt-4 text-xl leading-8 text-slate-600">{subtitle}</p>
      <div className="flex items-center gap-3 mt-4">
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2000701829492f16b4cc2576ee53b64a62135c25538cbf9ff4c25a5fb697c354?apiKey=68f079f8729e4181b13bdd329a153cde&"
          alt="Icon 2"
          className="w-8 h-8"
        />
      </div>
    </div>

    <div className="flex flex-col w-1/3 items-center relative z-10 overflow-hidden max-w-full">
      <div className="size-120 bg-sky-100 rounded-full p-6 flex justify-center items-center transform lg:translate-x-1/3 lg: -translate-y-24 translate-x-1/3 -translate-y-24">
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/af2b9bbbd8eb8e34ff55c1bd374d68dce021a414633285255f2514ef59abe03d?apiKey=68f079f8729e4181b13bdd329a153cde&"
          alt="Development Illustration"
          className="w-5/8 h-auto aspect-square transform lg:translate-y-14 lg:-translate-x-8 translate-y-24 -translate-x-10"
        />
      </div>
    </div>
  </header>
);

export default BlogHeader;
