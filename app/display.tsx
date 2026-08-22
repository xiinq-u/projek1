"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./navbar";
import Footer from "./footer";
import WhatApp from "./whatsapp";
import HeroSection from "./hero-section";
import ServicesSection from "./services-section";
import PortfolioSection from "./portfolio-section";
import AboutSection from "./about-section";
import ContactSection from "./contact-section";

// Plugin ini mengaktifkan animasi scroll GSAP di seluruh halaman.
gsap.registerPlugin(ScrollTrigger);

export default function Display() {
  // Ref ini membatasi GSAP agar hanya mengubah elemen di halaman ini.
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Pengguna yang mematikan animasi tetap mendapat tampilan statis.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      // Timeline ini mengatur urutan animasi pembuka pada hero.
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from("[data-gsap='hero-line']", {
          scaleX: 0,
          transformOrigin: "center",
          duration: 0.8,
        })
        .from(
          "[data-gsap='hero-title']",
          { y: 55, opacity: 0, duration: 1 },
          "-=0.35",
        )
        .from(
          "[data-gsap='hero-copy']",
          { y: 24, opacity: 0, duration: 0.7 },
          "-=0.5",
        )
        .from(
          "[data-gsap='hero-meta']",
          { y: 18, opacity: 0, duration: 0.6 },
          "-=0.35",
        );
      // Background hero bergerak perlahan mengikuti scroll.
      gsap.to("[data-gsap='hero-bg']", {
        yPercent: 12,
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-gsap='hero-section']",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
      // Semua elemen bertanda item muncul saat section masuk viewport.
      gsap.utils
        .toArray<HTMLElement>("[data-gsap='section']")
        .forEach((section) => {
          const items =
            section.querySelectorAll<HTMLElement>("[data-gsap='item']");
          gsap.fromTo(
            items,
            { y: 36, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              immediateRender: false,
              scrollTrigger: { trigger: section, start: "top 78%", once: true },
            },
          );
        });
      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope: pageRef },
  );

  // Urutan komponen di sini menentukan urutan section di halaman.
  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-red-600 selection:text-white"
    >
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatApp />
    </div>
  );
}
