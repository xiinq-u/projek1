"use client"; // Wajib untuk Next.js App Router

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  // Variasi animasi untuk kemunculan section
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-red-600 selection:text-white">
      
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter text-white"
          >
            ISA<span className="text-red-600">.</span>BUILDING
          </motion.span>

          <div className="hidden space-x-8 text-sm font-medium sm:flex">
            {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-zinc-400 hover:text-red-600 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:block"
          >
            <a href="#contact" className="rounded-full bg-red-600 px-5 py-2 text-xs font-bold text-white transition hover:scale-105 active:scale-95">
              GET A QUOTE
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen items-center justify-center bg-black pt-20 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')] bg-cover bg-center" 
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl"
          >
            Membangun <span className="text-red-600">Presisi</span>, <br /> Mewujudkan Visi.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-lg text-zinc-300"
          >
            PT. Isa Building Workshop menghadirkan solusi konstruksi dan desain interior berkualitas tinggi.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href="#portfolio" className="rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]">
              Lihat Projek
            </a>
            <a href="#contact" className="rounded-full border border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
              Konsultasi Gratis
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        id="services" className="py-24 bg-zinc-50"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight">Layanan Kami</motion.h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { title: "Konstruksi Bangunan", desc: "Pembangunan struktur kokoh dengan material premium." },
              { title: "Interior Design", desc: "Transformasi ruang dengan estetika fungsional dan modern." },
              { title: "Workshop & Fabrikasi", desc: "Pengerjaan custom furniture dan struktur besi berkualitas." },
            ].map((service, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group border-t-4 border-red-600 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
              >
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-4 text-zinc-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section (Bento Grid) */}
      <section id="portfolio" className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start justify-between gap-4 border-l-4 border-red-600 pl-6 md:flex-row md:items-end"
          >
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-red-600">Selected Works</span>
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Portfolio <span className="text-zinc-400">Terbaru</span>
              </h2>
            </div>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
            {/* Kartu Portfolio dengan Motion */}
            {[
              { col: "lg:col-span-8", title: "Premium Residence", category: "Interior", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72" },
              { col: "lg:col-span-4", title: "Modern Office", category: "Construction", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden bg-zinc-900 ${item.col} h-[400px] md:h-[500px]`}
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 z-20 p-8">
                  <p className="text-xs font-bold text-red-500 uppercase tracking-widest">{item.category}</p>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="h-full w-full bg-cover bg-center" 
                  style={{ backgroundImage: `url(${item.img})` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black py-24 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold tracking-tight">Tentang PT. Isa Building</h2>
            <p className="mt-6 text-zinc-400 leading-relaxed">
              Berawal dari dedikasi terhadap detail, kami telah tumbuh menjadi workshop terpercaya. Kami percaya bahwa setiap bangunan memiliki cerita.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8 border-t border-zinc-800 pt-8">
              <div>
                <motion.p whileInView={{ scale: [0.5, 1.1, 1] }} className="text-3xl font-bold text-red-600">10+</motion.p>
                <p className="text-sm text-zinc-500">Tahun Pengalaman</p>
              </div>
              <div>
                <motion.p whileInView={{ scale: [0.5, 1.1, 1] }} className="text-3xl font-bold text-red-600">150+</motion.p>
                <p className="text-sm text-zinc-500">Projek Selesai</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0 lg:w-1/2"
          >
            <div className="aspect-square bg-zinc-900 border border-zinc-800 p-2 group overflow-hidden">
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="h-full w-full bg-zinc-800" 
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-6 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight">Siap Memulai Projek?</h2>
          <div className="mt-12 flex justify-center">
            <form className="w-full max-w-md space-y-4">
              <motion.input whileFocus={{ scale: 1.02 }} type="text" placeholder="Nama Lengkap" className="w-full border-b border-zinc-300 py-3 focus:border-red-600 focus:outline-none transition-colors" />
              <motion.input whileFocus={{ scale: 1.02 }} type="email" placeholder="Email" className="w-full border-b border-zinc-300 py-3 focus:border-red-600 focus:outline-none transition-colors" />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-black py-4 text-white font-bold tracking-widest"
              >
                KIRIM PESAN
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-12 text-center text-sm text-zinc-500">
        <p>© 2026 PT. Isa Building Workshop. All rights reserved.</p>
      </footer>
    </div>
  );
}