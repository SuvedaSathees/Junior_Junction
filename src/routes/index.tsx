import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import {
  AboutSection,
  ExperiencesSection,
  WhyChooseSection,
  TestimonialsSection,
  CTASection,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Junior Junction Play School — Erode" },
      {
        name: "description",
        content:
          "A premium, joyful preschool in Erode where little minds learn, play and grow. Admissions Open 2026.",
      },
      { property: "og:title", content: "Junior Junction Play School — Erode" },
      {
        property: "og:description",
        content: "Where Little Minds Learn, Play & Grow. Admissions Open 2026.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperiencesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
