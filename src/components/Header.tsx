"use client";

import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import Button from "@/ui/Button";

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
        backdrop-blur-md bg-dark-gray
        border-b border-white/5
        shadow-lg shadow-black/20
      "
      style={{ height: "var(--header-height)" }}
    >
      <div className="container-custom h-full flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative transition-transform duration-300 group-hover:scale-105">
            <Image
              src={withBasePath("/logo3.png")}
              alt="Logo"
              width={44}
              height={44}
              priority
            />
          </div>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                relative text-(--hover-light) hover:text-(--base)
                transition-colors duration-300 text-sm font-medium
                group
              "
            >
              {item.name}

              {/* underline animation */}
              <span
                className="
                  absolute left-0 -bottom-1 w-0 h-[2px]
                  bg-(--hover-dark) transition-all duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}

          {/* CTA */}
          <div className="ml-2">
            <Button className="!py-2 !px-5 shadow-md">
              Получить консультацию
            </Button>
          </div>
        </nav>

        {/* MOBILE */}
        <button className="md:hidden text-light-gray hover:text-white transition">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
