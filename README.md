# Raflysyach Kurniawan | Portfolio

Personal portfolio of a Computer Science student at BINUS University, focused on frontend development and curious about software testing.

**Live site:** https://raflysyach-portfolio.vercel.app/

## Sections

- **Home**: introduction, tech stack, and links
- **About**: background and how I work
- **Skills**: development, testing, and tools
- **Journey**: education
- **Projects**: PlanIt and Garuda Darma Ekapratama, each with a note on how it was tested
- **Contact**: email, GitHub, and LinkedIn

## Tech Stack

React 19, TypeScript, Vite, Tailwind CSS 4, Framer Motion, Lucide React. Deployed on Vercel.

## Getting Started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run lint     # run ESLint
```

## Updating the Content

All text lives in `src/data/`:

| File | Content |
| --- | --- |
| `profile.ts` | name, role, summary, social links, CV path |
| `skills.ts` | skill groups |
| `projects.ts` | projects, links, and testing focus |
| `education.ts` | education timeline |

To show the **Download CV** button, place the PDF in `public/` and set `cv` in `profile.ts`.

## Testing Documentation

Test cases and a bug report template for my projects are in [`docs/testing`](./docs/testing).
