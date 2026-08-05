import { Effects, Sheen, Reveal } from "../components/Effects";
import CallOrText from "../components/CallOrText";

/* PHONE DOCTRINE · the number is written down exactly once, as digits, inside
   CallOrText. Display and every href are derived from it there. */
const ADDRESS = "572 Bloomfield Ave, Bloomfield, NJ 07003";

const services = [
  {
    n: "01",
    name: "Fine Jewelry",
    body: "Necklaces, earrings, bracelets, and pendants for everyday wear and the days that matter — chosen piece by piece at the counter, not from a catalog page.",
    img: "/img/20299702.jpg",
    alt: "Necklaces displayed on jewelry busts under warm case lighting",
    ratio: "16/10",
  },
  {
    n: "02",
    name: "Gold",
    body: "Gold pieces bought, sold, and appraised in person. Bring in what you have; leave knowing exactly what it is worth.",
    img: "/img/7134458.jpg",
    alt: "Gold pendant necklace laid on a white surface",
    ratio: "16/10",
  },
  {
    n: "03",
    name: "Engagement",
    body: "The ring is the easy part when someone walks you through it. Settings, stones, and sizing handled face to face — at neighborhood prices.",
    img: "/img/2735981.jpg",
    alt: "Pear-cut diamond halo ring resting on dark stone",
    ratio: "4/3",
  },
  {
    n: "04",
    name: "Watches",
    body: "Timepieces for wearing, gifting, and keeping. Batteries, bands, and adjustments while you wait.",
    img: "/img/1034065.jpg",
    alt: "Close-up of a silver moonphase wristwatch dial",
    ratio: "16/10",
  },
  {
    n: "05",
    name: "Repairs",
    body: "Ring sizing, chain soldering, stone setting, clasp work, and restorations — done with care, so the piece you love stays the piece you love.",
    img: "/img/10474316.jpg",
    alt: "Jeweler's pliers and wire on a workbench",
    ratio: "16/10",
  },
  {
    n: "06",
    name: "Custom Pieces",
    body: "Have something in mind that no case holds? Bring the idea. Special orders and custom work are part of what a real jeweler is for.",
    img: "/img/5370641.jpg",
    alt: "Silver gemstone stud earrings arranged on a white surface",
    ratio: "16/10",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <Effects />

      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-40 bg-[#faf8f4]/85 backdrop-blur-md hairline-b">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-lg tracking-wide md:text-xl">
            Vega <span className="italic metallic-text">Jewelry</span>
          </a>
          <div className="flex items-center gap-5 text-sm md:gap-8">
            <a href="#house" className="hidden text-[#4b4b52] transition-colors hover:text-[#1b1b1e] sm:block">
              The House
            </a>
            <a href="#services" className="hidden text-[#4b4b52] transition-colors hover:text-[#1b1b1e] sm:block">
              What We Do
            </a>
            <a href="#visit" className="hidden text-[#4b4b52] transition-colors hover:text-[#1b1b1e] sm:block">
              Visit
            </a>
            <CallOrText variant="nav" />
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-5 pt-28 md:px-8 md:pt-36">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-[#5d6470]">
            572 Bloomfield Ave · Bloomfield, New Jersey
          </p>
          <h1 className="font-display mt-5 max-w-3xl text-4xl font-light leading-[1.06] sm:text-6xl md:text-7xl">
            The jewelry counter
            <br />
            <span className="italic metallic-text">on the Avenue.</span>
          </h1>
        </Reveal>
        <Reveal delay={120} className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base leading-relaxed text-[#4b4b52]">
            Vega Jewelry is Bloomfield&rsquo;s own jeweler — fine pieces, honest repairs, and a
            counter where you&rsquo;re spoken to like a neighbor. 4.4 stars on Google from the
            people who shop here.
          </p>
          <CallOrText variant="hero" label="Call or text the counter" align="left" />
        </Reveal>
        <Reveal delay={200} className="mt-12">
          <Sheen
            src="/img/13570063.jpg"
            alt="A row of five silver engagement rings standing upright in cool light"
            ratio="21/9"
            className="rounded-sm max-md:!aspect-[4/3]"
          />
        </Reveal>
      </section>

      {/* Split-scroll vitrine */}
      <div className="mx-auto mt-24 max-w-6xl px-5 md:mt-32 md:px-8">
        <div className="md:grid md:grid-cols-[minmax(260px,5fr)_7fr] md:gap-14">
          {/* Left sticky column (desktop) */}
          <aside className="hidden md:block">
            <div className="sticky top-32">
              <p className="text-xs uppercase tracking-[0.32em] text-[#5d6470]">Currently viewing</p>
              <p id="stage-label" className="font-display mt-3 text-4xl font-light italic">
                The House
              </p>
              <div className="hairline-t mt-8 pt-8">
                <p className="max-w-xs text-sm leading-relaxed text-[#4b4b52]">
                  A vitrine is a glass case built to let the work speak. This page works the same
                  way — scroll the right side; the case labels itself.
                </p>
                <p className="mt-6 text-sm text-[#4b4b52]">
                  572 Bloomfield Ave
                  <br />
                  Bloomfield, NJ 07003
                </p>
              </div>
            </div>
          </aside>

          {/* Right scrolling column */}
          <div>
            {/* The House */}
            <section id="house" data-stage="The House" className="scroll-mt-28">
              <h2 className="font-display text-3xl font-light md:hidden">The House</h2>
              <Reveal className="mt-6 md:mt-0">
                <Sheen
                  src="/img/31301818.jpg"
                  alt="Jewelry storefront window with necklaces on white display busts"
                  ratio="4/3"
                  className="rounded-sm"
                />
              </Reveal>
              <Reveal delay={80} className="mt-8">
                <p className="max-w-xl text-lg leading-relaxed">
                  A jewelry store isn&rsquo;t a website. It&rsquo;s a counter, a case, and a person
                  who knows the difference between what shines and what lasts. Vega Jewelry is
                  that for Bloomfield — walk in with a question, walk out with an answer.
                </p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4b4b52]">
                  No appointment needed. Open Monday through Saturday, ten to seven, at 572
                  Bloomfield Avenue.
                </p>
              </Reveal>
              <Reveal delay={120} className="mt-10">
                <Sheen
                  src="/img/33561789.jpg"
                  alt="Necklaces on busts inside a dark glass jewelry case"
                  ratio="16/9"
                  className="rounded-sm"
                />
              </Reveal>
            </section>

            {/* Services */}
            <section id="services" data-stage="What We Do" className="mt-24 scroll-mt-28 md:mt-32">
              <h2 className="font-display mb-4 text-3xl font-light md:hidden">What We Do</h2>
              <div>
                {services.map((s, i) => (
                  <Reveal
                    key={s.n}
                    className={`py-10 md:py-12 ${i === 0 ? "pt-0 md:pt-0" : "hairline-t"}`}
                    delay={i % 2 ? 60 : 0}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="metallic-text font-display text-2xl italic">{s.n}</span>
                      <h3 className="font-display text-2xl font-normal md:text-3xl">{s.name}</h3>
                    </div>
                    <div
                      className={`mt-6 flex flex-col gap-6 md:flex-row md:items-start ${
                        i % 2 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <Sheen src={s.img} alt={s.alt} ratio={s.ratio} className="rounded-sm md:w-3/5" />
                      <p className="max-w-sm text-base leading-relaxed text-[#4b4b52] md:w-2/5">{s.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* Visit */}
            <section id="visit" data-stage="Visit" className="mt-24 scroll-mt-28 md:mt-32">
              <h2 className="font-display mb-6 text-3xl font-light md:hidden">Visit</h2>
              <Reveal>
                <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-[#5d6470]">The address</p>
                    <p className="font-display mt-3 text-2xl font-light">
                      572 Bloomfield Ave
                      <br />
                      Bloomfield, NJ 07003
                    </p>
                    <CallOrText variant="quiet" align="left" className="mt-4 inline-block" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-[#5d6470]">Hours</p>
                    <ul className="mt-3 space-y-1 text-base text-[#4b4b52]">
                      <li>Monday – Saturday · 10 AM – 7 PM</li>
                      <li>Sunday · Closed</li>
                    </ul>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100} className="mt-10">
                <div
                  className="map-frame rounded-sm max-md:!h-auto max-md:aspect-[3/4] max-md:min-h-[360px]"
                  style={{ height: "clamp(280px, 38vw, 420px)" }}
                >
                  <iframe
                    title="Vega Jewelry location — 572 Bloomfield Ave, Bloomfield, NJ 07003"
                    src="https://www.google.com/maps?q=572+Bloomfield+Ave,+Bloomfield,+NJ+07003&z=15&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="hairline-t mt-24 md:mt-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-display text-lg">
            Vega <span className="italic metallic-text">Jewelry</span>
          </p>
          <div className="flex flex-col gap-2 text-sm text-[#4b4b52] md:flex-row md:items-center md:gap-6">
            <span>{ADDRESS}</span>
            <CallOrText variant="quiet" align="left" up className="inline-block [&>button]:text-sm" />
            <a
              href="https://www.facebook.com/vegapalacejewelry/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#aab0bc] underline-offset-4"
            >
              Facebook
            </a>
          </div>
          <p className="text-sm text-[#4b4b52]">
            built by{" "}
            <a
              href="https://bysemaj.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              bysemaj.com
            </a>
          </p>
        </div>
      </footer>

      {/* Fixed tap-to-call — collapses to a 46px circle on phones (ARSENAL §13).
          Opens upward, because it sits at the bottom of the viewport. */}
      <CallOrText variant="dock" up className="fixed bottom-5 right-5 z-50" />

    </main>
  );
}
