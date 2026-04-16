"use client"; // Wajib untuk animasi Framer Motion di Next.js App Router

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar"; // Menghubungkan ke file navbar.tsx di folder yang sama

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  // Ganti dengan nomor WhatsApp kamu
  const phoneNumber = "6281234567890"; 
  const message = "Halo PT. Isa Building, saya ingin konsultasi mengenai proyek...";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  // --- Variasi Animasi ---
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
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
      {/* Menampilkan Navbar */}
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative flex min-h-screen items-center justify-center bg-black pt-20 overflow-hidden">
  {/* Background dengan Efek Parallax & Zoom */}
  <motion.div 
    initial={{ scale: 1.2, opacity: 0 }}
    animate={{ scale: 1.05, opacity: 0.5 }}
    transition={{ duration: 2, ease: "easeOut" }}
    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')] bg-cover bg-center" 
  />

  {/* Overlay Grid Teknis (Blueprint Vibe) */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
  
  {/* Efek Gradient Gelap untuk Fokus Teks */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />

  {/* Tipografi Latar Belakang Raksasa */}
  <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
    <h1 className="text-[25vw] font-black uppercase tracking-tighter text-white">
      Structure
    </h1>
  </div>

  <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
    {/* Penanda Fase Proyek Kecil di Atas Judul */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-6 flex items-center justify-center gap-3"
    >
      <span className="h-[1px] w-12 bg-red-600" />
      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600">Established 2026</span>
      <span className="h-[1px] w-12 bg-red-600" />
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-6xl font-black tracking-tighter text-white sm:text-8xl md:text-9xl uppercase leading-[0.85]"
    >
      Membangun <span className="text-red-600 italic">Presisi</span><span className="text-zinc-500">.</span>
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mx-auto mt-8 max-w-2xl text-lg font-medium text-zinc-400 md:text-xl leading-relaxed"
    >
      PT. Isa Building Workshop menghadirkan solusi <span className="text-white">konstruksi baja</span> dan <span className="text-white">arsitektur modern</span> dengan standar ketahanan industrial.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
    >
    </motion.div>

    {/* Indikator Koordinat Pojok (Pelengkap Estetika Konstruksi) */}
    <div className="absolute bottom-10 left-10 hidden flex-col items-start gap-1 font-mono text-[8px] uppercase text-zinc-700 md:flex">
      <span>Lat: -6.2349</span>
      <span>Long: 106.9896</span>
    </div>
    <div className="absolute bottom-10 right-10 hidden flex-col items-end gap-1 font-mono text-[8px] uppercase text-zinc-700 md:flex">
      <span>Project: 001_ISA_26</span>
      <span>Status: Structural_Init</span>
    </div>
  </div>
</section>

      {/* --- SERVICES SECTION --- */}
      <motion.section 
  variants={staggerContainer}
  initial="initial"
  whileInView="whileInView"
  viewport={{ once: true }}
  id="services" className="py-24 bg-black relative overflow-hidden"
>
  {/* Aksen Latar Belakang (Grid Garis Tipis) */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
       style={{ backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`, backgroundSize: '30px 30px' }} 
  />

  <div className="mx-auto max-w-7xl px-6 relative z-10 text-left">
    {/* Header Section */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
      <motion.div variants={fadeInUp}>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">
          Core <br /> <span className="text-red-600">Services</span>
        </h2>
      </motion.div>
      <motion.p variants={fadeInUp} className="max-w-xs text-zinc-500 font-mono text-[10px] uppercase tracking-widest leading-relaxed">
        // Menyediakan integritas struktural dan estetika kelas atas sejak 2026.
      </motion.p>
    </div>

    {/* List Layout (Bukan Kotak/Card) */}
    <div className="grid grid-cols-1 gap-0">
      {[
        { 
          title: "Konstruksi Bangunan", 
          desc: "Spesialis struktur baja dan beton bertulang untuk kebutuhan industrial dan residensial mewah.",
          tags: ["Steelwork", "Foundations", "High-Rise"] 
        },
        { 
          title: "Interior Design", 
          desc: "Pendekatan minimalis dengan material premium untuk menciptakan ruang yang timeless dan prestisius.",
          tags: ["Luxury", "Minimalist", "Furniture"] 
        },
        { 
          title: "Workshop & Fabrikasi", 
          desc: "Pusat fabrikasi mandiri untuk memastikan setiap komponen besi dan kayu memiliki presisi milimeter.",
          tags: ["Precision", "Custom", "BIM Ready"] 
        },
      ].map((service, i) => (
        <motion.div 
          key={i} 
          variants={fadeInUp}
          className="group relative border-b border-zinc-800 py-12 px-4 transition-all duration-500 hover:bg-zinc-900/40 cursor-pointer"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            {/* Nomor Urut */}
            <span className="text-sm font-mono text-red-600 font-bold italic w-12">0{i + 1} —</span>
            
            {/* Judul & Tags */}
            <div className="flex-1">
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                {service.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2 group-hover:translate-x-4 transition-transform duration-500 delay-75">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[9px] border border-zinc-700 px-2 py-1 text-zinc-500 uppercase font-bold tracking-widest group-hover:border-red-600/50 group-hover:text-red-500 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Deskripsi */}
            <div className="md:max-w-sm">
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                {service.desc}
              </p>
            </div>

            {/* Panah (Muncul saat Hover) */}
            <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-20px] group-hover:translate-x-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 text-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>

          {/* Garis Glowing Bawah */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-700 group-hover:w-full shadow-[0_0_20px_rgba(220,38,38,0.8)]" />
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

      {/* --- PORTFOLIO SECTION (Bento Grid) --- */}
      <section id="portfolio" className="py-24 bg-black overflow-hidden relative">
  {/* Aksen Watermark Latar Belakang */}
  <div className="absolute top-0 right-10 text-[200px] font-black text-white/[0.01] select-none pointer-events-none leading-none uppercase">
    Projects
  </div>

  <div className="mx-auto max-w-7xl px-6">
    {/* Header Section */}
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-start justify-between gap-6 border-l-4 border-red-600 pl-6 md:flex-row md:items-end mb-20"
    >
      <div>
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-red-600">Selected Works</span>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl uppercase">
          Portfolio <span className="text-zinc-500 italic">Terbaru</span>
        </h2>
      </div>
      <div className="hidden md:block text-right">
        <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Archive_v.01 / 2026</p>
      </div>
    </motion.div>

    {/* Bento Grid Layout (6 Foto) */}
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
      {[
        { col: "lg:col-span-8", title: "Premium Residence Workshop", cat: "Interior", year: "2024", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72" },
        { col: "lg:col-span-4", title: "Modern Office Structure", cat: "Construction", year: "2023", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e" },
        { col: "lg:col-span-4", title: "Urban Loft Renovation", cat: "Interior Design", year: "2024", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af" },
        { col: "lg:col-span-8", title: "Industrial Complex Bekasi", cat: "Structural", year: "2024", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5" },
        { col: "lg:col-span-6", title: "Commercial Hub Jakarta", cat: "Construction", year: "2023", img: "https://images.unsplash.com/photo-1486406146926-c627a92af1dd" },
        { col: "lg:col-span-6", title: "Luxury Penthouse Suite", cat: "Interior", year: "2024", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750" },
      ].map((item, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className={`group relative overflow-hidden bg-zinc-900 ${item.col} h-[450px] rounded-sm border border-white/5 shadow-2xl cursor-pointer`}
        >
          {/* Overlay Gelap */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Konten Teks */}
          <div className="absolute bottom-0 z-20 p-8 w-full">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-1 bg-red-600 text-[9px] font-black text-white uppercase tracking-tighter">
                {item.cat}
              </span>
              <span className="text-[10px] font-mono text-zinc-500">{item.year}</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-white leading-none uppercase tracking-tighter group-hover:text-red-600 transition-colors duration-300">
              {item.title}
            </h3>
            
            {/* Garis Animasi Hover */}
            <div className="h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 mt-6" />
          </div>

          {/* Gambar Background dengan Efek Zoom */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full bg-cover bg-center brightness-[0.7] group-hover:brightness-100 transition-all duration-700" 
            style={{ backgroundImage: `url(${item.img})` }}
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="bg-black py-24 text-white border-t border-zinc-900">
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
              Berawal dari dedikasi terhadap detail, kami telah tumbuh menjadi workshop terpercaya. Kami memastikan setiap visi Anda dibangun dengan pondasi yang sempurna.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8 border-t border-zinc-800 pt-8">
              <div>
                <motion.p whileInView={{ scale: [0.5, 1.1, 1] }} className="text-4xl font-bold text-red-600">10+</motion.p>
                <p className="text-sm text-zinc-500 mt-1 uppercase tracking-widest">Tahun Pengalaman</p>
              </div>
              <div>
                <motion.p whileInView={{ scale: [0.5, 1.1, 1] }} className="text-4xl font-bold text-red-600">150+</motion.p>
                <p className="text-sm text-zinc-500 mt-1 uppercase tracking-widest">Projek Selesai</p>
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
            <div className="aspect-video bg-zinc-900 border border-zinc-800 p-2 overflow-hidden">
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="h-full w-full bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070')] bg-cover bg-center" 
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="relative py-24 bg-black overflow-hidden">
  {/* Watermark Background */}
  <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none select-none">
    <div className="absolute top-10 right-10 text-[15vw] font-black text-white leading-none uppercase">Contact</div>
    <div className="absolute bottom-10 left-10 text-[15vw] font-black text-red-600 leading-none uppercase">ISA.BW</div>
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      {/* KIRI: Judul & Informasi */}
      <div className="text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.5em] text-red-600 block mb-4">Project Inquiry</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
            Mulai <br /> <span className="text-red-600">Konsultasi</span>
          </h2>
          <p className="mt-8 text-zinc-400 text-lg max-w-md leading-relaxed">
            Punya visi besar? Tim engineering kami siap mewujudkannya dengan standar presisi tinggi.
          </p>
          
          <div className="mt-12 space-y-4 border-l border-zinc-800 pl-6">
            <div className="group">
              <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest group-hover:text-red-600 transition-colors">// Email_Direct</p>
              <p className="text-white font-bold tracking-tight">hello@isabuilding.com</p>
            </div>
            <div className="group">
              <p className="text-[10px] font-mono text-zinc-200 uppercase tracking-widest group-hover:text-red-600 transition-colors">// Office_Location</p>
              <p className="text-white font-bold tracking-tight">Bekasi, West Java, ID</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* KANAN: Form (Placeholder Putih) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <form className="space-y-8 bg-zinc-900/20 p-8 md:p-12 border border-zinc-800/50 rounded-sm backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Nama */}
            <div className="group border-b border-zinc-700 focus-within:border-red-600 transition-all">
              <label className="text-[10px] font-black text-zinc-300 uppercase tracking-widest block mb-2">Nama Lengkap</label>
              <input 
                type="text" 
                placeholder="ketik nama lengkap Anda..." 
                className="w-full bg-transparent py-2 text-white focus:outline-none font-mono text-sm placeholder:text-white placeholder:opacity-50" 
              />
            </div>
            {/* Input Email */}
            <div className="group border-b border-zinc-700 focus-within:border-red-600 transition-all">
              <label className="text-[10px] font-black text-zinc-300 uppercase tracking-widest block mb-2">Alamat Email</label>
              <input 
                type="email" 
                placeholder="ketik alamat email Anda..." 
                className="w-full bg-transparent py-2 text-white focus:outline-none font-mono text-sm placeholder:text-white placeholder:opacity-50" 
              />
            </div>
          </div>

          {/* Input Pesan */}
          <div className="group border-b border-zinc-700 focus-within:border-red-600 transition-all">
            <label className="text-[10px] font-black text-zinc-300 uppercase tracking-widest block mb-2">Detail Projek</label>
            <textarea 
              rows={3} 
              placeholder="JELASKAN DETAIL PROJEK, LOKASI, DAN KEBUTUHAN ANDA..." 
              className="w-full bg-transparent py-2 text-white focus:outline-none font-mono text-sm placeholder:text-white placeholder:opacity-50 resize-none" 
            />
          </div>

          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-black px-12 py-4 text-xs uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(220,38,38,0.3)] active:scale-95">
              Kirim Pesan
            </button>
            <div className="text-right">
              <p className="text-[9px] font-mono text-zinc-300 uppercase leading-tight italic">
                *Verified ISO System
              </p>
              <p className="text-[9px] font-mono text-zinc-300 uppercase leading-tight italic">
                Secured Transmission
              </p>
            </div>
          </div>
        </form>
      </motion.div>

    </div>
  </div>
</section>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-12 text-white border-t border-zinc-900 text-center">
        <p className="text-sm text-zinc-500">© 2026 PT. Isa Building Workshop. All rights reserved.</p>
      </footer>

      {/* --- TOMBOL WHATSAPP (Langsung di Sini) --- */}
      <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end">
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.9, y: 40, filter: "blur(20px)" }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        className="mb-6 w-[360px] overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#09090b]/90 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] backdrop-blur-3xl"
      >
        {/* Header: Clean Minimalist */}
        <div className="p-8 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10">
                <span className="text-[10px] font-black tracking-tighter text-white">ISA<span className="text-red-600">.</span>BW</span>
                <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#09090b] bg-red-600" />
              </div>
              <div>
                <h4 className="text-[13px] font-bold tracking-tight text-white uppercase">Consultant Support</h4>
                <p className="mt-0.5 text-[10px] font-medium text-zinc-500 uppercase tracking-[0.15em]">Online Presence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Body */}
        <div className="px-8 py-4">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="group relative"
            >
              <div className="rounded-[1.5rem] rounded-tl-none border border-white/[0.05] bg-zinc-900/50 p-5 backdrop-blur-sm">
                <p className="text-[12px] leading-[1.6] text-zinc-400">
                  Welcome. How can we elevate your space? <br />
                  <span className="text-white font-medium italic">— ISA Building Team</span>
                </p>
              </div>
              <span className="mt-2 block text-[9px] font-medium uppercase tracking-widest text-zinc-600">Delivered</span>
            </motion.div>
          </div>
        </div>

        {/* Action Button: Industrial Luxury */}
        <div className="p-8 pt-2">
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
            
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-black">Start Consultation</span>
          </motion.a>
          
          <div className="mt-6 flex items-center justify-center gap-2 opacity-30">
             <div className="h-[1px] w-8 bg-zinc-500" />
             <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-500">Secure Line</span>
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
      ? 'border-white/10 bg-zinc-900 rotate-180 shadow-none' 
      : 'border-red-600/20 bg-[#09090b] shadow-[0_20px_40px_rgba(220,38,38,0.15)]'
    }`}
  >
    {/* Animated Ring */}
    <div className={`absolute inset-0 rounded-full border border-red-600/50 transition-all duration-1000 ${isOpen ? 'scale-0 opacity-0' : 'animate-pulse scale-110 opacity-100'}`} />

    {isOpen ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white transition-colors group-hover:fill-red-500" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    )}
  </motion.button>
</div>
    </div>
  );
}
