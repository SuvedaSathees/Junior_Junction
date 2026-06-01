import { Link } from "@tanstack/react-router";
import {
  Monitor,
  Sparkles,
  ShieldCheck,
  Video,
  HeartHandshake,
  GraduationCap,
  Quote,
  Star,
} from "lucide-react";
import aboutImg from "@/assets/about-classroom.jpg";

export function AboutSection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-[36px] shadow-float">
            <img
              src={aboutImg}
              alt="Bright modern preschool classroom"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-card sm:block">
            <div className="text-2xl font-semibold text-accent-red">12+</div>
            <div className="text-xs text-muted-foreground">Years of joyful learning</div>
          </div>
        </div>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" /> About Us
          </span>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            About <span className="italic text-accent-red">Junior Junction</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            A safe, nurturing and activity-based preschool in the heart of Erode.
            We blend play, exploration and gentle structure so every child
            discovers their unique spark.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Activity-first curriculum built around curiosity",
              "Trained, caring teachers with low student ratios",
              "Safe, CCTV-monitored, child-friendly campus",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-red" />
                <span className="text-foreground/80">{t}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-7 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Learn more about us
          </Link>
        </div>
      </div>
    </section>
  );
}

const experiences = [
  { title: "Play Group", desc: "Gentle first steps for our youngest learners.", tag: "Age 1.5–2.5" },
  { title: "Pre-KG", desc: "Sensory play, songs and early social skills.", tag: "Age 2.5–3.5" },
  { title: "LKG", desc: "Letters, numbers and creative discovery.", tag: "Age 3.5–4.5" },
  { title: "UKG", desc: "Confident readers, writers, thinkers.", tag: "Age 4.5–5.5" },
  { title: "Art & Craft", desc: "Hands-on creativity every week.", tag: "Activity" },
  { title: "Dance & Music", desc: "Rhythm, expression, joy.", tag: "Activity" },
  { title: "Story Time", desc: "Imagination through beautiful stories.", tag: "Daily" },
  { title: "Outdoor Play", desc: "Fresh air, friends and adventure.", tag: "Daily" },
  { title: "Sports", desc: "Coordination through fun games.", tag: "Weekly" },
  { title: "Digital Learning", desc: "Smart, age-appropriate screen time.", tag: "Modern" },
];

export function ExperiencesSection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent-red">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-red" /> Programs & Activities
            </span>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Learning <span className="italic text-accent-blue">Experiences</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              One thoughtful curriculum — combining structured programs and joyful
              activities into a complete day of discovery.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            ← swipe to explore
          </p>
        </div>

        <div className="-mx-4 mt-10 overflow-hidden">
          <div className="flex w-max gap-5 px-4 animate-marquee">
            {[...experiences, ...experiences].map((e, i) => (
              <article
                key={i}
                className="group flex w-[280px] shrink-0 flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div>
                  <span className="inline-block rounded-full bg-accent-blue/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-blue">
                    {e.tag}
                  </span>
                  <h3 className="mt-4 text-2xl">{e.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="h-1 w-10 rounded-full bg-accent-red transition-all group-hover:w-16" />
                  <span className="text-xs font-medium text-foreground/60">0{(i % 9) + 1}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Monitor, title: "Digital Classroom", desc: "Interactive boards bring lessons alive." },
  { icon: Sparkles, title: "Activity Based Learning", desc: "Learning through doing, every day." },
  { icon: ShieldCheck, title: "Safe Environment", desc: "Child-first spaces designed with care." },
  { icon: Video, title: "CCTV Security", desc: "Full-campus monitoring for peace of mind." },
  { icon: HeartHandshake, title: "Individual Attention", desc: "Small class sizes, every child seen." },
  { icon: GraduationCap, title: "Experienced Teachers", desc: "Warm, qualified, joyful educators." },
];

export function WhyChooseSection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" /> Why Junior Junction
          </span>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            Built with <span className="italic text-accent-red">care</span>, for little hearts
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                  i % 2 === 0
                    ? "bg-accent-red/10 text-accent-red"
                    : "bg-accent-blue/10 text-accent-blue"
                }`}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Priya R.",
    role: "Parent of Aanya, UKG",
    text:
      "My daughter sings about school every morning. The teachers are so warm and the activities keep her excited to learn.",
    rating: 5,
  },
  {
    name: "Karthik M.",
    role: "Parent of Vihaan, LKG",
    text:
      "Beautiful campus and a team that truly knows each child. Junior Junction feels like a second home for our son.",
    rating: 5,
  },
  {
    name: "Divya S.",
    role: "Parent of Meera, Pre-KG",
    text:
      "From the safe environment to the thoughtful curriculum, every detail shows how much they care. Highly recommend.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-soft px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent-red">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-red" /> Testimonials
          </span>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            What <span className="italic text-accent-blue">Parents Say</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-3xl border border-border bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <Quote className="absolute -top-3 left-6 h-8 w-8 rounded-full bg-accent-red p-1.5 text-primary-foreground" />
              <div className="mt-3 flex gap-0.5 text-accent-red">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent-red/30 to-accent-blue/30" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-border bg-card p-10 shadow-float sm:p-14">
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr,1fr]">
          <div>
            <h2 className="text-4xl leading-tight sm:text-5xl">
              Ready to begin a{" "}
              <span className="italic text-accent-red">joyful journey?</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Book a campus visit, meet our team and see why families across Erode
              choose Junior Junction.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/contact"
              className="rounded-full bg-accent-red px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              Enquire Now
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:border-accent-blue hover:text-accent-blue"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}