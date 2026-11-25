const cards = [
  {
    title: "Who I Am",
    text: "Computer Science student at BINUS University who enjoys building web applications and learning by working on real projects.",
  },
  {
    title: "How I Work",
    text: "After finishing a project, I like to test it manually the way a real user would: going through the main flows, trying unexpected input, and checking how it looks on different screen sizes.",
  },
  {
    title: "What I Like",
    text: "Exploring new technologies, learning new tools, solving problems, and understanding how a product behaves from both the developer's and the user's point of view.",
  },
  {
    title: "What I'm Working Toward",
    text: "Growing into a well-rounded software professional, and exploring software testing and quality assurance through hands-on practice and an internship.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0b0d12] px-6 py-16 text-[#eef1f6]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-sm font-medium text-amber-400/90">About Me</p>
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          A Builder Who Likes to Test
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-[#242a38] bg-[#12151d] p-6"
            >
              <h3 className="mb-2 text-sm font-semibold text-cyan-300">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#a3a9ba]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
