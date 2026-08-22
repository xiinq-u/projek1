"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

// Untuk mengganti portfolio, ubah urutan data: kolom, judul, kategori, tahun, URL gambar.
const PROJECTS = [
  {
    col: "lg:col-span-8",
    title: "Premium Residence Workshop",
    cat: "Interior",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    gallery: [
      "photo-1497366754035-f200968a6e72",
      "photo-1600607687939-ce8a6c25118c",
      "photo-1600566753190-17f0baa2a6c3",
      "photo-1600210492486-724fe5c67fb0",
      "photo-1600585154340-be6161a56a0c",
      "photo-1600607687920-4e2a09cf159d",
      "photo-1618221195710-dd6b41faaea6",
      "photo-1616486338812-3dadae4b4ace",
      "photo-1618220179428-22790b461013",
      "photo-1600566753086-00f18fb6b3ea",
    ],
  },
  {
    col: "lg:col-span-4",
    title: "Modern Office Structure",
    cat: "Construction",
    year: "2023",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    gallery: [
      "photo-1503387762-592deb58ef4e",
      "photo-1497366811353-6870744d04b2",
      "photo-1497366216548-37526070297c",
      "photo-1497366754035-f200968a6e72",
      "photo-1497366811360-9c7b25e7f1c5",
      "photo-1497366412874-3415097a27e7",
      "photo-1497366811360-9c7b25e7f1c5",
      "photo-1517502884422-41eaead166d4",
      "photo-1497366858526-0766cadbe8fa",
      "photo-1497366216548-37526070297c",
    ],
  },
  {
    col: "lg:col-span-4",
    title: "Urban Loft Renovation",
    cat: "Interior Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
    gallery: [
      "photo-1522771739844-6a9f6d5f14af",
      "photo-1505693416388-ac5ce068fe85",
      "photo-1505693416388-ac5ce068fe85",
      "photo-1493663284031-b7e3aefcae8e",
      "photo-1513694203232-719a280e022f",
      "photo-1493809842364-78817add7ffb",
      "photo-1505693416388-ac5ce068fe85",
      "photo-1505693416388-ac5ce068fe85",
      "photo-1493663284031-b7e3aefcae8e",
      "photo-1513694203232-719a280e022f",
    ],
  },
  {
    col: "lg:col-span-8",
    title: "Industrial Complex Bekasi",
    cat: "Structural",
    year: "2024",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    gallery: [
      "photo-1541888946425-d81bb19240f5",
      "photo-1504307651254-35680f356dfd",
      "photo-1503387762-592deb58ef4e",
      "photo-1511818966892-d7d671e672a2",
      "photo-1518005020951-eccb494ad742",
      "photo-1486406146926-c627a92af1dd",
      "photo-1497366754035-f200968a6e72",
      "photo-1504917595217-d4dc5ebe6122",
      "photo-1518709268805-4e9042af9f23",
      "photo-1509391366360-2e959784a276",
    ],
  },
  {
    col: "lg:col-span-6",
    title: "Commercial Hub Jakarta",
    cat: "Construction",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92af1dd",
    gallery: [
      "photo-1486406146926-c627a92af1dd",
      "photo-1497366811353-6870744d04b2",
      "photo-1487958449943-2429e8be8625",
      "photo-1497366216548-37526070297c",
      "photo-1503387762-592deb58ef4e",
      "photo-1541888946425-d81bb19240f5",
      "photo-1511818966892-d7d671e672a2",
      "photo-1518005020951-eccb494ad742",
      "photo-1486406146926-c627a92af1dd",
      "photo-1497366754035-f200968a6e72",
    ],
  },
  {
    col: "lg:col-span-6",
    title: "Luxury Penthouse Suite",
    cat: "Interior",
    year: "2024",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    gallery: [
      "photo-1512917774080-9991f1c4c750",
      "photo-1600210492486-724fe5c67fb0",
      "photo-1600607687939-ce8a6c25118c",
      "photo-1600585154340-be6161a56a0c",
      "photo-1600566753190-17f0baa2a6c3",
      "photo-1616486338812-3dadae4b4ace",
      "photo-1618221195710-dd6b41faaea6",
      "photo-1600607687920-4e2a09cf159d",
      "photo-1600566753086-00f18fb6b3ea",
      "photo-1513694203232-719a280e022f",
    ],
  },
];

