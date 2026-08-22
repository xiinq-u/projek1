import { motion } from "framer-motion";

// Ubah teks deskripsi dan angka statistik perusahaan pada section ini.
export default function AboutSection() {
  return (
    <section
      id="about"
      data-gsap="section"
      className="border-t border-zinc-900 bg-black py-16 text-white sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:flex lg:items-center lg:gap-16">
        <div data-gsap="item" className="lg:w-1/2">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            About PT. Isa Building Workshop
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:text-base">
            PT. ISA BUILDING WORKSHOP (AHU-021195.AH.01.30.Tahun 2022) merupakan perusahaan jasa konstruksi terpadu yang berlandaskan pada tiga nilai utama: Integrity, Commitment, and Care (ICC). Kami secara konsisten mengembangkan potensi sumber daya yang terampil dan berwawasan luas guna menghasilkan karya yang berinovasi serta memenuhi standar kualitas dan keselamatan kerja. Dengan fokus pada konsistensi mutu, ketepatan pelaksanaan, dan kepedulian lingkungan, kami siap memperluas jangkauan operasional untuk menjadi mitra terpercaya yang menghadirkan solusi konstruksi berkelanjutan.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-zinc-800 pt-8 sm:gap-6">
            <div>
              <motion.p
                whileInView={{ scale: [0.5, 1.1, 1] }}
                className="text-2xl font-bold text-red-600 sm:text-3xl lg:text-4xl"
              >
                10+
              </motion.p>
              <p className="mt-1 text-[9px] uppercase tracking-widest text-zinc-500 sm:text-xs">
                Tahun Pengalaman
              </p>
            </div>
            <div>
              <motion.p
                whileInView={{ scale: [0.5, 1.1, 1] }}
                className="text-2xl font-bold text-red-600 sm:text-3xl lg:text-4xl"
              >
                80+
              </motion.p>
              <p className="mt-1 text-[9px] uppercase tracking-widest text-zinc-500 sm:text-xs">
                Proyek Desain
              </p>
            </div>
            <div>
              <motion.p
                whileInView={{ scale: [0.5, 1.1, 1] }}
                className="text-2xl font-bold text-red-600 sm:text-3xl lg:text-4xl"
              >
                70+
              </motion.p>
              <p className="mt-1 text-[9px] uppercase tracking-widest text-zinc-500 sm:text-xs">
                Proyek Konstruksi
              </p>
            </div>
          </div>
        </div>

        {/* Ilustrasi Kompleks Gedung & Tower Crane Detail SVG */}
        <div data-gsap="item" className="mt-12 lg:mt-0 lg:w-1/2 flex items-center justify-center">
          <div className="relative aspect-video w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl flex items-end justify-center">
            
            {/* Background Grid Blueprint */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Container SVG Ilustrasi Konstruksi */}
            <svg
              className="relative z-10 w-full h-full max-h-[300px]"
              viewBox="0 0 500 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Garis Tanah */}
              <line x1="20" y1="260" x2="480" y2="260" stroke="#52525b" strokeWidth="2" />
              <line x1="40" y1="265" x2="460" y2="265" stroke="#27272a" strokeWidth="3" />

              {/* Gedung Belakang (Siluet) */}
              <rect x="60" y="100" width="80" height="160" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
              <path d="M60 100 L100 70 L140 100 Z" fill="#27272a" />
              {[...Array(6)].map((_, r) =>
                [...Array(3)].map((_, c) => (
                  <rect key={`b1-${r}-${c}`} x={72 + c * 22} y={115 + r * 22} width="14" height="14" fill="#27272a" rx="1" />
                ))
              )}

              {/* Gedung Utama (Tengah - Modern Skyscraper) */}
              <rect x="155" y="60" width="110" height="200" fill="#09090b" stroke="#52525b" strokeWidth="1.5" />
              <line x1="155" y1="120" x2="265" y2="120" stroke="#3f3f46" strokeWidth="1" />
              <line x1="155" y1="180" x2="265" y2="180" stroke="#3f3f46" strokeWidth="1" />
              <line x1="155" y1="240" x2="265" y2="240" stroke="#3f3f46" strokeWidth="1" />
              {[...Array(7)].map((_, r) =>
                [...Array(4)].map((_, c) => (
                  <motion.rect
                    key={`b2-${r}-${c}`}
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.9, 0.3] }}
                    transition={{ duration: 3 + (r + c) % 3, repeat: Infinity, ease: "easeInOut" }}
                    x={167 + c * 24}
                    y={75 + r * 24}
                    width="14"
                    height="16"
                    fill={r % 2 === 0 ? "#dc2626" : "#3f3f46"}
                    rx="1"
                  />
                ))
              )}

              {/* Gedung Kanan (Konstruksi / Setengah Jadi) */}
              <rect x="280" y="130" width="90" height="130" fill="#18181b" stroke="#52525b" strokeWidth="1" />
              {[...Array(4)].map((_, r) =>
                [...Array(3)].map((_, c) => (
                  <rect key={`b3-${r}-${c}`} x={292 + c * 25} y={145 + r * 25} width="16" height="16" fill="none" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="2 2" />
                ))
              )}

              {/* TOWER CRANE UTAMA (Sangat Detail & Interaktif) */}
              <g transform="translate(300, 20)">
                {/* Tiang Utama / Mast Crane */}
                <rect x="-4" y="20" width="8" height="220" fill="#27272a" stroke="#dc2626" strokeWidth="0.75" />
                <path d="M-4 20 L4 40 L-4 60 L4 80 L-4 100 L4 120 L-4 140 L4 160 L-4 180 L4 200 L-4 220" stroke="#dc2626" strokeWidth="1" fill="none" />

                {/* Counterweight Jib (Kiri) */}
                <line x1="0" y1="20" x2="-60" y2="20" stroke="#dc2626" strokeWidth="2.5" />
                <line x1="-60" y1="20" x2="-60" y2="35" stroke="#dc2626" strokeWidth="1.5" />
                <line x1="0" y1="20" x2="-60" y2="35" stroke="#dc2626" strokeWidth="1" />
                <rect x="-55" y="22" width="20" height="15" fill="#71717a" stroke="#000" strokeWidth="1" />

                {/* Lengan Utama Crane (Jib ke Kanan) dengan Animasi Berputar */}
                <motion.g
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  style={{ originX: "0px", originY: "20px" }}
                >
                  <line x1="0" y1="20" x2="180" y2="20" stroke="#dc2626" strokeWidth="3" />
                  <line x1="0" y1="30" x2="180" y2="30" stroke="#dc2626" strokeWidth="1.5" />
                  <path d="M0 20 L20 30 L40 20 L60 30 L80 20 L100 30 L120 20 L140 30 L160 20 L180 25" stroke="#ef4444" strokeWidth="1" fill="none" />
                  <line x1="20" y1="20" x2="20" y2="30" stroke="#dc2626" strokeWidth="1" />
                  <line x1="50" y1="20" x2="50" y2="30" stroke="#dc2626" strokeWidth="1" />
                  <line x1="80" y1="20" x2="80" y2="30" stroke="#dc2626" strokeWidth="1" />
                  <line x1="110" y1="20" x2="110" y2="30" stroke="#dc2626" strokeWidth="1" />
                  <line x1="140" y1="20" x2="140" y2="30" stroke="#dc2626" strokeWidth="1" />
                  <line x1="170" y1="20" x2="170" y2="30" stroke="#dc2626" strokeWidth="1" />

                  <line x1="0" y1="20" x2="-25" y2="5" stroke="#fff" strokeWidth="1.5" />
                  <line x1="0" y1="20" x2="150" y2="5" stroke="#fff" strokeWidth="1.5" />

                  {/* Trolley, tali, dan muatan disesuaikan penuh sampai batas x2="180" */}
                  <motion.g
                    animate={{ x: [15, 160, 15] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  >
                    {/* Trolley Crane */}
                    <rect x="0" y="30" width="10" height="8" fill="#fff" stroke="#dc2626" strokeWidth="1" />

                    {/* Panjang tali yang menempel pada trolley */}
                    <motion.line
                      x1="3"
                      y1="38"
                      x2="3"
                      stroke="#e4e4e7"
                      strokeWidth="1.2"
                      animate={{ y2: [85, 137, 85] }}
                      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    />
                    <motion.line
                      x1="7"
                      y1="38"
                      x2="7"
                      stroke="#e4e4e7"
                      strokeWidth="1.2"
                      animate={{ y2: [85, 137, 85] }}
                      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    />

                    {/* Hook dan muatan turun-naik dari ujung tali */}
                    <motion.g
                      animate={{ y: [0, 52, 0] }}
                      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    >
                      <g transform="translate(-2, 85)">
                        <rect x="0" y="0" width="10" height="6" fill="#71717a" stroke="#27272a" strokeWidth="0.5" />
                        <path d="M2 6 L2 10 C2 12, 8 12, 8 10 L8 6 Z" fill="#dc2626" />
                        <path d="M5 10 C5 14, 1 14, 1 12" stroke="#d4d4d8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                        <rect x="-3" y="12" width="16" height="8" fill="#18181b" stroke="#dc2626" strokeWidth="1" />
                        <rect x="-5" y="14" width="20" height="4" fill="#52525b" />
                        <circle cx="5" cy="10" r="1.2" fill="#ef4444" className="animate-pulse" />
                      </g>
                    </motion.g>
                  </motion.g>
                </motion.g>

                {/* Kabin Operator Crane */}
                <rect x="-3" y="32" width="12" height="12" fill="#52525b" stroke="#dc2626" strokeWidth="1" />
                <rect x="-1" y="35" width="8" height="6" fill="#38bdf8" opacity="0.8" />
              </g>

            </svg>

            {/* Label Status Konstruksi di Bawah Card */}
            <div className="absolute bottom-3 left-4 z-30 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-ping" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                Structural Precision & Engineering Workshop
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}