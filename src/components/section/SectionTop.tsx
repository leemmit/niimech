"use client";

import Link from "next/link";
import Image from "next/image";

interface SectionTopProps {
  title: string;
  image: string;
  description: string;
  buttonText?: string;
  showButton?: boolean;
  buttonLink?: string;
}

export default function SectionTop({
  title,
  image,
  description,
  buttonText = "Узнать больше",
  showButton = true,
  buttonLink = "#contact",
}: SectionTopProps) {
  return (
    <div
      className="bg-[#0c0d0e] text-white flex items-center"
      style={{
        height: "45%",
        minHeight: "200px",
      }}
    >
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-[50%]">
          <h2 className="font-bold mb-4 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-pre-line">
            {title.toUpperCase()}
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
            {description}
          </p>
          {showButton && (
            <Link
              href={buttonLink}
              className="inline-block bg-[#16b5da] text-white px-5 py-2 md:px-6 md:py-3 rounded-lg hover:bg-[#1f8da6] transition-colors duration-300 text-sm md:text-base font-semibold"
            >
              {buttonText}
            </Link>
          )}
        </div>
        <div className="relative w-full max-w-[400px] h-[250px]">
          <Image
            src={image || "/404.png"}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