const imageUrl = (photo: string) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1200&q=85`;

export default function PortfolioSection() {
  // Menyimpan foto aktif untuk slideshow di masing-masing kartu portfolio.
  const [cardSlides, setCardSlides] = useState<Record<string, number>>({});
  const [activeProject, setActiveProject] = useState<
    (typeof PROJECTS)[number] | null
  >(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Semua kartu berganti foto otomatis setiap 3,2 detik.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCardSlides((slides) =>
        PROJECTS.reduce<Record<string, number>>(
          (nextSlides, project) => {
            const currentSlide = slides[project.title] ?? 0;
            nextSlides[project.title] =
              (currentSlide + 1) % project.gallery.length;
            return nextSlides;
          },
          { ...slides },
        ),
      );
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!activeProject) return;
    const timer = window.setInterval(() => {
      setActiveSlide((slide) => (slide + 1) % activeProject.gallery.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [activeProject]);

  const openProject = (project: (typeof PROJECTS)[number]) => {
    setActiveProject(project);
    setActiveSlide(0);
  };

  // Setiap data project dibuat menjadi satu item pada grid portfolio.
  return (
    <section
      id="portfolio"
      data-gsap="section"
      className="relative overflow-hidden bg-black py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-start justify-between gap-6 border-l-4 border-red-600 pl-6 md:flex-row md:items-end"
        >
          <div>
            {/* 1. ini BAGIAN JUDUL: Ganti teks "Selected Works" dan "Portfolio Terbaru" di bawah ini */}
            <h2 className="mt-1 mb-1 text-3xl font-black uppercase leading-tight tracking-tighter text-white sm:text-5xl lg:text-6xl">
              Portfolio{" "}
              <span
                className="mt-1 inline-block whitespace-nowrap text-transparent sm:mt-0"
                style={{ WebkitTextStroke: "2px #71717a" }}
              >
                TERBARU
              </span>
            </h2>
          </div>
          <p className="hidden text-right font-mono text-[10px] uppercase tracking-widest text-zinc-500 md:block">
            [ ARCHIVE_V.01 ] <br />
            <span className="text-red-600">SYS.2026</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
          {/* 2. DAFTAR PROYEK: Looping dari data variabel PROJECTS */}
          {PROJECTS.map((project) => (
            <div
              data-gsap="item"
              key={project.title}
              className={`group relative h-[450px] cursor-pointer overflow-hidden rounded-sm border border-white/5 bg-zinc-900 shadow-2xl ${project.col}`}
              onClick={() => openProject(project)}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 z-20 w-full p-8">
                <div className="mb-3 flex items-center gap-3">
                  {/* 3. INFO KARTU PROYEK: Menampilkan Kategori dan Tahun */}
                  <span className="bg-red-600 px-2 py-1 text-[9px] font-black uppercase tracking-tighter text-white">
                    {project.cat}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {project.year}
                  </span>
                </div>
                {/* 3. INFO KARTU PROYEK: Menampilkan Judul Proyek */}
                <h3 className="text-2xl font-black uppercase leading-none tracking-tighter text-white transition-colors duration-300 group-hover:text-red-600 md:text-3xl">
                  {project.title}
                </h3>
                <div className="mt-6 h-1 w-0 bg-red-600 transition-all duration-700 group-hover:w-full" />
              </div>

              {/* Slideshow otomatis pada gambar depan kartu. */}
              <div className="relative h-full w-full overflow-hidden brightness-[0.7] transition-all duration-700 group-hover:brightness-100">
                <AnimatePresence initial={false} mode="sync">
                  <motion.div
                    key={`${project.title}-${cardSlides[project.title] ?? 0}`}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${imageUrl(project.gallery[cardSlides[project.title] ?? 0])})`,
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* 4. TOMBOL KARTU PROYEK: Ganti kata "More" di bawah jika ingin mengubah tulisan tombol */}
              <button
                type="button"
                className="absolute right-8 top-8 z-20 rounded-full border border-white/20 bg-black/40 px-5 py-2 backdrop-blur-md transition-all duration-500 hover:scale-110 group-hover:border-red-600 group-hover:bg-red-600 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                onClick={(event) => {
                  event.stopPropagation();
                  openProject(project);
                }}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  More
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          // 5. BACKGROUND POP-UP: Menggunakan bg-black/90, ubah /90 jika ingin tingkat transparansi lain
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            {/* bagian modal window */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${activeProject.title} gallery`}
              className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto border border-white/10 bg-zinc-950 p-5 shadow-2xl md:p-8"
              initial={{ y: 30, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 30, scale: 0.97 }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* 6. TOMBOL TUTUP POP-UP: Ikon <X /> */}
              <button
                type="button"
                aria-label="Tutup galeri"
                className="group absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900/80 text-zinc-300 backdrop-blur-sm transition-all duration-200 hover:bg-red-600 hover:text-white"
                onClick={() => setActiveProject(null)}
              >
                <X
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110"
                />
              </button>
              {/* ini bagian yang auto slide di modal window */}
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-900 shadow-xl">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeSlide}
                        src={imageUrl(activeProject.gallery[activeSlide])}
                        alt={`${activeProject.title} ${activeSlide + 1}`}
                        className="h-full w-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45 }}
                      />
                    </AnimatePresence>

                    <div className="absolute inset-x-4 bottom-4 flex justify-between">
                      {/* 7. TOMBOL NAVIGASI: Panah Kiri (<ArrowLeft />) */}
                      <button
                        type="button"
                        aria-label="Foto sebelumnya"
                        className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-red-600 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/40"
                        onClick={() =>
                          setActiveSlide(
                            (activeSlide - 1 + activeProject.gallery.length) %
                              activeProject.gallery.length,
                          )
                        }
                      >
                        <ArrowLeft
                          size={18}
                          className="transition-transform duration-300 group-hover:-translate-x-0.5"
                        />
                      </button>

                      {/* 7. INDIKATOR HALAMAN (Contoh: 1 / 10) */}
                      <span className="flex h-11 items-center justify-center rounded-full border border-white/20 bg-black/60 px-5 text-[11px] font-bold tracking-widest text-white backdrop-blur-md">
                        {activeSlide + 1}{" "}
                        <span className="mx-2 text-white/50">/</span>{" "}
                        {activeProject.gallery.length}
                      </span>

                      {/* 7. TOMBOL NAVIGASI: Panah Kanan (<ArrowRight />) */}
                      <button
                        type="button"
                        aria-label="Foto berikutnya"
                        className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-red-600 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/40"
                        onClick={() =>
                          setActiveSlide(
                            (activeSlide + 1) % activeProject.gallery.length,
                          )
                        }
                      >
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </button>
                    </div>
                  </div>

                  {/* ini title yang ada di modal window */}
                  <p className="mt-4 text-xs uppercase tracking-[0.25em] text-red-600">
                    {activeProject.cat} / {activeProject.year}
                  </p>
                  <h3 className="mt-2 text-3xl font-black uppercase tracking-tighter text-white md:text-5xl">
                    {activeProject.title}
                  </h3>
                </div>

                <div>
                  {/* 8. THUMBNAILS: Ganti tulisan "Project Gallery / 10 Photos" jika perlu */}
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                    Project Gallery / 10 Photos
                  </p>
                  {/* ini untuk mengubah grid photo dalam modal window */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {activeProject.gallery.map((photo, index) => {
                      const isActive = index === activeSlide;
                      return (
                        <button
                          type="button"
                          key={`${photo}-${index}`}
                          className={`group relative aspect-square overflow-hidden rounded-sm transition-all duration-300 ${
                            isActive
                              ? "brightness-100 scale-95 ring-1 ring-red-600"
                              : "brightness-50 hover:brightness-90"
                          }`}
                          onClick={() => setActiveSlide(index)}
                        >
                          <img
                            src={imageUrl(photo)}
                            alt={`${activeProject.title} thumbnail ${index + 1}`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
