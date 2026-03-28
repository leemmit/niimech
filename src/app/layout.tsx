import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Компания - Инновационные решения",
  description:
    "Профессиональные решения в области строительства, судостроения и авиации",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main style={{ paddingTop: "var(--header-height)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
