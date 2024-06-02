import React from "react";
import Image from "next/image";

type CustomBorderImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  borderColor: string;
};

const CustomBorderImage: React.FC<CustomBorderImageProps> = ({
  src,
  alt,
  width,
  height,
  borderColor,
}) => {
  const borderColorHex =
    borderColor === "border-cyan-900" ? "#234768" : "#68C2F9";

  // Calculate total perimeter
  const totalPerimeter = 2 * (width + height);
  // Calculate length of each dash and gap to have 8 dashes and 8 gaps
  const dashLength = totalPerimeter / 16;
  const gapLength = dashLength;

  return (
    <figure
      className="p-4 inline-block bg-white relative"
      style={{
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="none"
          stroke={borderColorHex}
          strokeWidth="5"
          strokeDasharray={`${dashLength} ${gapLength}`}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={width}
        height={height}
        className="w-full aspect-[0.83] max-md:max-w-full lg:max-w-full max-md:w-3/4 max-md:h-auto"
      />
    </figure>
  );
};

export default CustomBorderImage;
