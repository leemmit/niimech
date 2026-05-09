"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { withBasePath } from "@/lib/basePath";

interface Props {
  images: readonly string[];
}

export default function GalleryCarousel({ images }: Props) {
  const [selected, setSelected] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelected(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (!images.length) return null;

  return (
    <div className="w-full">
      {/* MAIN SLIDER */}
      <div className="relative overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative min-w-full h-[420px] bg-gray-100"
            >
              <Image
                src={withBasePath(img)}
                alt={`gallery-${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* LEFT */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:scale-105 transition"
        >
          <ChevronLeft size={22} />
        </button>

        {/* RIGHT */}
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:scale-105 transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
              selected === index
                ? "border-sky-500 scale-[1.02]"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={withBasePath(img)}
              alt={`thumb-${index}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
