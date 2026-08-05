"use client";

import { useEffect, useRef, useState } from "react";
import { formatPhone, telHref, smsHref } from "../lib/phone";

/* -----------------------------------------------------------------------------
 * CALL OR TEXT · phone doctrine
 *
 * Half the reason anyone contacts a jeweler is a picture: a cracked clasp, a
 * chain that parted, a ring from a grandmother nobody has valued yet. None of
 * that survives a phone call. So every phone CTA on this site opens a choice —
 * dial the counter, or send the photo — and the text arrives with the question
 * already written.
 *
 * Treatment is Vega's own: no dark chip and no bordered card. The panel is a
 * pale card the colour of the page with a single hairline edge, the two rows
 * split by that same hairline, and the labels set in the display italic used
 * for the wordmark. It reads like the card at the counter, not a widget.
 * -------------------------------------------------------------------------- */

const DIGITS = "9734290525"; // SOURCED · Vega Jewelry, 572 Bloomfield Ave

export const PHONE = formatPhone(DIGITS);
export const PHONE_TEL = telHref(DIGITS);

/* Short on purpose — carriers truncate, and the jeweler only needs to know what
   he is looking at before he answers. */
const SMS_BODY =
  "Hi Vega Jewelry — photo attached. Could you tell me what this piece needs?";
export const PHONE_SMS = smsHref(DIGITS, SMS_BODY);

type Variant = "nav" | "hero" | "quiet" | "dock";

const TRIGGER: Record<Variant, string> = {
  nav: "rounded-full border border-[#1b1b1e] px-4 py-1.5 text-sm transition-colors hover:bg-[#1b1b1e] hover:text-[#faf8f4]",
  hero: "inline-flex w-fit items-center gap-2 rounded-full bg-[#1b1b1e] px-6 py-3 text-sm text-[#faf8f4] transition-opacity hover:opacity-85",
  quiet:
    "text-lg underline decoration-[#aab0bc] underline-offset-4 transition-colors hover:text-[#5d6470]",
  dock: "flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#1b1b1e] text-[#faf8f4] shadow-lg transition-transform hover:scale-105 md:h-auto md:w-auto md:gap-2 md:px-5 md:py-3",
};

export default function CallOrText({
  variant = "nav",
  label,
  align = "right",
  up = false,
  className = "",
}: {
  variant?: Variant;
  /** trigger copy; defaults to the number itself */
  label?: string;
  align?: "left" | "right";
  /** open upward — for the dock, which lives at the bottom of the viewport */
  up?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  /* NOT .wrap — that name collides with page containers and throws the panel
     off screen. This root is .cot and carries nothing but positioning. */
  const cot = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!cot.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={cot} className={`cot relative ${className}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Call or text Vega Jewelry at ${PHONE}`}
        onClick={() => setOpen((v) => !v)}
        className={TRIGGER[variant]}
      >
        {variant === "dock" ? (
          <>
            <PhoneGlyph />
            <span className="hidden text-sm md:inline">{PHONE}</span>
          </>
        ) : (
          (label ?? PHONE)
        )}
      </button>

      <div
        role="menu"
        data-open={open}
        className={[
          "absolute z-50 w-[268px] rounded-sm border border-[#1b1b1e]/15 bg-[#faf8f4] p-1 shadow-[0_18px_44px_rgba(27,27,30,0.14)]",
          "transition-[opacity,transform] duration-300 ease-out",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none opacity-0",
          up ? "bottom-[calc(100%+10px)]" : "top-[calc(100%+10px)]",
          up && !open ? "translate-y-1.5" : "",
          !up && !open ? "-translate-y-1.5" : "",
          align === "right" ? "right-0" : "left-0",
        ].join(" ")}
      >
        <a
          href={PHONE_TEL}
          role="menuitem"
          onClick={() => setOpen(false)}
          className="flex items-start gap-3 px-3 py-3 text-left transition-colors hover:bg-[#1b1b1e]/[0.05]"
        >
          <PhoneGlyph small />
          <span>
            <span className="font-display block text-base">Call the counter</span>
            <span className="mt-0.5 block text-xs text-[#5d6470]">
              Mon &ndash; Sat, 10 AM &ndash; 7 PM
            </span>
          </span>
        </a>
        <span className="hairline-t mx-3 block" />
        <a
          href={PHONE_SMS}
          role="menuitem"
          onClick={() => setOpen(false)}
          className="flex items-start gap-3 px-3 py-3 text-left transition-colors hover:bg-[#1b1b1e]/[0.05]"
        >
          <MessageGlyph />
          <span>
            <span className="font-display block text-base">
              Text a <span className="italic metallic-text">photo</span>
            </span>
            <span className="mt-0.5 block text-xs text-[#5d6470]">
              Repairs and appraisals, sight first
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

function PhoneGlyph({ small }: { small?: boolean }) {
  const s = small ? 15 : 17;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={small ? "mt-1 shrink-0 text-[#5d6470]" : "shrink-0"}
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
        fill="currentColor"
      />
    </svg>
  );
}

/* A loupe over a message square: the text branch exists so he can look at the
   piece before you drive over. */
function MessageGlyph() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mt-1 shrink-0 text-[#5d6470]"
    >
      <path
        d="M3 4.5h18v12H8.5L4.5 20v-3.5H3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="10" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="m13 12 2.4 2.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
