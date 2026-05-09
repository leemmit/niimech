"use client";

import { ServiceItem } from "@/lib/data";
import { icons } from "@/lib/icons";

interface Props {
  services: ServiceItem[];
}

export default function ServicesGrid({ services }: Props) {
  if (!services.length) return null;
  console.log("services.length", services.length);

  return (
    <section id="services" className="container-custom py-4 md:py-6 lg:py-8">
      <span className="text-sm uppercase tracking-[0.2em] text-[#16b5da] font-semibold">
        Числа и достижения
      </span>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 md:gap-6 mb-6 md:mb-8 py-6">
        {services.map((service, index) => {
          const Icon = icons[service.icon];
          if (!Icon) return null;

          return (
            <div
              key={index}
              className="group text-center border border-gray-700 p-3 md:p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg"
            >
              <div className="flex items-center justify-center text-3xl md:text-4xl mb-2 md:mb-3">
                <Icon />
              </div>

              <h3 className="text-base md:text-lg font-bold mb-1">
                {service.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
