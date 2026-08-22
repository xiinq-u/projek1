// Ubah email, lokasi, label form, dan teks konsultasi pada section ini.
export default function ContactSection() {
  return (
    <section
      id="contact"
      data-gsap="section"
      className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-left" data-gsap="item">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.5em] text-red-600">
              Project Inquiry
            </span>
            <h2 className="text-4xl font-black uppercase leading-none tracking-tighter text-white sm:text-5xl lg:text-7xl">
              Mulai <br />
              <span className="text-red-600">Konsultasi</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg">
              Punya visi besar? Tim engineering kami siap mewujudkannya dengan
              standar presisi tinggi.
            </p>
            <div className="mt-12 space-y-4 border-l border-zinc-800 pl-6">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-300">
                  // Email_Direct
                </p>
                <p className="font-bold tracking-tight text-white">
                  hello@isabuilding.com
                </p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-200">
                  // Office_Location
                </p>
                <p className="font-bold tracking-tight text-white">
                  Bekasi, West Java, ID
                </p>
              </div>
            </div>
          </div>
          <div data-gsap="item">
            <form className="space-y-6 rounded-sm border border-zinc-800/50 bg-zinc-900/20 p-5 backdrop-blur-sm sm:space-y-8 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                <label className="group border-b border-zinc-700 transition-all focus-within:border-red-600">
                  <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-zinc-300">
                    Nama Lengkap
                  </span>
                  <input
                    type="text"
                    placeholder="ketik nama lengkap Anda..."
                    className="w-full bg-transparent py-2 font-mono text-sm text-white placeholder:text-white placeholder:opacity-50 focus:outline-none"
                  />
                </label>
                <label className="group border-b border-zinc-700 transition-all focus-within:border-red-600">
                  <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-zinc-300">
                    Alamat Email
                  </span>
                  <input
                    type="email"
                    placeholder="ketik alamat email Anda..."
                    className="w-full bg-transparent py-2 font-mono text-sm text-white placeholder:text-white placeholder:opacity-50 focus:outline-none"
                  />
                </label>
              </div>
              <label className="group block border-b border-zinc-700 transition-all focus-within:border-red-600">
                <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-zinc-300">
                  Detail Projek
                </span>
                <textarea
                  rows={3}
                  placeholder="JELASKAN DETAIL PROJEK, LOKASI, DAN KEBUTUHAN ANDA..."
                  className="w-full resize-none bg-transparent py-2 font-mono text-sm text-white placeholder:text-white placeholder:opacity-50 focus:outline-none"
                />
              </label>
              <div className="flex flex-col items-center justify-between gap-6 pt-6 md:flex-row">
                <button
                  type="submit"
                  className="w-full bg-red-600 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white shadow-[0_10px_30px_rgba(220,38,38,0.3)] transition-all hover:bg-red-700 active:scale-95 sm:px-12 sm:py-4 sm:text-xs md:w-auto"
                >
                  Kirim Pesan
                </button>
                <div className="text-right">
                  <p className="text-[9px] font-mono uppercase italic leading-tight text-zinc-300">
                    *Verified ISO System
                  </p>
                  <p className="text-[9px] font-mono uppercase italic leading-tight text-zinc-300">
                    Secured Transmission
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
