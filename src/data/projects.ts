export interface Project {
  name: string;
  description: string;
  image: string;
  tech: string[];
  live?: string;
  repo?: string;
  note?: string;
  testing: string[];
}

export const projects: Project[] = [
  {
    name: "PlanIt",
    description:
      "I worked on a booking platform where users can search, compare, and book venues and event organizers for weddings, seminars, and other events in one place. It includes email and Google sign-in, filtering and sorting, package selection, a multi-step checkout, booking history, reviews, and chat.",
    image: "/assets/planit-homepage.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "NestJS", "MySQL"],
    live: "https://plan-it-pi-five.vercel.app/",
    repo: "https://github.com/Raflysyach/PlanIt",
    note: "The backend is currently offline because hosting credits ran out, so the live demo shows the frontend only. The full source code is on GitHub.",
    testing: [
      "Authentication: registration, login, and Google sign-in flows",
      "Search, filters, and sorting for venues and organizers",
      "Multi-step booking checkout, from package selection to confirmation",
      "Booking history and status updates",
      "Responsive layout on desktop and mobile viewports",
    ],
  },
  {
    name: "Garuda Darma Ekapratama",
    description:
      "I worked on the company profile website for an Indonesian consultancy offering integrated immigration, legal, tax, licensing, and investment services, including visa processing, business setup, and relocation support for expatriates and global investors.",
    image: "/assets/garuda-website.png",
    tech: ["WordPress", "Elementor", "cPanel"],
    live: "https://index.garudadarmaekapratama.com/",
    testing: [
      "Navigation, menu, and in-page anchor links",
      "Contact form validation and submission",
      "Link integrity for WhatsApp, email, and social buttons",
      "Responsive layout and cross-browser rendering",
    ],
  },
];
