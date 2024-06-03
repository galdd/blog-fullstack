import * as React from "react";

type SectionHeaderProps = {
  category: string;
  title: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ category, title }) => {
  return (
    <div className="flex flex-col max-md:max-w-full ">
      <p className="text-base leading-6 text-sky-300 max-md:max-w-full">
        {category}
      </p>
      <h1 className="text-4xl tracking-tighter leading-10 text-cyan-900 max-md:max-w-full font-Bygonest">
        {title}
      </h1>
    </div>
  );
};

export default SectionHeader;
