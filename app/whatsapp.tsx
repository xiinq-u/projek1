"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatApp() {
  // Ubah nomor dan pesan WhatsApp default di dua konstanta berikut.
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "6281234567890";
  const message = "Halo PT. Isa Building, saya ingin konsultasi mengenai proyek...";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, y: 40, filter: "blur(20px)" }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="mb-4 w-[calc(100vw-2rem)] max-w-[360px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#09090b]/90 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] backdrop-blur-3xl sm:mb-6 sm:rounded-[2.5rem]"
            >
              {/* Header: Clean Minimalist */}
              <div className="p-5 pb-3 sm:p-8 sm:pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10">
                      <span className="text-[10px] font-black tracking-tighter text-white">
                        ISA<span className="text-red-600">.</span>BW
                      </span>
                      <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#09090b] bg-red-600" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold tracking-tight text-white uppercase">
                        Consultant Support
                      </h4>
                      <p className="mt-0.5 text-[10px] font-medium text-zinc-500 uppercase tracking-[0.15em]">
                        Online Presence
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Body */}
              <div className="px-5 py-3 sm:px-8 sm:py-4">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="group relative"
                  >
                    <div className="rounded-[1.5rem] rounded-tl-none border border-white/[0.05] bg-zinc-900/50 p-5 backdrop-blur-sm">
                      <p className="text-[12px] leading-[1.6] text-zinc-400">
                        Welcome. How can we elevate your space? <br />
                        <span className="text-white font-medium italic">
                          — ISA Building Team
                        </span>
                      </p>
                    </div>
                    <span className="mt-2 block text-[9px] font-medium uppercase tracking-widest text-zinc-600">
                      Delivered
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Action Button: Industrial Luxury */}
              <div className="p-5 pt-2 sm:p-8 sm:pt-2">
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-white px-6 py-4 transition-all"
                >
                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent" />

                  <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-black">
                    Start Consultation
                  </span>
                </motion.a>

                <div className="mt-6 flex items-center justify-center gap-2 opacity-30">
                  <div className="h-[1px] w-8 bg-zinc-500" />
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    Secure Line
                  </span>
                  <div className="h-[1px] w-8 bg-zinc-500" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Trigger Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`group relative flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-700 ${
            isOpen
              ? "border-white/10 bg-zinc-900 rotate-180 shadow-none"
              : "border-red-600/20 bg-[#09090b] shadow-[0_20px_40px_rgba(220,38,38,0.15)]"
          }`}
        >
          {/* Animated Ring */}
          <div
            className={`absolute inset-0 rounded-full border border-red-600/50 transition-all duration-1000 ${isOpen ? "scale-0 opacity-0" : "animate-pulse scale-110 opacity-100"}`}
          />

          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-white transition-colors group-hover:fill-red-500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          )}
        </motion.button>
      </div>
    </>
  );
}
