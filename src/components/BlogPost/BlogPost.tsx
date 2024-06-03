// src/components/BlogPost.tsx
import React from "react";
import ImageComponent from "../ImageComponent";
import SectionHeader from "../SectionHeader/SectionHeader";

interface BlogPostProps {
  src: string;
  label: string;
  title: string;
  description: string;
  index: number;
}

const BlogPost: React.FC<BlogPostProps> = ({
  src,
  label,
  title,
  description,
  index,
}) => (
  <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow max-md:mt-10">
      <ImageComponent
        src={src}
        alt={`${label} illustration`}
        className="w-full shadow-lg aspect-[1.69]"
        index={0}
      />
      <div className="flex flex-col justify-center mt-5">
        <SectionHeader
          text={label}
          className="text-sm font-bold leading-5 text-sky-300 "
        />
        <div className="flex flex-col mt-3">
          <div className="flex gap-4">
            <SectionHeader
              text={title}
              className="flex-1 text-2xl leading-8 text-cyan-900 font-BygonestRusticRegular"
            />
            <div className="flex justify-center items-center self-start pt-1 pb-0.5">
              <ImageComponent
                src={`https://cdn.builder.io/api/v1/image/assets/TEMP/282817755339ce54e97e3941c00e8501e813bbaca20972d09e2bffe8bcbe9950?apiKey=68f079f8729e4181b13bdd329a153cde&`}
                alt=""
                className="w-6 aspect-square"
                index={0}
              />
            </div>
          </div>
          <SectionHeader
            text={description}
            className="mt-2 text-base leading-6 text-slate-600"
          />
        </div>
      </div>
    </div>
  </article>
);

export default BlogPost;
