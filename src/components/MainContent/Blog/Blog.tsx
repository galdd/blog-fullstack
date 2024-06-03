import React from "react";

import BlogPost from "./BlogPost";
import { blogPostsData } from "./blogPostsData";
import SectionHeader from "@/components/Shared/SectionHeader";

type BlogProps = {
  className?: string;
};

const Blog: React.FC<BlogProps> = ({ className }) => {
  return (
    <section
      id="blog"
      className={`blog flex flex-col px-24 pt-2 w-full shadow-sm max-md:px-5 max-md:max-w-full ${className}`}
    >
      <div className="flex flex-col justify-center px-8 font-bold text-center max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center items-center px-16 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col justify-center max-w-full w-[775px]">
            <div className="flex flex-col max-md:max-w-full">
              <SectionHeader category="BLOG" title="Latest blog posts" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-8 mt-6 max-md:px-5 max-md:max-w-full">
        <div className="pb-9 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-5">
            {blogPostsData.map((post, index) => (
              <BlogPost
                key={index}
                src={post.src}
                label={post.label}
                title={post.title}
                description={post.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
