import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0b0d12] px-6 py-16 text-[#eef1f6]">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-sm font-medium text-amber-400/90">Projects</p>
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          Things I've Built
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.name}
              className="overflow-hidden rounded-xl border border-[#242a38] bg-[#12151d] transition hover:border-amber-400/40"
            >
              <div className="aspect-video w-full overflow-hidden bg-[#0b0d12]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold">{p.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#a3a9ba]">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#242a38] bg-[#0b0d12] px-3 py-1 text-xs text-[#c7cbd6]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
