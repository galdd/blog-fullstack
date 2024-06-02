// src/components/SectionHeader.tsx
import React from "react";

interface SectionHeaderProps {
  text: string;
  className: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text, className }) => (
  <div className={className}>{text}</div>
);

export default SectionHeader;
