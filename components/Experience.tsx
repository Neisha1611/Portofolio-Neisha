import { BookOpenCheck, CalendarDays, UtensilsCrossed } from "lucide-react";
import { RevealItem, RevealSection } from "@/components/ScrollReveal";

const entries = [
  {
    icon: BookOpenCheck,
    period: "Nov 2025 - Sekarang",
    role: "Anggota Bidang Akademik & Pengajar",
    org: "TPQ Al-Hikmah Universitas Jember",
    notes: [
      "Menyusun dan mengembangkan kurikulum pembelajaran TPQ.",
      "Mengatur jadwal mengajar dan berkoordinasi dengan para pengajar.",
      "Mengajar santri serta membantu ujian kenaikan dan evaluasi perkembangan santri.",
    ],
  },
  {
    icon: CalendarDays,
    period: "Agu - Okt 2025",
    role: "Anggota Divisi Acara",
    org: "Information System Ideas Competition (ISIC)",
    notes: [
      "Terlibat dalam penyusunan konsep acara dan alur kegiatan.",
      "Mendukung pelaksanaan acara dari persiapan teknis hingga evaluasi kegiatan.",
      "Berkolaborasi dengan divisi lain untuk kelancaran rangkaian kompetisi.",
    ],
  },
  {
    icon: UtensilsCrossed,
    period: "Jun - Okt 2025",
    role: "Anggota Divisi Konsumsi & Sponsorship",
    org: "PPMB Fasilkom 2025",
    notes: [
      "Mengelola penyediaan konsumsi untuk lebih dari 100 peserta dan panitia.",
      "Membantu menyusun proposal sponsorship serta menjalin komunikasi dengan sponsor.",
    ],
  },
];

export function Experience() {
  return (
    <RevealSection
      id="pengalaman"
      className="mx-auto w-full max-w-[1280px] px-[32px] py-[96px] max-lg:px-[24px] max-md:py-[72px]"
    >
      <RevealItem className="mb-[56px] max-w-[560px]">
        <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--plum)]">
          Pengalaman Organisasi
        </span>
      </RevealItem>

      <div className="relative">
        <div className="absolute left-[27px] top-[8px] bottom-[8px] w-px bg-[var(--rule)] max-md:left-[23px]" />

        <div className="flex flex-col gap-[24px]">
          {entries.map((entry) => {
            const Icon = entry.icon;
            return (
              <RevealItem
                key={entry.org}
                className="group relative grid grid-cols-[56px_1fr] items-start gap-[24px] max-md:grid-cols-[48px_1fr] max-md:gap-[16px]"
              >
                <span className="relative z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[var(--card)] shadow-[0_10px_24px_rgba(30,27,36,0.08)] ring-4 ring-[var(--paper)] transition group-hover:bg-[var(--plum)] max-md:h-[48px] max-md:w-[48px]">
                  <Icon className="h-[22px] w-[22px] text-[var(--plum)] transition group-hover:text-white" strokeWidth={1.8} />
                </span>

                <div className="rounded-[20px] bg-[var(--card)] p-[28px] shadow-[0_10px_30px_rgba(30,27,36,0.06)] transition group-hover:-translate-y-[3px] group-hover:shadow-[0_18px_40px_rgba(30,27,36,0.1)] max-md:p-[20px]">
                  <div className="mb-[10px] flex flex-wrap items-center justify-between gap-[10px]">
                    <h3 className="text-[19px] font-bold text-[var(--ink)]">{entry.role}</h3>
                    <span className="inline-flex items-center rounded-full bg-[var(--paper)] px-[13px] py-[5px] text-[11.5px] font-semibold text-[var(--plum)]">
                      {entry.period}
                    </span>
                  </div>
                  <p className="mb-[14px] text-[13.5px] font-medium text-[var(--ink-soft)]">{entry.org}</p>
                  <div className="mt-[18px] space-y-[10px]">
                    {entry.notes.map((note) => (
                      <div
                        key={note}
                        className="rounded-[14px] border border-[var(--rule)] bg-[var(--paper)] px-[16px] py-[12px] transition duration-300 hover:border-[var(--plum)]/30"
                      >
                        <p className="text-[14px] leading-[1.7] text-[var(--ink-soft)]">
                          {note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
