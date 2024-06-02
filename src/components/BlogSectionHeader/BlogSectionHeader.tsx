import * as React from "react";

type BlogSectionHeaderProps = {
  category: string;
  title: string;
};

const BlogSectionHeader: React.FC<BlogSectionHeaderProps> = ({
  category,
  title,
}) => {
  return (
    <div className="flex flex-col max-md:max-w-full">
      <p className="text-base leading-6 text-sky-300 max-md:max-w-full">
        {category}
      </p>
      <h1 className="text-4xl tracking-tighter leading-10 text-cyan-900 max-md:max-w-full">
        {title}
      </h1>
    </div>
  );
};

export default BlogSectionHeader;
