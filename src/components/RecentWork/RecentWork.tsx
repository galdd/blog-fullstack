import * as React from "react";
import CustomBorderImage from "../CustomBorderImage";

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

const recentWorksData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c62b5c25eb66fa7dd88c1f7956984fd44d8f6567b091be68f497b53008f9e788?apiKey=68f079f8729e4181b13bdd329a153cde&",
    altText: "Image 1",
    title: "Byte1 - New looping video app",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
    borderColor: "border-sky-300",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e4bdef4cb20d862bed16fb3fb0e4c44f6b47577813ef00ad5c5358ec23af36aa?apiKey=68f079f8729e4181b13bdd329a153cde&",
    altText: "Image 2",
    title: "Byte2 - New looping video app",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
    borderColor: "border-cyan-900",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8fec21c1326ef34232105fc052204b31785b9aaf35cf9e084aa6a77f6e5a7fea?apiKey=68f079f8729e4181b13bdd329a153cde&",
    altText: "Image 3",
    title: "Byte3 - New looping video app",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
    borderColor: "border-sky-300",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e0d042b05a2b05fbc54e140d408009ae4b8e8c93bd256fccad8d36c5a5b100e0?apiKey=68f079f8729e4181b13bdd329a153cde&",
    altText: "Image 4",
    title: "Byte4 - New looping video app",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
    borderColor: "border-cyan-900",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fc16aa497bc619c27a4b5e462130208370e230728dd4a88b252a280070bed448?apiKey=68f079f8729e4181b13bdd329a153cde&",
    altText: "Image 5",
    title: "Byte5 - New looping video app",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
    borderColor: "border-sky-300",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cc3a3b867180aaa93129e6e68b861387f35f1953090075cee68cee6168d3a6e4?apiKey=68f079f8729e4181b13bdd329a153cde&",
    altText: "Image 6",
    title: "Byte6 - New looping video app",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
    borderColor: "border-cyan-900",
  },
];

function RecentWorks() {
  return (
    <section className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:py-10 max-md:max-w-full">
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
