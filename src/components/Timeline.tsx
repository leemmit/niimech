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
    <section className="relative overflow-hidden bg-[#0b1118] py-10">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* HEADER */}
        <div className="mb-4 max-w-3xl">
          <Heading>Как мы работаем / Технология</Heading>

          {/* <h2 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Полный цикл виртуальных испытаний
          </h2>

          <p className="text-lg leading-relaxed text-gray-400">
            От получения исходных данных до сертификации и внедрения конструкции
            в производство.
          </p> */}
        </div>

        {/* TIMELINE */}
        <div className="relative mx-auto max-w-6xl py-6">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent md:block" />

          <div className="flex flex-col gap-4">
            {items.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -80 : 80,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                  className={`relative flex w-full ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* DOT */}
                  <div className="absolute left-1/2 top-1/2 z-20 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#0b1118] bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.7)] md:block" />

                  {/* CARD */}
                  <div
                    className={`group relative w-full md:w-[47%] ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    {/* CARD GLOW */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

                    {/* CARD */}
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-400/30">
                      {/* TOP LIGHT */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                      <div className="flex items-center gap-6">
                        {/* STEP NUMBER */}
                        <div className="h-10 w-10 flex items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-lg font-bold text-cyan-300">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        {/* TITLE */}
                        <h3 className="text-2xl font-bold text-white m-0">
                          {" "}
                          {/* Убран mb-4, добавлен m-0 */}
                          {item.title}
                        </h3>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="leading-relaxed text-gray-400 mt-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
