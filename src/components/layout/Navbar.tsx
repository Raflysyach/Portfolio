import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1a1e29] bg-[#0b0d12]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold text-[#eef1f6]">
          Raflysyach<span className="text-amber-400">.</span>
        </a>

        <div className="hidden gap-8 text-sm font-medium text-[#a3a9ba] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="text-[#eef1f6] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-[#1a1e29] bg-[#0b0d12] px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-[#a3a9ba] hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
