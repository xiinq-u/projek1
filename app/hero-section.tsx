import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
  "https://i.pinimg.com/736x/e4/90/80/e49080ec90cd8fef92fa04cb169eaeb8.jpg",
  "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2070",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
   <section
      id="home"
      data-gsap="hero-section"
      className="relative flex min-h-screen w-full overflow-hidden bg-black pt-20 lg:pt-0"
    >
      {/* Container Utama Split Screen (Grid 2 Kolom Penuh) */}
      <div className="grid w-full min-h-screen grid-cols-1 lg:grid-cols-12">
        
        {/* ================= SISI KIRI (Teks & Konten) ================= */}
        <div className="relative z-20 flex flex-col justify-center px-6 py-16 sm:px-12 lg:col-span-6 lg:px-20 xl:pl-28">

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex w-fit items-center gap-3 rounded-full px-2 py-1.5 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-300">
              Established 2022
            </span>
          </motion.div>

          <h1
            data-gsap="hero-title"
            className="text-5xl font-black uppercase leading-[0.92] tracking-tighter text-white sm:text-7xl xl:text-8xl"
          >
            Mewujudkan <br />
            impian <br/>
            <span className="italic text-red-600">Bersama</span>
            <span className="text-zinc-600"></span>
          </h1>

          <p
            data-gsap="hero-copy"
            className="mt-6 max-w-lg text-base font-medium leading-relaxed text-zinc-400 sm:text-lg"
          >
            PT Isa building workshop melayani konsultasi desain dan pelaksanaan konstruksi secara profesional serta menjunjung tinggi sosial kemasyarakatan untuk mewujudkan impian bersama.{" "}
            <span></span> {" "}
            <span></span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-red-600 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
            >
              <span>Mulai Konsultasi</span>
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 px-8 py-4 text-xs font-bold uppercase tracking-widest text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            >
              Lihat Proyek
            </a>
          </div>
        </div>

        {/* ================= SISI KANAN (Full Tanpa Bingkai, Mengikuti Rasio 14.8 x 21.0 cm) ================= */}
        <div className="relative min-h-[400px] w-full overflow-hidden lg:col-span-6 lg:min-h-screen flex items-center justify-center">
          <div 
            className="relative h-full w-full overflow-hidden"
            style={{ aspectRatio: "148 / 210" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full"
              >
                <img
                  src={heroImages[currentIndex]}
                  alt="Industrial Construction"
                  className="h-full w-full object-cover"
                />
                {/* Gradasi gelap tipis agar menyatu dengan sisi kiri pada layar besar */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/30 lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent lg:hidden" />
              </motion.div>
            </AnimatePresence>

            {/* Indikator Slider (Bullet) di Tengah Bawah */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-md">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-6 bg-red-600" : "w-1.5 bg-white/40 hover:bg-white"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}