"use client";

import Link from "next/link";

interface SectionTopProps {
  title: string;
  description: string;
  buttonText?: string;
  showButton?: boolean;
  buttonLink?: string;
}

export default function SectionTop({
  title,
  description,
  buttonText = "Узнать больше",
  showButton = true,
  buttonLink = "#contact",
}: SectionTopProps) {
  return (
    <div
      className="bg-black text-white flex items-center"
      style={{
        height: "50%",
        minHeight: "200px",
      }}
    >
      <div className="container-custom">
        <div className="max-w-2xl">
          <h2 className="font-bold mb-4 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
            {description}
          </p>
          {showButton && (
            <Link
              href={buttonLink}
              className="inline-block bg-blue text-white px-5 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-hover transition-colors duration-300 text-sm md:text-base font-semibold"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
