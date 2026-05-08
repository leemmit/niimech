"use client";

import { AdvantageItem } from "@/lib/data";
import { icons } from "@/lib/icons";

interface Props {
  items: AdvantageItem[];
}

export default function Advantages({ items }: Props) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = icons[item.icon];

            if (!Icon) return null;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-7 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#16b5da]/10 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-[#16b5da]" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
