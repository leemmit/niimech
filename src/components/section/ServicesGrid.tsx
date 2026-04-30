import { ServiceItem } from "@/lib/data";
import { icons } from "@/lib/icons";

interface Props {
  services: ServiceItem[];
}

export default function ServicesGrid({ services }: Props) {
  if (!services.length) return null;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 md:gap-6 mb-6 md:mb-8">
      {services.map((service, index) => {
        const Icon = icons[service.icon];

        return (
          <div
            key={index}
            className="text-center group border border-gray-700 hover:bg-white p-3 md:p-4 rounded-xl"
          >
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">
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
  );
}
