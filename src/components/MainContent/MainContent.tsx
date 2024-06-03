import React from "react";
import BlogPost from "../BlogPost";
import RecentWork from "../RecentWork";
import BlogHeader from "../BlogHeader";
import BlogSectionHeader from "../BlogSectionHeader";
import ImageComponent from "../ImageComponent";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const MainContent: React.FC = () => {
  return (
    <main>
      <BlogHeader
        title="Full Stack Chronicles: Adventures in Modern Web Development"
        subtitle="This blog is written by Gal Dagan, a Full Stack developer with extensive experience in cybersecurity. The blog features guides on writing professional and clean code, secure coding practices, and modern technology trends."
      />
      <section
        id="blog"
        className="flex flex-col px-24 pt-6 w-full shadow-sm max-md:px-5 max-md:max-w-full"
      >
        <div className="flex flex-col justify-center px-8 font-bold text-center max-md:px-5 max-md:max-w-full">
          <div className="flex justify-center items-center px-16 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center max-w-full w-[775px]">
              <div className="flex flex-col max-md:max-w-full">
                <BlogSectionHeader category="BLOG" title="Latest blog posts" />
                <div className="text-base leading-6 text-sky-300 max-md:max-w-full" />
                <div className="text-4xl tracking-tighter leading-10 text-cyan-900 max-md:max-w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-8 mt-6 max-md:px-5 max-md:max-w-full">
          <div className="pb-9 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-5">
              {[
                {
                  src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8bc3340f93dbd44895312fcff590f9233cf38e5eb92d0fb3dde43b4e1ca473a?apiKey=68f079f8729e4181b13bdd329a153cde&",
                  label: "Design",
                  title: "UX review presentations",
                  description:
                    "How do you create compelling presentations that wow your colleagues and impress your managers?",
                },
                {
                  src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe33515734c025d9e8a30f2b5daa8f7b8d65050fd6579624420dcc63d5a3be07?apiKey=68f079f8729e4181b13bdd329a153cde&",
                  label: "Product",
                  title: "Migrating to Linear 101",
                  description:
                    "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
                },
                {
                  src: "https://cdn.builder.io/api/v1/image/assets/TEMP/08c75e4afb0d0990c338829be390364760e6d9d01b5161e467f0e78796dbf991?apiKey=68f079f8729e4181b13bdd329a153cde&",
                  label: "Software Engineering",
                  title: "Building your API Stack",
                  description:
                    "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
                },
              ].map((post, index) => (
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
      <section id="recent-works">
        <RecentWork />
      </section>
      <ScrollToTopButton />
    </main>
  );
};

export default MainContent;
