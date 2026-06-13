"use client";

import { useState } from "react";
import Modal from "@/ui/Modal";
import Button from "@/ui/Button";
import { sanitizeApplicationData } from "@/lib/sanitizeText";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationModal({ isOpen, onClose }: Props) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [agreement, setAgreement] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (name.trim().length < 2) {
      newErrors.name = "Введите имя";
    }

    if (company.trim().length < 2) {
      newErrors.company = "Введите название компании";
    }

    const phoneDigits = phone.replace(/\D/g, "");

    if (phoneDigits.length !== 11) {
      newErrors.phone = "Введите корректный телефон";
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      newErrors.email = "Введите корректный email";
    }

    if (!agreement) {
      newErrors.agreement = "Необходимо согласие на обработку данных";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedData = sanitizeApplicationData({
      name,
      company,
      phone,
      email,
      description,
    });

    console.log(sanitizedData);

    if (!validate()) {
      return;
    }
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
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-8">
            {/* NAME */}
            <div>
              <label className="block text-sm font-medium mb-2">Имя *</label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                className={`w-full h-12 px-4 rounded-xl border outline-none transition ${errors.name ? "border-red-500" : "border-gray-300 focus:border-[#16b5da]"}`}
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* COMPANY */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Компания *
              </label>

              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={`w-full h-12 px-4 rounded-xl border outline-none transition ${errors.company ? "border-red-500" : "border-gray-300 focus:border-[#16b5da]"}`}
              />

              {errors.company && (
                <p className="mt-1 text-sm text-red-500">{errors.company}</p>
              )}
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
                className={`w-full h-12 px-4 rounded-xl border outline-none transition ${errors.phone ? "border-red-500" : "border-gray-300 focus:border-[#16b5da]"}`}
              />

              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium mb-2">E-mail *</label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full h-12 px-4 rounded-xl border outline-none transition ${errors.email ? "border-red-500" : "border-gray-300 focus:border-[#16b5da]"}`}
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
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
                value={description}
                placeholder="Кратко опишите задачу..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#16b5da] transition resize-none"
              />
            </div>
          </div>

          {/* CHECKBOX */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreement}
              onChange={(e) => setAgreement(e.target.checked)}
              className="mt-1 accent-[#16b5da]"
            />

            <span className="text-sm text-gray-600 leading-relaxed">
              Я согласен на обработку персональных данных
            </span>
          </label>

          {errors.agreement && (
            <p className="text-sm text-red-500">{errors.agreement}</p>
          )}

          {/* BUTTON */}
          <Button type="submit" className="w-full">
            Отправить заявку
          </Button>
        </form>
      </div>
    </Modal>
  );
}
