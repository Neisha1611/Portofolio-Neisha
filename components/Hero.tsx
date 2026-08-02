"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const phrases = [
  {
    lead: "Belajar membangun solusi melalui", highlight: "Artificial Intelligence",
  },
  {
    lead: "Mengolah data menjadi", highlight: "insight yang bermakna",
  },
];

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, 44]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((current) => (current + 1) % phrases.length);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  const active = phrases[phraseIndex];

  return (
    <div ref={wrapRef} className="relative lg:h-[122vh]">
      <motion.section
        id="home"
        style={{ scale, borderRadius: radius }}
        className="relative flex w-full flex-col justify-between overflow-hidden bg-[var(--plum)] pb-[36px] pt-[92px] lg:sticky lg:top-0 lg:h-screen lg:pb-0"
      >
        <div className="blob-glow pointer-events-none absolute -top-[120px] right-[-80px] h-[420px] w-[420px] rounded-full" />

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 items-end px-[32px] max-lg:flex-col max-lg:items-center max-lg:px-[24px] max-lg:pt-[24px]">
          <motion.div
            className="relative z-10 h-[480px] w-[380px] shrink-0 max-lg:h-[300px] max-lg:w-[260px]"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src="/hero-portrait.jpg"
              alt="Foto Neisha Qonita Nurul Izzah"
              fill
              priority
              sizes="380px"
              className="object-cover object-top"
              style={{ borderRadius: "18px 18px 0 0" }}
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-[var(--plum)] to-transparent" />
          </motion.div>

          <div className="relative z-10 flex-1 pb-[18px] pl-[56px] max-lg:pb-0 max-lg:pl-0 max-lg:pt-[36px] max-lg:text-center">
            <motion.h1
              className="max-w-[640px] text-[46px] font-bold leading-[1.12] text-white max-lg:max-w-none max-lg:text-[34px] max-md:text-[28px]"
              initial="hidden"
              animate="visible"
              variants={heroItem}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="block"
                >
                  {active.lead}{" "}
                  <span className="highlight-mark text-white">{active.highlight}</span>
                </motion.span>
              </AnimatePresence>
            </motion.h1>

            <motion.p
              className="mt-[22px] max-w-[440px] text-[15px] leading-[1.65] text-white/80 max-lg:mx-auto"
              initial="hidden"
              animate="visible"
              variants={heroItem}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
            >
              Mahasiswa Sistem Informasi Universitas Jember yang memiliki minat pada Artificial Intelligence, Data Analytics, dan pengembangan sistem. 
              Saya senang mempelajari teknologi melalui proyek, penelitian, dan pengalaman kolaborasi untuk terus mengembangkan kemampuan di bidang AI.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroItem}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.34 }}
              className="mt-[30px] flex items-center gap-[18px] max-lg:justify-center"
            >
              <a
                href="#proyek"
                className="inline-flex items-center rounded-full bg-[var(--mint)] px-[26px] py-[14px] text-[14px] font-semibold text-[var(--mint-ink)] transition hover:scale-[1.03] hover:brightness-105"
              >
                Lihat Proyek Saya
              </a>
              <span className="h-[26px] w-px bg-white/25 max-lg:hidden" />
              <a
                href="#kontak"
                className="text-[14px] font-semibold text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
              >
                Hubungi saya
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
          className="relative z-10 mx-auto mt-[36px] w-full max-w-[1000px] px-[24px] max-lg:mt-[28px]"
        >
        </motion.div>
      </motion.section>
    </div>
  );
}
