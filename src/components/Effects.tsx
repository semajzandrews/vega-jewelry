"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";

/** Smooth scroll (Lenis) + IntersectionObserver reveals + signature sheen wiring. */
export function Effects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lenis: Lenis | null = null;
    let raf = 0;
    if (!reduced) {
      lenis = new Lenis({ lerp: 0.11 });
      const loop = (t: number) => {
        lenis!.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    // reveals
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.18 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // Signature: cursor-following sheen on imagery — desktop pointer only.
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const onMove = (ev: PointerEvent) => {
      const frame = (ev.target as Element | null)?.closest?.(".sheen-frame");
      if (!frame) return;
      const r = frame.getBoundingClientRect();
      (frame as HTMLElement).style.setProperty("--mx", `${ev.clientX - r.left}px`);
      (frame as HTMLElement).style.setProperty("--my", `${ev.clientY - r.top}px`);
    };
    if (fine && !reduced) document.addEventListener("pointermove", onMove, { passive: true });

    // sticky section label
    const label = document.getElementById("stage-label");
    const sections = document.querySelectorAll<HTMLElement>("[data-stage]");
    const stageIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && label) label.textContent = (e.target as HTMLElement).dataset.stage ?? "";
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => stageIO.observe(s));

    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      io.disconnect();
      stageIO.disconnect();
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}

/** Image frame carrying the sheen signature. */
export function Sheen({
  src,
  alt,
  ratio,
  className = "",
}: {
  src: string;
  alt: string;
  ratio: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className={`sheen-frame ${className}`} style={{ aspectRatio: ratio }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </div>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
