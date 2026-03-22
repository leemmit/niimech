"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Услуги", href: "#services" },
    { name: "Проекты", href: "#projects" },
    { name: "О нас", href: "#about" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-dark-gray z-50 transition-shadow ${isScrolled ? "shadow-lg" : ""}`}
    >
      <div className="container-custom h-header flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-light-gray hover:text-blue transition-colors"
          >
            LOGO
          </Link>
        </div>

        {/* Navigation */}
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

        {/* Mobile menu button */}
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
};

export default Header;
