"use client";

import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import Button from "@/ui/Button";
import { Menu, Sparkles } from "lucide-react";

export default function Header() {
  const navItems = [
    { name: "Услуги", href: "#services" },
    { name: "Проекты", href: "#projects" },
    { name: "О нас", href: "#about" },
    { name: "Команда", href: "#team" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        border-b border-white/10
        bg-[#090b0d]/70
        backdrop-blur-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      "
      style={{ height: "var(--header-height)" }}
    >
      {/* TOP GLOW LINE */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-[400px] h-[200px] bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute top-0 right-0 w-[300px] h-[180px] bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <div className="container-custom relative h-full flex items-center justify-between">
        {/* ================= LOGO ================= */}
        <Link
          href="#"
          className="
            relative flex items-center gap-4
            group
          "
        >
          {/* glow */}
          <div className="absolute inset-0 bg-cyan-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* logo wrapper */}
          <div
            className="
              relative flex items-center justify-center
              w-13 h-13 rounded-2xl
              border border-cyan-400/20
              bg-[#e5e4e5]
              backdrop-blur-xl
              overflow-hidden
              transition-all duration-500
              group-hover:border-cyan-400/40
              group-hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
              group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500
            "
          >
            {/* animated gradient */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20
              "
            />

            <Image
              src={withBasePath("/logo3.png")}
              alt="Logo"
              width={46}
              height={46}
              priority
              className="
                relative z-10 object-contain
                drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]
                
              "
            />
          </div>

          {/* text */}
          <div className="hidden sm:flex flex-col leading-tight">
            <span
              className="
                text-white font-semibold tracking-wide
                text-sm 
              "
            >
              НИИ Механики и проблем качества
            </span>

            <span className="text-xs text-gray-400">
              Инженерия. Превосходство. Точность.
            </span>
          </div>
        </Link>

        {/* ================= NAVIGATION ================= */}
        <nav
          className="
            hidden md:flex items-center
            px-5 py-3 rounded-2xl
            border border-white/5
            bg-white/[0.03]
            backdrop-blur-xl
            gap-8
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                relative text-sm font-medium
                text-gray-300
                hover:text-cyan-300
                transition-all duration-300
                group
              "
            >
              {item.name}

              {/* animated underline */}
              <span
                className="
                  absolute -bottom-1 left-0
                  h-[2px] w-0
                  rounded-full
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </nav>

        {/* ================= CTA ================= */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            className="
              !py-2.5 !px-5
              relative overflow-hidden
              border border-cyan-400/20
              shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
            onClick={() =>
              document
                .getElementById("contacts")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="relative z-10">Получить консультацию</span>

            {/* button glow */}
            <div
              className="
                absolute inset-0 opacity-0 hover:opacity-100
                transition duration-500
                bg-gradient-to-r from-cyan-400/20 to-blue-500/20
              "
            />
          </Button>
        </div>

        {/* ================= MOBILE ================= */}
        <button
          className="
            md:hidden
            flex items-center justify-center
            w-11 h-11 rounded-xl
            border border-white/10
            bg-white/5
            text-gray-300
            hover:text-white
            hover:border-cyan-400/30
            hover:bg-cyan-400/10
            transition-all duration-300
          "
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
