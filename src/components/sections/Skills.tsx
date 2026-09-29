import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0b0d12] px-6 py-16 text-[#eef1f6]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-sm font-medium text-amber-400/90">Skills</p>
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          Technology I Use
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-[#242a38] bg-[#12151d] p-6">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-cyan-300">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.core.map((s) => (
                <span
                  key={s.name}
                  className="rounded-full border border-[#242a38] bg-[#0b0d12] px-3 py-1 text-xs text-[#c7cbd6]"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#242a38] bg-[#12151d] p-6">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-amber-400">
              Currently Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.learning.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[#242a38] bg-[#0b0d12] px-3 py-1 text-xs text-[#c7cbd6]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#242a38] bg-[#12151d] p-6">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-cyan-300">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[#242a38] bg-[#0b0d12] px-3 py-1 text-xs text-[#c7cbd6]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
