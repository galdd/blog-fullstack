import ImageComponent from "@/components/Shared/ImageComponent";
import SectionHeader from "@/components/Shared/SectionHeader";
import React from "react";

type AboutMeProps = {
  title: string;
  subtitle: string;
  className?: string;
};

const AboutMe: React.FC<AboutMeProps> = ({ title, subtitle, className }) => (
  <section
    id="#about-me"
    className={`about-me flex flex-row py-0 bg-white w-full px-24 max-md:px-5 max-md:max-w-full sm:max-h-full  pr-0 lg:h-[240px] lg:pt-8 md:pt-0 lg:pb-0 md:h-[340px] sm:h-[340px] relative ${className}`}
  >
    <div className="flex flex-col w-full px-2 lg:w-2/3 lg:py-0 md:py-0 sm:pt-6">
      <h1 className="lg:text-5xl md:text-4xl tracking-tighter text-gray-900 leading-[72px] max-md:text-4xl max-md:leading-[55px] font-BygonestRusticRegular">
        {title}
      </h1>
      <p className="mt-4 text-base text-slate-600">{subtitle}</p>
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
          alt="Icon 3"
          className="w-8 h-8"
        />
      </div>
    </div>

    <div
      className="flex  w-1/3  relative  max-w-full hidden sm:flex"
      style={{
        justifyContent: "end",
        position: "relative",
        top: "-80px",
        left: "80px",
      }}
    >
      <div className="lg:w-96 lg:h-96 md:w-72 md:h-72 sm:w-48 sm:h-48 bg-sky-100 rounded-full flex justify-center items-center">
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/af2b9bbbd8eb8e34ff55c1bd374d68dce021a414633285255f2514ef59abe03d?apiKey=68f079f8729e4181b13bdd329a153cde&"
          alt="Development Illustration"
          className="w-9/12 h-auto aspect-square"
        />
      </div>
    </div>
  </section>
);

export default AboutMe;
