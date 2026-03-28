"use client";

import Link from "next/link";

export default function Header() {
  const navItems = [
    { name: "Услуги", href: "#services" },
    { name: "Проекты", href: "#projects" },
    { name: "О нас", href: "#about" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full bg-dark-gray z-50"
      style={{ height: "var(--header-height)" }}
    >
      <div className="container-custom h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-light-gray hover:text-blue transition-colors"
        >
          LOGO
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-light-gray hover:text-blue transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-blue text-white px-6 py-2 rounded-lg hover:bg-blue-hover transition-colors duration-300">
            Оставить заявку
          </button>
        </nav>

        <button className="md:hidden text-light-gray">
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
