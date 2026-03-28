import { ServiceItem } from "@/lib/data";

interface SectionBottomProps {
  services?: ServiceItem[];
  checklist?: string[];
}

export default function SectionBottom({
  services = [],
  checklist = [],
}: SectionBottomProps) {
  // Если нет данных - не показываем блок
  if (services.length === 0 && checklist.length === 0) {
    return null;
  }

  return (
    <div
      className="bg-light-gray flex items-center overflow-y-auto"
      style={{ height: "50%" }}
    >
      <div className="container-custom py-4 md:py-6 lg:py-8">
        {/* Services Grid */}
        {services.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center group hover:bg-white p-3 md:p-4 rounded-xl transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-dark mb-1 group-hover:text-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Checklist */}
        {checklist.length > 0 && (
          <div>
            <h3 className="text-lg md:text-xl font-bold text-dark mb-3 md:mb-4 text-center">
              Преимущества
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-white/80 transition-all duration-300 group"
                >
                  <span className="text-blue text-lg md:text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    ✓
                  </span>
                  <span className="text-sm md:text-base text-gray-700 group-hover:text-dark transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
