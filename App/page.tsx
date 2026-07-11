"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import Toast from "@/components/Toast";

export default function Home() {
  const [modalType, setModalType] = useState<"signup" | "login" | null>(null);
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: "", visible: false });

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: "", visible: false }), 3000);
  };

  return (
    <main className="min-h-screen">
      <Navbar onAuthClick={setModalType} />
      <Hero />
      <Services />
      <Calculator showToast={showToast} />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA onAuthClick={setModalType} />
      <Contact showToast={showToast} />
      <Footer />
      <AuthModal type={modalType} onClose={() => setModalType(null)} showToast={showToast} />
      <Toast toast={toast} />
    </main>
  );
}