export default function About() {
  return (
    <section id="about" className="bg-[#0b0d12] px-6 py-16 text-[#eef1f6]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-sm font-medium text-amber-400/90">About Me</p>
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">Who I Am</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-[#242a38] bg-[#12151d] p-6">
            <h3 className="mb-2 text-sm font-semibold text-cyan-300">
              Who I Am
            </h3>
            <p className="text-sm leading-relaxed text-[#a3a9ba]">
              Computer Science student and developer, sedang membangun
              pengalaman lewat project nyata.
            </p>
          </div>

          <div className="rounded-xl border border-[#242a38] bg-[#12151d] p-6">
            <h3 className="mb-2 text-sm font-semibold text-cyan-300">
              What I Do
            </h3>
            <p className="text-sm leading-relaxed text-[#a3a9ba]">
              Membangun web application, antarmuka, dan produk digital
              lainnya.
            </p>
          </div>

          <div className="rounded-xl border border-[#242a38] bg-[#12151d] p-6">
            <h3 className="mb-2 text-sm font-semibold text-cyan-300">
              What I Like
            </h3>
            <p className="text-sm leading-relaxed text-[#a3a9ba]">
              Eksplorasi teknologi baru, belajar tools baru, memecahkan
              masalah, dan membangun project.
            </p>
          </div>

          <div className="rounded-xl border border-[#242a38] bg-[#12151d] p-6">
            <h3 className="mb-2 text-sm font-semibold text-cyan-300">
              What I'm Working Toward
            </h3>
            <p className="text-sm leading-relaxed text-[#a3a9ba]">
              Menjadi software developer yang lebih baik dan membangun produk
              digital yang berguna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
