import Link from "next/link";
import Image from "next/image";

import { Phone, Mail, MapPin, Send } from "lucide-react";

const Footer = () => {
  const navigation = [
    { title: "Услуги", href: "#services" },
    { title: "Проекты", href: "#projects" },
    { title: "О компании", href: "#about" },
    { title: "Команда", href: "#team" },
    { title: "Публикации", href: "#publications" },
    { title: "Контакты", href: "#contacts" },
  ];

  const socials = [
    {
      icon: Send,
      href: "#",
      label: "Telegram",
    },
    {
      icon: Send,
      href: "#",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-[#0c1117] text-white">
      <div className="container-custom py-16">
        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr_1fr] gap-12">
          {/* LEFT */}
          <div>
            {/* LOGO */}
            <Link href="/" className="inline-flex items-center gap-4 mb-6">
              <Image
                src="/logo.png"
                alt="МиПК"
                width={52}
                height={52}
                className="object-contain"
              />

              <div>
                <div className="text-2xl font-bold tracking-wide">МиПК</div>

                <div className="text-sm text-[#16b5da]">
                  Цифра. Надёжность. Будущее.
                </div>
              </div>
            </Link>

            {/* DESCRIPTION */}
            <p className="text-gray-400 leading-relaxed max-w-md mb-8">
              Единственная аккредитованная лаборатория виртуальных испытаний в
              России. Основана в 2015 году на базе МАДИ.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center hover:bg-[#16b5da] hover:border-[#16b5da] transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Навигация</h3>

            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-gray-400 hover:text-[#16b5da] transition-colors duration-300 w-fit"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACTS */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>

            <div className="flex flex-col gap-5">
              {/* PHONE */}
              <a
                href="tel:+74991550723"
                className="group flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#16b5da]/20 transition">
                  <Phone size={18} className="text-[#16b5da]" />
                </div>

                <div>
                  <div className="text-sm text-gray-500">Телефон</div>

                  <div className="text-gray-300 group-hover:text-white transition">
                    +7 499 155-07-23
                  </div>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:office@niimech.ru"
                className="group flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#16b5da]/20 transition">
                  <Mail size={18} className="text-[#16b5da]" />
                </div>

                <div>
                  <div className="text-sm text-gray-500">E-mail</div>

                  <div className="text-gray-300 group-hover:text-white transition">
                    office@niimech.ru
                  </div>
                </div>
              </a>

              {/* ADDRESS */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#16b5da]" />
                </div>

                <div>
                  <div className="text-sm text-gray-500">Адрес</div>

                  <div className="text-gray-300 leading-relaxed">
                    125319, Москва,
                    <br />
                    Ленинградский проспект, 64
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} ООО «МиПК». Все права защищены.
          </div>

          <div className="text-sm text-gray-500 text-center md:text-right">
            ИНН 7700000000 · ОГРН 1207700000000
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
