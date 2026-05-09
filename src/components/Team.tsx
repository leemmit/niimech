"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";
import { withBasePath } from "@/lib/basePath";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  members: TeamMember[];
}

export default function Team({
  title = "Люди, которые создают\nинженерные решения будущего",
  subtitle = "Команда",
  description = "Эксперты в области виртуальных испытаний, инженерного анализа и проектирования критически важных конструкций.",
  members,
}: Props) {
  return (
    <section
      id="team"
      className="w-full bg-black text-white py-10 overflow-hidden"
    >
      <div className="container-custom">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-[#16b5da] font-semibold">
            {subtitle}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight whitespace-pre-line">
            {title}
          </h2>

          <p className="text-gray-400 mt-5 text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {members.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-[#111] border border-white/10 hover:border-[#16b5da]/40 transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={withBasePath(person.image)}
                  alt={person.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute inset-0 bg-[#16b5da]/0 group-hover:bg-[#16b5da]/10 transition duration-500" />
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <span className="inline-block text-xs uppercase tracking-wider text-[#16b5da] mb-2">
                  {person.role}
                </span>

                <h3 className="text-xl font-semibold leading-snug mb-4">
                  {person.name}
                </h3>

                <div className="flex items-center gap-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#16b5da] flex items-center justify-center transition">
                    <Mail size={16} />
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl border border-[#16b5da]/0 group-hover:border-[#16b5da]/40 transition duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
