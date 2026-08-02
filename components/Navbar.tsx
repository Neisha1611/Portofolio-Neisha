"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const menu = [
  { label: "Tentang", id: "tentang" },
  { label: "Keahlian", id: "keahlian" },
  { label: "Pengalaman", id: "pengalaman" },
  { label: "Proyek", id: "proyek" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = menu
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-[var(--paper)]/95 shadow-[0_4px_20px_rgba(30,27,36,0.08)] backdrop-blur-sm" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="relative mx-auto flex h-[76px] w-full max-w-[1280px] items-center justify-between px-[32px] max-md:px-[20px]">
        <a
          href="#home"
          className={`text-[16px] font-bold transition-colors ${scrolled ? "text-[var(--ink)]" : "text-white"}`}
        >
          Neisha Qonita
        </a>

        <div className="hidden items-center gap-[6px] text-[14px] font-medium lg:flex">
          {menu.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-full px-[16px] py-[9px] transition-colors ${
                  isActive
                    ? "text-white"
                    : scrolled
                      ? "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 -z-10 rounded-full bg-[var(--plum)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href="#kontak"
          className={`hidden items-center rounded-full px-[22px] py-[11px] text-[13px] font-semibold transition lg:inline-flex ${
            scrolled ? "bg-[var(--ink)] text-white hover:bg-[var(--plum)]" : "bg-white text-[var(--ink)] hover:bg-[var(--mint)]"
          }`}
        >
          Hubungi Saya
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="relative flex h-[40px] w-[40px] items-center justify-center lg:hidden"
        >
          <span
            className={`absolute h-[2px] w-[22px] rounded-full transition duration-300 ${scrolled || isOpen ? "bg-[var(--ink)]" : "bg-white"} ${isOpen ? "rotate-45" : "-translate-y-[6px]"}`}
          />
          <span
            className={`absolute h-[2px] w-[22px] rounded-full transition duration-300 ${scrolled || isOpen ? "bg-[var(--ink)]" : "bg-white"} ${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute h-[2px] w-[22px] rounded-full transition duration-300 ${scrolled || isOpen ? "bg-[var(--ink)]" : "bg-white"} ${isOpen ? "-rotate-45" : "translate-y-[6px]"}`}
          />
        </button>

        {isOpen ? (
          <div className="absolute left-[16px] right-[16px] top-[68px] flex flex-col gap-[4px] rounded-[16px] bg-white px-[22px] py-[18px] text-[14px] font-semibold text-[var(--ink-soft)] shadow-[0_14px_34px_rgba(30,27,36,0.14)] lg:hidden">
            {menu.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center justify-between border-b border-[var(--rule)] py-[12px] last:border-b-0 hover:text-[var(--ink)] ${
                  activeId === item.id ? "text-[var(--plum)]" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                {activeId === item.id ? (
                  <span className="h-[7px] w-[7px] rounded-full bg-[var(--plum)]" />
                ) : null}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setIsOpen(false)}
              className="mt-[10px] inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-[20px] py-[12px] text-white"
            >
              Hubungi Saya
            </a>
          </div>
        ) : null}
      </nav>
    </motion.header>
  );
}
