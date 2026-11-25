import { Mail } from "lucide-react";
import { profile } from "../../data/profile";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.75h4.5V23H.5V8.75Zm7.5 0h4.32v1.95h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.94V23h-4.5v-6.86c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.63V23h-4.5V8.75Z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0b0d12] text-[#eef1f6] overflow-hidden flex items-center">
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        {/* Text column */}
        <div>
          <p className="mb-3 text-sm font-medium text-amber-400/90">
            {profile.greeting}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg font-semibold text-cyan-300 md:text-xl">
            {profile.role} <span className="text-[#5b6072]">/</span>{" "}
            {profile.subRole}
          </p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#a3a9ba]">
            {profile.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {profile.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#242a38] bg-[#12151d] px-3 py-1 text-xs font-medium text-[#c7cbd6]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-[#0b0d12] transition hover:bg-amber-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-[#2a3040] px-6 py-3 text-sm font-semibold text-[#eef1f6] transition hover:border-amber-400/50"
            >
              Get in Touch
            </a>
            {profile.cv && (
              <a
                href={profile.cv}
                download
                className="rounded-lg border border-[#2a3040] px-6 py-3 text-sm font-semibold text-[#eef1f6] transition hover:border-amber-400/50"
              >
                Download CV
              </a>
            )}
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242a38] text-[#a3a9ba] transition hover:border-amber-400/50 hover:text-amber-400"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242a38] text-[#a3a9ba] transition hover:border-amber-400/50 hover:text-amber-400"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${profile.socials.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242a38] text-[#a3a9ba] transition hover:border-amber-400/50 hover:text-amber-400"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Round photo with overlapping identity card */}
        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center pb-16">
          <div className="absolute h-80 w-80 rounded-full bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-cyan-400/15 blur-2xl" />

          <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-[#12151d] shadow-2xl shadow-black/50 md:h-80 md:w-80">
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-2 left-1/2 w-64 -translate-x-1/2 rounded-xl border border-[#242a38] bg-[#12151d] px-5 py-4 text-center shadow-2xl shadow-black/50">
            <p className="text-sm font-semibold text-[#eef1f6]">
              {profile.name}
            </p>
            <p className="mt-0.5 text-xs text-cyan-300">{profile.role}</p>
            <p className="mt-0.5 text-[11px] text-[#6b7180]">
              BINUS University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}