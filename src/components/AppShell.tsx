"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Login from "@/components/account/Login";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <Header onLoginClick={() => setLoginOpen(true)} />
      <Login open={loginOpen} onClose={() => setLoginOpen(false)} />
      <main
        style={{
          //marginTop: "var(--header-height)",
          backgroundColor: "e6e6e6",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
