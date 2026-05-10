"use client";

import Heading from "@/ui/Heading";
import { motion } from "framer-motion";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface Props {
  items: TimelineItem[];
}

export default function Timeline({ items }: Props) {
  return (
    <section className="w-full bg-gray py-10">
      <div className="container-custom">
        <Heading>Как мы работаем / Технология</Heading>
      </div>

      <div className="container-custom relative md:w-200 py-10">
        {/* центральная линия */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gray-300 -translate-x-1/2" />

        <div className="flex flex-col gap-8">
          {items.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex w-full items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* карточка */}
                <div
                  className={`relative w-full md:w-[50%] bg-white p-6 rounded-xl shadow-md border border-gray-200
                  ${isLeft ? "mr-auto" : "ml-auto"}`}
                >
                  {/* точка */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-(--base) rounded-full
                    ${isLeft ? "-right-2" : "-left-2"}`}
                  />

                  {/* дата */}
                  <span className="text-xs text-gray-500">{item.date}</span>

                  {/* заголовок */}
                  <h3 className="text-lg font-bold mt-1 mb-2">{item.title}</h3>

                  {/* описание */}
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
