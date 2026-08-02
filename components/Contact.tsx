import { Github, Linkedin, Mail } from "lucide-react";
import { RevealItem, RevealSection } from "@/components/ScrollReveal";

const channels = [
  { icon: Mail, label: "Email", value: "neishaqonita16@gmail.com", href: "mailto:neishaqonita16@gmail.com" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/neishaqonita16",
    href: "https://linkedin.com/in/neishaqonita16",
  },
  { icon: Github, label: "GitHub", value: "github.com/Neisha1611", href: "https://github.com/Neisha1611" },
];

export function Contact() {
  return (
    <RevealSection id="kontak" className="mx-auto w-full max-w-[1280px] px-[32px] pb-[96px] max-lg:px-[24px] max-md:pb-[72px]">
      <RevealItem className="rounded-[28px] bg-[var(--plum)] px-[40px] py-[64px] text-center max-md:px-[24px] max-md:py-[48px]">
        <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/70">Kontak</span>
        <h2 className="mb-[16px] mt-[10px] text-[36px] font-bold leading-[1.18] text-white max-md:text-[28px]">
          Mari terhubung dan berdiskusi.
        </h2>

        <div className="grid grid-cols-3 gap-[16px] max-md:grid-cols-1">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex flex-col items-center gap-[10px] rounded-[18px] bg-white/10 px-[20px] py-[28px] backdrop-blur-sm transition hover:-translate-y-[3px] hover:bg-[var(--mint)]"
              >
                <Icon className="h-[22px] w-[22px] text-white transition group-hover:text-[var(--mint-ink)]" strokeWidth={1.7} />
                <span className="text-[13px] font-semibold text-white transition group-hover:text-[var(--mint-ink)]">
                  {channel.label}
                </span>
                <span className="text-[12px] text-white/70 transition group-hover:text-[var(--mint-ink)]/80">
                  {channel.value}
                </span>
              </a>
            );
          })}
        </div>
      </RevealItem>
    </RevealSection>
  );
}
