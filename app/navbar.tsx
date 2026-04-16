"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Home, Briefcase, LayoutGrid, Mail, ChevronRight } from "lucide-react";
import type { Transition } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", icon: <Home size={18} /> },
  { name: "Services", icon: <Briefcase size={18} /> },
  { name: "Portfolio", icon: <LayoutGrid size={18} /> },
  { name: "Contact", icon: <Mail size={18} /> },
];

const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 18,
  mass: 0.8
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY.current && latest > 50) {
      setIsScrolled(true);
    } else if (latest < lastScrollY.current - 10 || latest <= 0) {
      setIsScrolled(false);
      setIsMobileOpen(false);
    }
    lastScrollY.current = latest;
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] flex w-full justify-center p-4 sm:p-6 md:p-8 pointer-events-none">
      {/* Container Utama: Menggunakan w-[95%] di mobile agar tidak mentok layar */}
      <div className="relative flex flex-col items-center w-[95%] sm:w-[90%] md:w-full max-w-[1100px]">
        
        {/* MAIN NAVBAR */}
        <motion.nav
          layout
          transition={springTransition}
          animate={{
            // Tablet & Mobile tetap bisa melebar tapi dikontrol max-width-nya
            width: isScrolled ? "100%" : "200px",
            height: "54px", 
            maxWidth: isScrolled ? "1100px" : "200px",
          }}
          className="
            pointer-events-auto relative flex items-center px-4 sm:px-6 overflow-hidden
            shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-2xl border rounded-full
            bg-white/80 border-white/40 dark:bg-zinc-900/80 dark:border-white/10
          "
        >
 {/* LOGO DENGAN UKURAN KONSISTEN */}
          <motion.div 
            layout 
            transition={springTransition}
            className={`
              font-black tracking-tighter text-black dark:text-white whitespace-nowrap z-10 
              ${isScrolled 
                ? "absolute left-5 sm:left-6 text-base md:text-lg" 
                : "absolute left-1/2 -translate-x-1/2 text-base md:text-lg" 
              }
            `}
          >
            ISA<span className="text-red-600">.</span>BUILDING
          </motion.div>

          {/* DESKTOP MENU (Hanya muncul di md keatas) */}
          <AnimatePresence>
            {isScrolled && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={`#${link.name.toLowerCase()}`}
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* RIGHT ACTIONS */}
          <div className="ml-auto z-10 flex items-center gap-2 sm:gap-4">
            <AnimatePresence>
              {isScrolled && (
                <motion.button 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="hidden md:block bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full text-[10px] font-bold active:scale-95 transition-all"
                >
                  GET A QUOTE
                </motion.button>
              )}
            </AnimatePresence>

            {/* Menu Button: Muncul di semua resolusi di bawah 'md' */}
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`md:hidden text-black dark:text-white p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all ${!isScrolled ? "hidden" : "flex"}`}
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>

        {/* FLOATING MOBILE DROP DOWN (Responsive untuk HP & iPad) */}
        <div className="absolute right-0 top-full mt-3 pointer-events-none">
          <AnimatePresence>
            {isMobileOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: 20 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="
                  pointer-events-auto flex flex-col gap-1 p-2
                  bg-white/95 dark:bg-zinc-900/95 backdrop-blur-3xl border rounded-[24px]
                  shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-black/5 dark:border-white/10
                  w-[200px] sm:w-[240px]
                "
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={`#${link.name.toLowerCase()}`}
                    onClick={() => setIsMobileOpen(false)}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: index * 0.05 } }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      flex items-center justify-between gap-4 p-3 rounded-[16px]
                      hover:bg-black/5 dark:hover:bg-white/10 transition-colors group
                    "
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-black/70 dark:text-white/70 group-hover:text-red-600 transition-colors">
                        {link.icon}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-black/50 dark:text-white/50 group-hover:text-black dark:group-hover:text-white">
                        {link.name}
                      </span>
                    </div>
                    <ChevronRight size={14} className="opacity-20 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
                
                <div className="h-[1px] bg-black/5 dark:bg-white/5 mx-2 my-1" />
                
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="bg-red-600 text-white py-4 rounded-[16px] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-red-500/20 active:bg-red-700 transition-all"
                >
                  Get Quote
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}