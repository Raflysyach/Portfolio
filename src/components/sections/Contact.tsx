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

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.9a5.94 5.94 0 1 0 0 11.88 5.94 5.94 0 0 0 0-11.88Zm0 9.8a3.86 3.86 0 1 1 0-7.72 3.86 3.86 0 0 1 0 7.72Zm6.4-10.03a1.39 1.39 0 1 1-2.77 0 1.39 1.39 0 0 1 2.77 0Z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0b0d12] px-6 py-16 text-[#eef1f6]">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-2 text-sm font-medium text-amber-400/90">Contact</p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Let's Build Something Together
        </h2>
        <p className="mb-10 text-sm text-[#a3a9ba]">
          Have an idea, project, opportunity, or just want to connect? Feel
          free to reach out.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.socials.email}`}
            className="flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0b0d12] transition hover:bg-amber-300"
          >
            <Mail size={16} />
            {profile.socials.email}
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-3">
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
            href={profile.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242a38] text-[#a3a9ba] transition hover:border-amber-400/50 hover:text-amber-400"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </section>
  );
}