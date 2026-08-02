import Image from "next/image";
import { RevealItem, RevealSection } from "@/components/ScrollReveal";

export function About() {
  return (
    <RevealSection
      id="tentang"
      className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-[0.8fr_1.2fr] gap-[56px] bg-[var(--paper)] px-[32px] pb-[96px] pt-[96px] max-lg:px-[24px] lg:-mt-[22vh] lg:rounded-t-[44px] max-md:grid-cols-1 max-md:gap-[32px] max-md:pb-[72px] max-md:pt-[64px]"
    >
      <RevealItem className="relative">
        <div className="relative h-[380px] w-full overflow-hidden rounded-[20px] max-md:h-[320px]">
          <Image
            src="/about.jpg"
            alt="Neisha Qonita Nurul Izzah"
            fill
            sizes="420px"
            className="object-cover object-top"
          />
        </div>
      </RevealItem>

      <RevealItem>
        <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--plum)]">
          Tentang Saya
        </span>

        <p className="mt-[24px] text-[16px] leading-[1.9] text-[var(--ink-soft)]">
          Saya merupakan mahasiswa Sistem Informasi Universitas Jember angkatan
          2024 dengan IPK 3,89. Saya memiliki ketertarikan pada
          bidang analisis data dan pengembangan sistem serta senang mempelajari
          bagaimana teknologi dapat membantu menyelesaikan permasalahan nyata.
        </p>

        <p className="mt-[18px] text-[16px] leading-[1.9] text-[var(--ink-soft)]">
          Selain aktif mengikuti perkuliahan, saya juga terlibat dalam berbagai
          organisasi dan kepanitiaan. Pengalaman tersebut membantu saya
          mengembangkan kemampuan bekerja sama, berkomunikasi, beradaptasi, dan
          bertanggung jawab dalam menyelesaikan setiap tugas yang diberikan.
        </p>
      </RevealItem>
    </RevealSection>
  );
}
