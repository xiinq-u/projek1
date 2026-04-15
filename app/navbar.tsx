"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Logika deteksi arah scroll yang responsif
    if (latest > previous && latest > 50) {
      setIsScrolled(true);
    } else if (latest < previous) {
      setIsScrolled(false);
    }
  });

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Container Luar: Menggunakan padding responsif (px-4 untuk mobile, px-8 untuk PC)
    <div className="fixed top-0 z-[60] flex w-full justify-center p-4 md:p-6 lg:p-8 pointer-events-none">
      <motion.nav
        layout
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 30,
          mass: 0.8,
        }}
        animate={{
          // Width: fit-content saat compact, 100% saat memanjang
          width: isScrolled ? "100%" : "fit-content",
          // MaxWidth: 1200px (PC), 100% (Mobile)
          maxWidth: isScrolled ? "1200px" : "240px",
          borderRadius: isScrolled ? "20px" : "40px",
          y: 0,
        }}
        className="
          pointer-events-auto relative flex items-center justify-center overflow-hidden 
          shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-3xl border 
          bg-white/80 border-black/5 
          dark:bg-zinc-900/80 dark:border-white/10
        "
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 w-full ${
            isScrolled 
              ? 'px-4 md:px-8 py-3 md:py-4' // Lebih lebar di PC saat memanjang
              : 'px-3 py-2 md:px-5 md:py-3 gap-3 md:gap-6' // Lebih compact
          }`}
        >
          
          {/* LOGO: Responsif Font Size */}
<motion.div 
  layout
  className="text-base md:text-lg font-black tracking-tighter text-black dark:text-white shrink-0"
>
  ISA<span className="text-red-600">.</span>{isScrolled && "BUILDING"}
</motion.div>

          {/* NAV LINKS: Hanya muncul di Tablet & PC saat memanjang */}
          <AnimatePresence mode="wait">
            {isScrolled && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="hidden md:flex space-x-6 lg:space-x-10 text-[10px] lg:text-[11px] font-bold uppercase tracking-widest"
              >
                {["Home", "Services", "Portfolio", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, item.toLowerCase())}
                    className="text-black dark:text-white opacity-60 hover:opacity-100 transition-opacity"
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA: Responsif Padding & Icon */}
          <motion.div layout className="flex items-center shrink-0">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className={`
                flex items-center justify-center bg-red-600 font-bold text-white transition-all hover:brightness-110 active:scale-95
                ${isScrolled 
                  ? "rounded-full px-4 py-2 md:px-6 md:py-2.5 text-[9px] md:text-[10px] shadow-lg shadow-red-600/20" 
                  : "h-9 w-9 md:h-11 md:w-11 rounded-full"
                }
              `}
            >
              {isScrolled ? (
                <span>GET<span className="hidden sm:inline"> A QUOTE</span></span>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              )}
            </a>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}