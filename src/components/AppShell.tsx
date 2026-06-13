"use client";

import { useState, useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Login from "@/components/account/Login";
import ApplicationModal from "./ApplicationModal";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [applicationOpen, setApplicationOpen] = useState(false);

  useEffect(() => {
    console.log("loginOpen", loginOpen);
  }, [loginOpen]);

  useEffect(() => {
    console.log("applicationOpen", applicationOpen);
  }, [applicationOpen]);

  return (
    <>
      <Header
        onLoginClick={() => setLoginOpen(true)}
        onApplicationClick={() => setApplicationOpen(true)}
      />
      <Login open={loginOpen} onClose={() => setLoginOpen(false)} />
      <ApplicationModal
        isOpen={applicationOpen}
        onClose={() => setApplicationOpen(false)}
      />
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
