import { createFileRoute } from "@tanstack/react-router";
import { AboutSection, WhyChooseSection } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Junior Junction Play School, Erode" },
      {
        name: "description",
        content:
          "Meet Junior Junction — a safe, nurturing, activity-based preschool in Erode for little minds to learn, play and grow.",
      },
      { property: "og:title", content: "About — Junior Junction Play School" },
      {
        property: "og:description",
        content: "A nurturing preschool in Erode built around joyful, activity-based learning.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-28">
      <section className="px-4 pt-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent-red">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-red" /> Our Story
        </span>
        <h1 className="mx-auto mt-4 max-w-3xl text-5xl leading-tight sm:text-6xl">
          A preschool built on <span className="italic text-accent-blue">love</span>,
          play and gentle learning
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Junior Junction has been a trusted home for early learning in Erode for
          over a decade — where every child is seen, heard and celebrated.
        </p>
      </section>
      <AboutSection />
      <WhyChooseSection />
    </div>
  );
}