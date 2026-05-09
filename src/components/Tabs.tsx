"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section id="services" className="w-full bg-gray-100 py-10">
      <div className="container-custom">
        <span className="text-sm uppercase tracking-[0.2em] text-[#16b5da] font-semibold">
          Услуги
        </span>
      </div>
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
        {/* ===== LEFT: TABS ===== */}
        <div className="flex flex-col gap-3 items-end">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left px-4 py-3 rounded-xl border transition-all duration-200 w-full max-w-[300px] cursor-pointer ${
                active === i
                  ? "bg-blue-600 text-white shadow-md border-blue-600"
                  : "bg-white hover:bg-gray-50 border-gray-200"
              }`}
              aria-selected={active === i}
            >
              <div className="font-semibold text-base md:text-lg">
                {tab.title}
              </div>
            </button>
          ))}
        </div>

        {/* ===== RIGHT: CONTENT ===== */}
        <div className="flex items-center relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute w-full"
            >
              {/* TITLE */}
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                {tabs[active].title}
              </h3>

              {/* LIST */}
              <ul className="space-y-3">
                {tabs[active].content.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-blue-600 mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
