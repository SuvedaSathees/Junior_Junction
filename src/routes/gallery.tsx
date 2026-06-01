import { createFileRoute } from "@tanstack/react-router";
import img1 from "@/assets/hero-1-learning.jpg";
import img2 from "@/assets/hero-2-play.jpg";
import img3 from "@/assets/hero-3-art.jpg";
import img4 from "@/assets/hero-4-dance.jpg";
import img5 from "@/assets/hero-5-outdoor.jpg";
import img6 from "@/assets/hero-6-story.jpg";
import img7 from "@/assets/hero-7-digital.jpg";
import img8 from "@/assets/hero-8-sports.jpg";
import about from "@/assets/about-classroom.jpg";

const items = [
  { src: img1, label: "Learning", h: "tall" },
  { src: img2, label: "Play", h: "short" },
  { src: img3, label: "Art", h: "short" },
  { src: img4, label: "Music", h: "tall" },
  { src: about, label: "Classroom", h: "short" },
  { src: img5, label: "Outdoor", h: "tall" },
  { src: img6, label: "Story", h: "tall" },
  { src: img7, label: "Digital", h: "short" },
  { src: img8, label: "Sports", h: "short" },
] as const;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Junior Junction Play School, Erode" },
      {
        name: "description",
        content: "A glimpse into life at Junior Junction — classrooms, activities and joyful moments.",
      },
      { property: "og:title", content: "Gallery — Junior Junction Play School" },
      { property: "og:description", content: "Moments of joy, learning and play from our campus in Erode." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="px-4 pb-10 pt-32">
      <section className="mx-auto max-w-6xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent-blue">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" /> Gallery
        </span>
        <h1 className="mt-4 text-5xl leading-tight sm:text-6xl">
          A peek into our <span className="italic text-accent-red">happy days</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Snapshots of curiosity, creativity and joy from our campus in Erode.
        </p>
      </section>

      <div className="mx-auto mt-12 max-w-6xl columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
        {items.map((it, i) => (
          <figure
            key={i}
            className="group mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-card"
          >
            <img
              src={it.src}
              alt={it.label}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                it.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            />
            <figcaption className="flex items-center justify-between px-5 py-4">
              <span className="text-sm font-semibold">{it.label}</span>
              <span className="h-1 w-8 rounded-full bg-accent-red transition-all group-hover:w-14" />
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}