import { education } from "../../data/education";

export default function Journey() {
  return (
    <section id="journey" className="bg-[#0b0d12] px-6 py-16 text-[#eef1f6]">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-sm font-medium text-amber-400/90">Journey</p>
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">Education</h2>

        <div className="space-y-6 border-l border-[#242a38] pl-6">
          {education.map((item) => (
            <div key={item.school} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-amber-400" />
              <p className="text-xs font-medium text-cyan-300">
                {item.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{item.school}</h3>
              <p className="text-sm text-[#a3a9ba]">
                {item.program} · {item.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
