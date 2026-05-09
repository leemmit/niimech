"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/ui/Button";
import PartnersSlider from "@/ui/PartnersSlider";
import { withBasePath } from "@/lib/basePath";
import "swiper/css";

export default function Hero() {
  return (
    <>
      <div
        id=""
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
            <div className="flex gap-8">
              <Button href="#count">Рассчитать проект</Button>
              <Button href="#cases" variant="outline">
                Посмотреть кейсы
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-[400px] h-[250px]">
            {/* 🔵 Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-100 h-100 bg-[#16b5da] rounded-full blur-3xl opacity-15"></div>
            </div>

            {/* 🖼 Картинка */}
            <Image
              src={withBasePath("/logo_glow5.png")}
              alt="logo-glow"
              width={300}
              height={300}
              className="object-contain relative z-10 "
              priority
            />
          </div>
        </div>
      </div>
      <div className="bg-white pt-5 md:pt-8">
        <div className="">
          {/* Заголовок */}
          <h1 className="text-center text-4xl md:text-xl font-semibold text-gray-600">
            Нам доверяют лидеры отрасли
          </h1>

          {/* Логотипы */}
          {/* <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
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
          </div> */}

          <PartnersSlider />
        </div>
      </div>
    </>
  );
}
