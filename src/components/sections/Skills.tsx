import { skills } from "../../data/skills";

const groups = [
  { title: "Development", items: skills.dev, accent: "text-cyan-300" },
  { title: "Testing", items: skills.qa, accent: "text-amber-400" },
  { title: "Currently Building", items: skills.learning, accent: "text-amber-400" },
  { title: "Tools", items: skills.tools, accent: "text-cyan-300" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0b0d12] px-6 py-16 text-[#eef1f6]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-sm font-medium text-amber-400/90">Skills</p>
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          Technology I Use
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-[#242a38] bg-[#12151d] p-6"
            >
              <h3
                className={`mb-4 text-xs font-semibold uppercase tracking-wide ${group.accent}`}
              >
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#242a38] bg-[#0b0d12] px-3 py-1 text-xs text-[#c7cbd6]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
