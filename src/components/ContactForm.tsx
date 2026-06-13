"use client";

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Heading from "@/ui/Heading";

export default function ContactForm() {
  return (
    <section id="contacts" className="w-full bg-gray-50 py-6">
      <div className="container-custom pt-(--header-height)">
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
        </div>
      </div>
    </section>
  );
}
