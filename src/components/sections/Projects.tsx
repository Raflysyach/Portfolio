import { Code, ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";

const linkClass =
  "inline-flex items-center gap-1.5 rounded-lg border border-[#2a3040] px-3 py-1.5 text-xs font-semibold text-[#eef1f6] transition hover:border-amber-400/50 hover:text-amber-400";

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
              className="flex flex-col overflow-hidden rounded-xl border border-[#242a38] bg-[#12151d] transition hover:border-amber-400/40"
            >
              <div className="aspect-video w-full overflow-hidden bg-[#0b0d12]">
                <img
                  src={p.image}
                  alt={`${p.name} homepage screenshot`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-semibold">{p.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#a3a9ba]">
                  {p.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#242a38] bg-[#0b0d12] px-3 py-1 text-xs text-[#c7cbd6]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mb-5 rounded-lg border border-[#242a38] bg-[#0b0d12] p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-400">
                    How I Tested It
                  </p>
                  <ul className="space-y-1.5 text-xs leading-relaxed text-[#a3a9ba]">
                    {p.testing.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {p.note && (
                  <p className="mb-5 text-xs leading-relaxed text-[#8a90a2]">
                    Note: {p.note}
                  </p>
                )}

                <div className="mt-auto flex flex-wrap gap-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className={linkClass}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className={linkClass}
                    >
                      <Code size={14} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
