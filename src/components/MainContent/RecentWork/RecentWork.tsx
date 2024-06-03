import CustomBorderImage from "@/components/Shared/CustomBorderImage";
import * as React from "react";
import { recentWorksData } from "./recentWorksData";

type RecentWorkProps = {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  borderColor: string;
  isOdd: boolean;
};

const RecentWorkCard: React.FC<RecentWorkProps> = ({
  imageSrc,
  altText,
  title,
  description,
  borderColor,
  isOdd,
}) => (
  <article
    className={`flex flex-col ${
      isOdd ? "mt-24" : "mt-6"
    } max-md:mt-12 max-md:max-w-full`}
  >
    <CustomBorderImage
      borderColor={borderColor}
      src={imageSrc}
      alt={altText}
      width={540}
      height={648}
    />
    <figcaption className="flex flex-col mt-6 max-md:mt-4 max-md:max-w-full">
      <h2 className="text-4xl tracking-tighter text-cyan-900 max-md:text-2xl max-md:leading-7 max-md:max-w-full font-BygonestRusticRegular">
        {title}
      </h2>
      <p className="mt-2 text-lg leading-7 text-slate-400 max-md:text-base max-md:leading-6 max-md:max-w-full">
        {description}
      </p>
    </figcaption>
  </article>
);

function RecentWorks() {
  return (
    <section
      id="recent-works"
      className="flex justify-center items-center px-16 py-4 w-full bg-white max-md:px-5 max-md:py-10 max-md:max-w-full"
    >
      <div className="mt-8 mb-2 w-full max-w-[1216px] max-md:mt-4 max-md:mb-1 max-md:max-w-full">
        <div className="flex gap-32 max-md:flex-col max-md:gap-8">
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-6 max-md:mt-4 max-md:max-w-full">
              <h3 className="text-base leading-6 text-sky-300 max-md:text-sm max-md:max-w-full">
                PORTFOLIO
              </h3>
              <p className="text-4xl tracking-tighter leading-10 text-cyan-900 max-md:text-2xl max-md:leading-8 max-md:max-w-full font-Bygonest">
                Recent works
              </p>
            </div>
            {recentWorksData.slice(3).map((work, index) => (
              <RecentWorkCard
                key={index}
                {...work}
                isOdd={(index + 3) % 2 !== 0}
              />
            ))}
          </div>
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            {recentWorksData.slice(0, 3).map((work, index) => (
              <RecentWorkCard key={index} {...work} isOdd={index % 2 !== 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentWorks;
