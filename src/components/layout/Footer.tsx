import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1e29] bg-[#0b0d12] px-6 py-8 text-center text-xs text-[#6b7180]">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React &
        Tailwind CSS.
      </p>
      <p className="mt-1">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-amber-400"
        >
          github.com/Raflysyach
        </a>
      </p>
    </footer>
  );
}
