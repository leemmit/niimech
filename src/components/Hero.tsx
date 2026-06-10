"use client";

import Image from "next/image";
import Button from "@/ui/Button";
import { withBasePath } from "@/lib/basePath";
import { ChevronRight, Sparkles } from "lucide-react";
import "swiper/css";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative overflow-hidden
        bg-[#07090b]
        text-white
        
      "
    >
      {/* ================= BACKGROUND ================= */}

      {/* mesh glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-cyan-400/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-300px] right-[-100px] w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_45%)]" />
      </div>

      {/* grid overlay */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <div
        className="
          container-custom
          relative z-10
          min-h-[78vh]
          flex flex-col lg:flex-row
          items-center justify-between
          gap-16
          py-16 lg:py-24
        "
      >
        {/* ================= LEFT ================= */}
        <div className="flex-1 max-w-3xl">
          {/* badge */}
          {/* <div
            className="
              inline-flex items-center gap-2
              px-4 py-2 mb-6
              rounded-full
              border border-cyan-400/20
              bg-cyan-400/10
              text-cyan-300 text-sm
              backdrop-blur-xl
            "
          >
            <Sparkles size={16} />
            Аккредитованная лаборатория виртуальных испытаний
          </div> */}

          {/* title */}
          <h1
            className="
              font-black uppercase
              leading-[0.95]
              tracking-[-0.03em]
              text-4xl sm:text-5xl lg:text-7xl
              mb-8
            "
          >
            <span className="text-white">Проектируем</span>

            <br />

            <span
              className="
                text-transparent bg-clip-text
                bg-gradient-to-r
                from-cyan-300
                via-cyan-400
                to-blue-500
                drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]
              "
            >
              уверенность
            </span>

            <br />

            <span className="text-gray-300 text-[0.62em] font-bold">
              цифровая инженерия
            </span>

            <br />

            <span className="text-gray-500 text-[0.52em] font-semibold">
              для критических задач
            </span>
          </h1>

          {/* description */}
          <p
            className="
              max-w-2xl
              text-gray-400
              text-base md:text-lg
              leading-relaxed
              mb-10
            "
          >
            Единственная в России аккредитованная лаборатория виртуальных
            испытаний. С 2015 года создаём цифровые модели, предиктивную
            аналитику и инженерные решения для высоконагруженных отраслей.
          </p>

          {/* buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href="#contacts"
              className="
                !px-7 !py-4
                shadow-[0_0_40px_rgba(34,211,238,0.25)]
              "
            >
              Рассчитать проект
            </Button>

            <Button
              href="#projects"
              variant="outline"
              className="
                !px-7 !py-4
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >
              <span className="flex items-center gap-2">
                Посмотреть кейсы
                <ChevronRight size={18} />
              </span>
            </Button>
          </div>

          {/* stats */}
          <div className="flex flex-wrap gap-8 mt-14">
            {[
              ["10+", "лет опыта"],
              ["1000+", "виртуальных испытаний"],
              ["50+", "крупных проектов"],
            ].map(([value, label]) => (
              <div key={value}>
                <div
                  className="
                    text-3xl font-black
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-cyan-300 to-blue-500
                  "
                >
                  {value}
                </div>

                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div
          className="
            relative flex-1
            flex items-center justify-center
            min-h-[500px]
          "
        >
          {/* orbit glow */}
          <div className="absolute w-[520px] h-[520px] rounded-full border border-cyan-400/10 animate-pulse" />

          {/* main glow */}
          <div className="absolute w-[420px] h-[420px] bg-cyan-400/20 blur-[120px] rounded-full" />

          {/* rotating ring */}
          <div
            className="
              absolute w-[480px] h-[480px]
              rounded-full
              border border-dashed border-cyan-400/20
              animate-[spin_40s_linear_infinite]
            "
          />

          {/* image container */}
          <div
            className="
              relative z-10
              flex items-center justify-center
              w-[360px] h-[360px]
              rounded-[40px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl
              shadow-[0_0_80px_rgba(34,211,238,0.12)]
            "
          >
            <Image
              src={withBasePath("/logo_glow5.png")}
              alt="Digital Engineering"
              width={340}
              height={340}
              priority
              className="
                object-contain
                drop-shadow-[0_0_50px_rgba(34,211,238,0.45)]
                animate-float
              "
            />
          </div>

          {/* floating cards */}
          <div
            className="
              absolute top-6 left-0
              hidden xl:flex
              px-4 py-3
              bg-transparent
              text-sm text-gray-300
            "
          >
            Виртуальные испытания
          </div>

          <div
            className="
              absolute bottom-6 right-0
              hidden xl:flex
              px-4 py-3
              bg-transparent
              text-sm text-cyan-200
            "
          >
            Проведение расчетов
          </div>
        </div>
      </div>
    </section>
  );
}
