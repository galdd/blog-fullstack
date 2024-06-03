// src/components/SectionHeader.tsx
import React from "react";

interface BlogSectionHeaderProps {
  text: string;
  className: string;
}

const SectionHeader: React.FC<BlogSectionHeaderProps> = ({
  text,
  className,
}) => <div className={className}>{text}</div>;

export default SectionHeader;
