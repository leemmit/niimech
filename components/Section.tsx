import React from "react";
import Link from "next/link";

interface SectionProps {
  id: string;
  title: string;
  description: string;
  services?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  checklist?: string[];
  buttonText?: string;
  showButton?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  description,
  services = [],
  checklist = [],
  buttonText = "Узнать больше",
  showButton = true,
}) => {
  return (
    <section id={id} className="min-h-screen flex flex-col">
      {/* Top block - Black background */}
      <div className="bg-black text-white flex-1 flex items-center">
        <div className="container-custom py-16 md:py-0">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {description}
            </p>
            {showButton && (
              <Link
                href="#contact"
                className="inline-block bg-blue text-white px-8 py-3 rounded-lg hover:bg-blue-hover transition-colors duration-300 font-semibold"
              >
                {buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Bottom block - Light background */}
      <div className="bg-light-gray flex-1 flex items-center">
        <div className="container-custom py-16">
          {services.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          )}

          {checklist.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6 text-center">
                Преимущества
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-blue text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section;
