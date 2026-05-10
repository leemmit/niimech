"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { withBasePath } from "@/lib/basePath";
import Modal from "@/ui/Modal";
import { motion, AnimatePresence } from "framer-motion";
import GalleryCarousel from "@/ui/GalleryCarousel";
import { galleries } from "@/lib/generated-galleries";
import { MoveRight } from "lucide-react";
import Button from "@/ui/Button";
import Heading from "@/ui/Heading";

interface Project {
  title: string;
  gallery: keyof typeof galleries;
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
  const projectImages = activeProject ? galleries[activeProject.gallery] : [];

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
    <section id="projects" className="w-full bg-gray-100 py-10">
      <div className="container-custom">
        <Heading>Проекты</Heading>
        <h2 className="text-4xl md:text-4xl font-bold mt-2 mb-5 leading-tight whitespace-pre-line">
          Наши работы
        </h2>

        {/* GRID */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* ВСЕ КАРТОЧКИ В ОДНОМ ПОТОКЕ */}
          {projects.map((project, index) => {
            const isHidden = index >= 3 && !showAll;
            const previewImage = galleries[project.gallery]?.[0];

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
                      src={withBasePath(previewImage)}
                      alt={project.title}
                      fill
                      className="object-contain group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>

                    {/* <p className="text-sm text-gray-500 mb-2">
                      {project.problem}
                    </p> */}

                    {/* <p className="text-sm font-semibold text-blue-600 mb-3">
                      ✔ {project.result}
                    </p> */}

                    <div className="space-y-1 mb-4">
                      {project.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="text-sm text-gray-600 flex gap-2"
                        >
                          <span className="text-(--hover-dark)">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(project);
                      }}
                      className="text-sm font-medium text-(--base) hover:underline"
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
        <div className="text-center ">
          <Button className="mt-4" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Скрыть" : "Показать все"}
            <ChevronDown
              className={`transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              size={16}
            />
          </Button>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {activeProject && (
            <Modal onClose={() => setActiveProject(null)}>
              <h3 className="text-2xl font-bold mb-4 md:mb-2">
                {activeProject.title}
              </h3>

              <div className="mb-2">
                <GalleryCarousel images={projectImages} />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <h4 className="text-red-700 font-semibold md:max-w-80 text-center text-lg mb-1">
                    {activeProject.problem}
                  </h4>
                  <MoveRight />
                  <h4 className="text-green-500 font-semibold md:max-w-80 text-center text-lg mb-1">
                    {activeProject.result}
                  </h4>
                </div>

                {/* <div>
                  <h4 className="font-semibold text-lg mb-1">Задача</h4>

                  <p className="text-gray-600">{activeProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-1">Результат</h4>

                  <p className="text-blue-600 font-medium">
                    {activeProject.result}
                  </p>
                </div> */}

                <div>
                  <h4 className="font-semibold text-lg mb-1">Описание</h4>

                  <p className="text-gray-600 leading-relaxed">
                    {activeProject.details}
                  </p>
                </div>

                {/* <div>
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
                </div> */}
              </div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
