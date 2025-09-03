import React from "react";

interface HenzaiLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white" | "terracota";
}

const HenzaiLogo: React.FC<HenzaiLogoProps> = ({
  className = "",
  size = "md",
  variant = "default",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const fillColor =
    variant === "white"
      ? "#FFFFFF"
      : variant === "terracota"
      ? "#DE693E"
      : "#DE693E"; // cor original do SVG

  return (
    <div className={`flex items-center ${className}`}>
      <svg
        className={sizeClasses[size]}
        viewBox="0 0 1080 1080"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={fillColor}
          d="M424.23,295.04v205.6c0,4.93-1.96,9.66-5.45,13.15l-54.94,54.94h0l-81.95-81.95c-3.49-3.49-5.45-8.22-5.45-13.15v-178.6c0-10.27,8.33-18.59,18.59-18.59h110.6c10.27,0,18.59,8.33,18.59,18.59Z"
        />
        <path
          fill={fillColor}
          d="M803.56,606v178.96c0,10.27-8.33,18.59-18.59,18.59h-110.6c-10.27,0-18.59-8.33-18.59-18.59v-205.24c0-4.93,1.96-9.66,5.45-13.15l55.31-55.31,81.58,81.58c3.49,3.49,5.45,8.22,5.45,13.15Z"
        />
        <path
          fill={fillColor}
          d="M592.57,635.22l-111.82,111.82c-40.76,40.76-106.84,40.76-147.61,0h0c-40.76-40.76-40.76-106.84,0-147.61l30.7-30.7h201.19c34.7,0,52.07,41.95,27.54,66.48Z"
        />
        <path
          fill={fillColor}
          d="M803.56,276.44v140.09c0,4.93-1.96,9.66-5.45,13.15l-81.58,81.58h-201.19c-34.69,0-52.07-41.95-27.54-66.48l162.88-162.89c3.49-3.49,8.22-5.45,13.15-5.45h121.7c10.27,0,18.59,8.33,18.59,18.59Z"
        />
      </svg>
    </div>
  );
};

export default HenzaiLogo;
