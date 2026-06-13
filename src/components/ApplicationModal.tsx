"use client";

import { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import Modal from "@/ui/Modal";
import Button from "@/ui/Button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationModal({ isOpen, onClose }: Props) {
  const [phone, setPhone] = useState("");

  console.log("ApplicationModal render", isOpen);

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

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose}>
      <div className="max-w-full max-h-100% mx-auto bg-white/80 rounded-3xl">
        <h2 className="text-4xl font-bold mb-4 leading-tight">
          Обсудим вашу задачу
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Оставьте заявку — эксперт свяжется с вами в течение 1 рабочего дня.
        </p>
        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-8">
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
              <label className="block text-sm font-medium mb-2">E-mail *</label>

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
        </form>
      </div>
    </Modal>
  );
}
