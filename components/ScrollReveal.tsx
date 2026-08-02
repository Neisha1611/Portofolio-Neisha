"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

const viewport = { once: true, amount: 0.2 };

export const revealTransition = {
  duration: 0.6,
  ease: "easeOut",
} as const;

export const revealVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
} as const;

export const staggerVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...revealTransition,
      staggerChildren: 0.09,
    },
  },
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

type RevealItemProps = RevealProps & {
  as?: "div" | "span" | "li";
};

function useRevealControls<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, viewport);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return { ref, controls };
}

export function RevealSection({ children, className, id }: RevealProps) {
  const { ref, controls } = useRevealControls<HTMLElement>();

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      variants={staggerVariants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.section>
  );
}

export function RevealDiv({ children, className, id }: RevealProps) {
  const { ref, controls } = useRevealControls<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      variants={staggerVariants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

export function RevealFooter({ children, className }: RevealProps) {
  const { ref, controls } = useRevealControls<HTMLElement>();

  return (
    <motion.footer ref={ref} className={className} variants={revealVariants} initial="hidden" animate={controls}>
      {children}
    </motion.footer>
  );
}

export function RevealItem({ as = "div", children, className, id }: RevealItemProps) {
  const Component = as === "span" ? motion.span : as === "li" ? motion.li : motion.div;

  return (
    <Component id={id} className={className} variants={revealVariants}>
      {children}
    </Component>
  );
}
