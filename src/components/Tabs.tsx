"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCheck } from "lucide-react";
import Heading from "@/ui/Heading";

interface Tab {
  title: string;
  content: string[];
}

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gray-100 py-10"
    >
      {/* GLOW */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#16b5da]/10 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* HEADER */}
        <div className="mb-8 max-w-3xl">
          <div className="mb-4">
            <Heading>Услуги</Heading>
          </div>

          <h2 className="mb-5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Комплекс инженерных и виртуальных испытаний
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            От цифровых двойников и FEM-моделирования до сертификации,
            нормативной документации и реконструкции ДТП.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[340px_1fr]">
          {/* ===== LEFT: TABS ===== */}
          <div className="flex flex-col gap-4">
            {tabs.map((tab, i) => {
              const isActive = active === i;

              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-(--hover-dark) bg-(--hover-dark) text-white shadow-xl"
                      : "border-gray-200 bg-white hover:border-[#16b5da]/30 hover:shadow-md"
                  }`}
                  aria-selected={isActive}
                >
                  {/* ACTIVE LIGHT */}
                  {isActive && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 30,
                      }}
                    />
                  )}

                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div>
                      {/* <div
                        className={`mb-2 text-sm uppercase tracking-[0.2em] ${
                          isActive ? "text-white/70" : "text-[#16b5da]"
                        }`}
                      >
                        Направление
                      </div> */}

                      <div className="text-lg font-semibold">{tab.title}</div>
                    </div>

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border text-sm font-semibold transition-all ${
                        isActive
                          ? "border-white/20 bg-white/10 text-white"
                          : "border-gray-200 bg-gray-50 text-gray-500"
                      }`}
                    >
                      0{i + 1}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ===== RIGHT: CONTENT ===== */}
          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
            {/* TOP LIGHT */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16b5da]/40 to-transparent" />

            {/* GLOW */}
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#16b5da]/5 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -24,
                }}
                transition={{
                  duration: 0.28,
                  ease: "easeOut",
                }}
                className="relative z-10"
              >
                {/* LABEL */}
                {/* <div className="mb-4 inline-flex rounded-full border border-[#16b5da]/20 bg-[#16b5da]/10 px-4 py-1 text-sm font-medium text-[#16b5da]">
                  Направление #{active + 1}
                </div> */}

                {/* TITLE */}
                <h3 className="mb-8 max-w-2xl text-3xl font-bold leading-tight text-gray-900">
                  {tabs[active].title}
                </h3>

                {/* LIST */}
                <div className="grid gap-4">
                  {tabs[active].content.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: i * 0.06,
                        duration: 0.25,
                      }}
                      className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50/80 p-3 transition-all duration-300 hover:border-[#16b5da]/30 hover:bg-white hover:shadow-md"
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-[#16b5da]/20 bg-[#16b5da]/10 text-[#16b5da]">
                        <CheckCheck size={18} />
                      </div>

                      <p className="leading-relaxed text-gray-700 pt-1">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
