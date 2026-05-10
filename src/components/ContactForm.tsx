"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Button from "@/ui/Button";
import Heading from "@/ui/Heading";

export default function ContactForm() {
  const [phone, setPhone] = useState("");

  // маска телефона
  const handlePhoneChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(1, 11);

    let formatted = "+7";

    if (digits.length > 0) {
      formatted += ` (${digits.slice(0, 3)}`;
    }

    if (digits.length >= 4) {
      formatted += `) ${digits.slice(3, 6)}`;
    }

    if (digits.length >= 7) {
      formatted += `-${digits.slice(6, 8)}`;
    }

    if (digits.length >= 9) {
      formatted += `-${digits.slice(8, 10)}`;
    }

    setPhone(formatted);
  };

  return (
    <section id="contacts" className="w-full bg-gray-50 py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div>
            <Heading>Контакты</Heading>

            <h2 className="text-4xl font-bold mt-2 mb-4 leading-tight">
              Обсудим вашу задачу
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Оставьте заявку — эксперт свяжется с вами в течение 1 рабочего
              дня.
            </p>

            <div className="space-y-5">
              {/* PHONE */}
              <a
                href="tel:+74991550723"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#16b5da] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#16b5da]/10 flex items-center justify-center shrink-0">
                  <Phone className="text-[#16b5da]" size={22} />
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">Телефон</div>

                  <div className="font-semibold text-lg group-hover:text-[#16b5da] transition-colors">
                    +7 499 155-07-23
                  </div>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:office@niimech.ru"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#16b5da] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#16b5da]/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#16b5da]" size={22} />
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">E-mail</div>

                  <div className="font-semibold text-lg group-hover:text-[#16b5da] transition-colors">
                    office@niimech.ru
                  </div>
                </div>
              </a>

              {/* ADDRESS */}
              <div className="p-5 rounded-2xl bg-white border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#16b5da]/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#16b5da]" size={22} />
                  </div>

                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">Адрес</div>

                    <div className="font-semibold text-lg mb-4">
                      125319, Москва,
                      <br />
                      Ленинградский проспект, 64
                    </div>

                    <a
                      href="https://yandex.ru/maps/-/CPcGVFyB"
                      target="_blank"
                      className="inline-flex items-center gap-2 text-[#16b5da] font-medium hover:gap-3 transition-all"
                    >
                      Открыть на карте
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <form className="space-y-5">
              {/* NAME */}
              <div>
                <label className="block text-sm font-medium mb-2">Имя *</label>

                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:border-[#16b5da] transition"
                />
              </div>

              {/* COMPANY */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Компания *
                </label>

                <input
                  type="text"
                  placeholder="Название компании"
                  className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:border-[#16b5da] transition"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Телефон *
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:border-[#16b5da] transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  E-mail *
                </label>

                <input
                  type="email"
                  placeholder="example@mail.ru"
                  className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:border-[#16b5da] transition"
                />
              </div>

              {/* SELECT */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Направление
                </label>

                <select className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:border-[#16b5da] transition bg-white">
                  <option>Виртуальные испытания</option>
                  <option>Цифровой двойник</option>
                  <option>Нормативная документация</option>
                  <option>Реконструкция ДТП</option>
                  <option>Другое</option>
                </select>
              </div>

              {/* TEXTAREA */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Описание задачи
                </label>

                <textarea
                  rows={5}
                  placeholder="Кратко опишите задачу..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#16b5da] transition resize-none"
                />
              </div>

              {/* CHECKBOX */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-[#16b5da] " />

                <span className="text-sm text-gray-600 leading-relaxed">
                  Я согласен на обработку персональных данных
                </span>
              </label>

              {/* BUTTON */}
              <Button type="submit" className="w-full">
                Отправить заявку
              </Button>
              {/* <button
                type="submit"
                className="w-full h-13 rounded-xl bg-[#00BFFF] hover:bg-[#00a8e6] text-white font-semibold transition-all duration-300 shadow-lg shadow-sky-500/20"
              >
                Отправить заявку
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
