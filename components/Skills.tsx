import { RevealItem, RevealSection } from "@/components/ScrollReveal";

const groups = [
  {
    number: "01",
    title: "Bahasa Pemrograman",
    rows: [
      "Python",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "Laravel (Basic)",
    ],
  },
  {
    number: "02",
    title: "Database & Tools",
    rows: [
      "pgAdmin4",
      "Visual Studio Code",
      "Figma",
      "Enterprise Architect",
      "Microsoft Office",
    ],
  },
  {
    number: "03",
    title: "Soft Skills",
    rows: [
      "Disiplin",
      "Teliti",
      "Komunikatif",
      "Adaptif",
      "Kerja Sama Tim",
      "Bertanggung Jawab",
    ],
  },
];

export function Skills() {
  return (
    <RevealSection
      id="keahlian"
      className="mx-auto w-full max-w-[1280px] px-[32px] py-[96px] max-lg:px-[24px] max-md:py-[72px]"
    >
      <RevealItem className="mb-[48px] max-w-[560px]">
        <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--plum)]">Keahlian</span>
      </RevealItem>

      <div className="grid grid-cols-3 gap-[22px] max-lg:grid-cols-2 max-md:grid-cols-1">
        {groups.map((group) => (
          <RevealItem
            key={group.number}
            className="rounded-[20px] bg-[var(--card)] p-[28px] shadow-[0_10px_30px_rgba(30,27,36,0.06)] transition hover:-translate-y-[4px] hover:shadow-[0_18px_40px_rgba(30,27,36,0.1)]"
          >
            <div className="mb-[16px] flex items-center gap-[12px]">
              <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[var(--paper)] text-[13px] font-bold text-[var(--plum)]">
                {group.number}
              </span>
              <h3 className="text-[18px] font-bold text-[var(--ink)]">{group.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-[8px]">
              {group.rows.map((row) => (
                <li
                  key={row}
                  className="rounded-full border border-[var(--rule)] px-[13px] py-[7px] text-[13px] text-[var(--ink-soft)]"
                >
                  {row}
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </div>
    </RevealSection>
  );
}
