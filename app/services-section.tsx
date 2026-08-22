// Tambah, hapus, atau ubah layanan perusahaan di daftar ini.
const SERVICES = [
  {
    title: "Architectural Design",
    desc: "pelayanan konsultasi desain baik pembuatan masterplan komplek perumahan, fasilitas pendidikan dan lainya pelayanan konsultasi desain rumah tinggal bangun baru maupun renovasi pelayanan konsultasi bangunan gedung, mall, apartemen dll. pelayanan konsultasi Interior rumah tinggal kantor dan lainnya pelayanan konsultasi pembuatan taman.",
    tags: ["masterplan", "rumah tinggal", "gedung - Interior", "landscape"],
  },
  {
    title: "BUILDING CONSTRUCTION",
    desc: "Wujudkan properti impian Anda bersama kami melalui layanan pembangunan terpadu yang mencakup konstruksi struktur, infrastruktur lahan, ruang interior, hingga penataan lanskap yang menawan.",
    tags: ["Rumah tinggal", "Gedung", " Infrastruktur", "Interior", "Lancscape"],
  },
  {
    title: "RESEARCH & WORKSHOP",
    desc: "Dengan mengedepankan inovasi teknologi konstruksi yang kekinian dan ramah lingkungan, kami memberikan solusi pembangunan terintegrasi mulai dari infrastruktur lahan, rancang bangun, hingga desain interior dan lanskap yang dirancang khusus untuk memenuhi kebutuhan setiap klien.",
    tags: ["material lokal", "material import", "innovatif", "efisien"],
  },
];

const servicePoints = [
  "Solusi kebutuhan desain eksterior maupun interior rumah tinggal & gedung.",
  "Perencanaan masterplan dan lansekap profesional.",
  "Jasa pelaksanaan konstruksi berstandar tinggi.",
];

export default function ServicesSection() {
  // Section ini menampilkan data SERVICES menjadi daftar interaktif.
  return (
    <section
      id="services"
      data-gsap="section"
      className="relative overflow-hidden bg-black py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-left sm:px-6">
        <div className="mb-12 flex flex-col items-start gap-6 sm:mb-16 lg:mb-20">
          <div data-gsap="item">
            <h2 className="text-4xl font-black uppercase leading-none tracking-tighter text-white sm:text-6xl lg:text-8xl">
              Core <br />
              <span className="text-red-600">Services</span>
            </h2>
          </div>
          
          {/* Daftar Bullet Points Deskripsi Layanan */}
          <div data-gsap="item" className="flex flex-col gap-2 max-w-xl">
            {servicePoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                <p className="font-mono text-[8px] uppercase leading-relaxed tracking-widest text-zinc-400 sm:text-[10px]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0">
          {SERVICES.map((service, index) => (
            <div
              data-gsap="item"
              key={service.title}
              className="group relative cursor-pointer border-b border-zinc-800 px-2 py-8 transition-all duration-500 hover:bg-zinc-900/40 sm:px-4 sm:py-10 lg:py-12"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-16">
                <span className="w-12 text-xs font-mono font-bold italic text-red-600 sm:text-sm">
                  0{index + 1} —
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-black uppercase tracking-tighter text-white transition-transform duration-500 group-hover:translate-x-4 sm:text-2xl lg:text-5xl">
                    {service.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2 transition-transform delay-75 duration-500 group-hover:translate-x-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-zinc-700 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-zinc-500 transition-colors group-hover:border-red-600/50 group-hover:text-red-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:max-w-sm">
                  <p className="text-xs leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-300 sm:text-sm">
                    {service.desc}
                  </p>
                </div>
                <div className="hidden translate-x-[-20px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:block">
                  <span className="text-3xl text-red-600">-&gt;</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.8)] transition-all duration-700 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}