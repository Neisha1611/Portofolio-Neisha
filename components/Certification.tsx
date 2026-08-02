import Image from "next/image";
import { ArrowUpRight, Award } from "lucide-react";
import { RevealItem, RevealSection } from "@/components/ScrollReveal";

const certifications = [
  {
    title: "Data Analytics and Visualization",
    issuer: "Dsarea",
    date: "Juli 2026",
    image: "/sertifikat.jpg",
  },
];

export function Certifications() {
  return (
    <RevealSection id="sertifikasi" className="mx-auto w-full max-w-[1280px] px-[32px] py-[96px] max-lg:px-[24px] max-md:py-[72px]">
      <RevealItem className="mb-[48px] max-w-[560px]">
        <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--plum)]">
          Course & Certification
        </span>
      </RevealItem>

      <div className="grid grid-cols-1 gap-[22px]">
        {certifications.map((item) => (
          <RevealItem
            key={item.title}
            className="grid grid-cols-[280px_1fr] items-center gap-[32px] rounded-[24px] bg-[var(--card)] p-[24px] shadow-[0_10px_30px_rgba(30,27,36,0.06)] max-md:grid-cols-1 max-md:gap-[20px]"
          >
            <a
              href={item.image}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-[var(--paper)]"
            >
              <Image
                src={item.image}
                alt={`Sertifikat ${item.title}`}
                fill
                sizes="280px"
                className="object-cover transition duration-500 group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-[var(--plum)]/0 text-white opacity-0 transition group-hover:bg-[var(--plum)]/50 group-hover:opacity-100">
                <span className="inline-flex items-center gap-[6px] rounded-full bg-white px-[14px] py-[8px] text-[12px] font-semibold text-[var(--ink)]">
                  Lihat penuh
                  <ArrowUpRight className="h-[13px] w-[13px]" />
                </span>
              </span>
            </a>

            <div>
              <span className="mb-[12px] inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[var(--paper)] text-[var(--plum)]">
                <Award className="h-[20px] w-[20px]" strokeWidth={1.8} />
              </span>
              <h3 className="text-[19px] font-bold text-[var(--ink)]">{item.title}</h3>
              <p className="mt-[6px] text-[14px] text-[var(--ink-soft)]">
                {item.issuer} &middot; {item.date}
              </p>
            </div>
          </RevealItem>
        ))}
      </div>
    </RevealSection>
  );
}
