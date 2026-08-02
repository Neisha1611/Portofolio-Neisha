import { RevealFooter } from "@/components/ScrollReveal";

const focusAreas = [
  "Analisis Data",
  "Machine Learning",
];

const links = [
  { label: "Tentang", href: "#tentang" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Proyek", href: "#proyek" },
  { label: "Kontak", href: "#kontak" },
];

export function Footer() {
  return (
    <RevealFooter className="bg-[var(--plum-deep)]">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-3 gap-[40px] px-[40px] py-[64px] max-lg:px-[28px] max-md:grid-cols-1 max-md:gap-[36px] max-md:py-[48px]">
        <div>
          <h3 className="text-[22px] font-semibold text-white">
            Neisha Qonita Nurul Izzah
          </h3>
          <p className="mt-[18px] text-[15px] font-medium text-white">
            Hubungi Saya
          </p>
          <p className="mt-[8px] text-[14px] text-white/60">
            neishaqonita16@gmail.com
          </p>
          <p className="text-[14px] text-white/60">
            Lumajang, Jawa Timur
          </p>
        </div>

        <div>
          <h4 className="text-[15px] font-medium text-white">
            Fokus 
          </h4>
          <ul className="mt-[16px] flex flex-col gap-[10px]">
            {focusAreas.map((area) => (
              <li key={area} className="text-[14px] text-white/60">
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[15px] font-medium text-white">
            Tautan
          </h4>
          <ul className="mt-[16px] flex flex-col gap-[10px]">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[14px] text-white/60 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-[40px] py-[20px] text-center text-[12.5px] text-white/40 max-lg:px-[28px]">
        &copy; 2026 Neisha Qonita Nurul Izzah. All rights reserved.
      </div>
    </RevealFooter>
  );
}