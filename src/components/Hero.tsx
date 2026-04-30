"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/ui/Button";

export default function Hero() {
  return (
    <>
      <div
        className="bg-[#0c0d0e] text-white flex items-center py-8"
        style={{
          height: "45%",
          minHeight: "200px",
        }}
      >
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-[50%]">
            <h2 className="font-bold mb-4 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {"Проектируем уверенность.\nЦифровая инженерия для критических задач".toUpperCase()}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
              Единственная аккредитованная лаборатория виртуальных испытаний в
              России. С 2015 года — надёжность в каждом расчёте
            </p>
            <div>
              <Button href="#count">Рассчитать проект</Button>
              <Button href="#cases" variant="outline">
                Посмотреть кейсы
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-[400px] h-[250px]">
            <Image
              src="/logo_glow3.png"
              alt="sfkh"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="bg-white pt-5 md:pt-8">
        <div className="">
          {/* Заголовок */}
          <h2 className="text-center text-2xl md:text-xl font-semibold text-gray-600">
            Нам доверяют
          </h2>

          {/* Логотипы */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <Image
              src="/autodor.png"
              alt="Автодор"
              width={300}
              height={100}
              className="object-contain hover:grayscale hover:opacity-70 transition duration-300"
            />

            <Image
              src="/rosavtodor.png"
              alt="Росавтодор"
              width={280}
              height={40}
              className="object-contain hover:grayscale hover:opacity-100 transition duration-300"
            />

            <Image
              src="/severstal.jpg"
              alt="Северсталь"
              width={340}
              height={40}
              className="object-contain hover:grayscale hover:opacity-100 transition duration-300"
            />

            <Image
              src="/nami.png"
              alt="НАМИ"
              width={300}
              height={40}
              className="bg-gray-100 object-contain hover:grayscale hover:opacity-100 transition duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
}
