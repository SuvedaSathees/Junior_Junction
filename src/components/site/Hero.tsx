import { Link } from "@tanstack/react-router";
import { ArrowDown, Sparkles } from "lucide-react";
import img1 from "@/assets/hero-1-learning.jpg";
import img2 from "@/assets/hero-2-play.jpg";
import img3 from "@/assets/hero-3-art.jpg";
import img4 from "@/assets/hero-4-dance.jpg";
import img5 from "@/assets/hero-5-outdoor.jpg";
import img6 from "@/assets/hero-6-story.jpg";
import img7 from "@/assets/hero-7-digital.jpg";
import img8 from "@/assets/hero-8-sports.jpg";

const slides = [
  { src: img1, label: "Kids Learning" },
  { src: img2, label: "Play Time" },
  { src: img3, label: "Art & Craft" },
  { src: img4, label: "Dance & Music" },
  { src: img5, label: "Outdoor Activities" },
  { src: img6, label: "Story Time" },
  { src: img7, label: "Digital Classroom" },
  { src: img8, label: "Sports & Games" },
];

function RotatingBadge() {
  const text = "LEARN • PLAY • GROW • JUNIOR JUNCTION • ";
  const chars = text.split("");
  const radius = 46;
  return (
    <div className="relative h-28 w-28">
      <div className="animate-spin-slow absolute inset-0">
        {chars.map((c, i) => {
          const angle = (i / chars.length) * 360;
          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 text-[10px] font-semibold tracking-[0.2em] text-foreground/70"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
              }}
            >
              {c}
            </span>
          );
        })}
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-red text-primary-foreground">
          <Sparkles className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  // Duplicate slides for seamless marquee loop
  const loop = [...slides, ...slides];

  return (
    <section className="relative px-4 pt-32 pb-16 sm:pt-36">
      {/* decorative shapes */}
      <div className="pointer-events-none absolute left-10 top-32 h-24 w-24 rounded-full bg-accent-red/10 blur-2xl" />
      <div className="pointer-events-none absolute right-12 top-40 h-32 w-32 rounded-full bg-accent-blue/10 blur-2xl" />

      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[44px] border border-white/70 bg-card/80 px-6 pb-10 pt-12 shadow-float backdrop-blur-xl sm:px-10 sm:pt-16">
          {/* top pill */}
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-medium text-foreground/70 animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-red" />
            Admissions Open 2026 · Erode
          </div>

          <h1 className="mx-auto max-w-3xl text-center text-4xl leading-[1.05] sm:text-6xl animate-fade-up">
            Where Little Minds{" "}
            <span className="italic text-accent-red">Learn</span>,{" "}
            <span className="italic text-accent-blue">Play</span> & Grow
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-center text-base text-muted-foreground sm:text-lg">
            A joyful preschool nurturing creativity, confidence and happy
            learning — every single day.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-accent-red px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              Admissions Open
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent-blue hover:text-accent-blue"
            >
              Schedule Visit
            </Link>
          </div>

          {/* Rotating image strip */}
          <div className="relative mt-12 -mx-6 sm:-mx-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent" />
            <div className="overflow-hidden">
              <div className="animate-marquee flex w-max gap-5 px-6 sm:gap-6 sm:px-10">
                {loop.map((s, i) => (
                  <figure
                    key={i}
                    className="group relative w-[calc(50vw-2rem)] max-w-[230px] shrink-0 overflow-hidden rounded-3xl shadow-card sm:w-[230px] md:w-[240px]"
                  >
                    <img
                      src={s.src}
                      alt={s.label}
                      width={768}
                      height={1024}
                      loading={i < 4 ? "eager" : "lazy"}
                      className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <figcaption className="absolute inset-x-3 bottom-3 rounded-full bg-white/85 px-3 py-1.5 text-center text-[11px] font-semibold tracking-wide text-foreground backdrop-blur">
                      {s.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-10 grid grid-cols-1 items-center gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-card bg-gradient-to-br from-accent-red/30 to-accent-blue/30"
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold">500+ Happy Parents</div>
                <div className="text-xs text-muted-foreground">trust Junior Junction</div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Explore More
              </span>
              <ArrowDown className="mt-2 h-5 w-5 animate-bounce-down text-accent-red" />
            </div>

            <div className="flex justify-center sm:justify-end">
              <RotatingBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}