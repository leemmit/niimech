"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { withBasePath } from "@/lib/basePath";
import Modal from "@/ui/Modal";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  image: string;
  problem: string;
  result: string;
  highlights: string[];
  details: string;
}

interface Props {
  projects: Project[];
}

export default function Projects({ projects }: Props) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const prevHeight = useRef<number>(0);

  // 🔥 автоскролл при раскрытии
  useEffect(() => {
    if (buttonRef.current && showAll) {
      requestAnimationFrame(() => {
        buttonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [showAll]);

  return (
    <section id="projects" className="w-full bg-gray-100 py-16">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10">Проекты</h2>

        {/* GRID */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* ВСЕ КАРТОЧКИ В ОДНОМ ПОТОКЕ */}
          {projects.map((project, index) => {
            const isHidden = index >= 3 && !showAll;

            return (
              <motion.div
                key={project.title}
                layout
                animate={{
                  opacity: isHidden ? 0 : 1,
                  y: isHidden ? -20 : 0,
                  scale: isHidden ? 0.98 : 1,
                  maxHeight: isHidden ? 0 : 600,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
                style={{
                  pointerEvents: isHidden ? "none" : "auto",
                }}
                onClick={() => !isHidden && setActiveProject(project)}
              >
                <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={withBasePath(project.image)}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-2">
                      {project.problem}
                    </p>

                    <p className="text-sm font-semibold text-blue-600 mb-3">
                      ✔ {project.result}
                    </p>

                    <div className="space-y-1 mb-4">
                      {project.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="text-xs text-gray-600 flex gap-2"
                        >
                          <span className="text-blue-600">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(project);
                      }}
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      Читать подробнее →
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mx-auto"
          >
            {showAll ? "Скрыть" : "Показать все"}
            <ChevronDown
              className={`transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              size={16}
            />
          </button>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {activeProject && (
            <Modal onClose={() => setActiveProject(null)}>
              <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>

              <Image
                src={withBasePath(activeProject.image)}
                alt={activeProject.title}
                width={600}
                height={300}
                className="rounded-lg mb-4 w-full h-56 object-cover"
              />

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-1">Задача</h4>
                  <p className="text-gray-600">{activeProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-1">Результат</h4>
                  <p className="text-blue-600 font-medium">
                    {activeProject.result}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Ключевые особенности
                  </h4>

                  <div className="space-y-2">
                    {activeProject.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="text-blue-600 mt-[2px]">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Подробное описание
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    {activeProject.details}
                  </p>
                </div>
              </div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
