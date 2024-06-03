// src/components/ImageComponent.tsx
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className: string;
  index?: number;
}

const ImageComponent: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

export default ImageComponent;
