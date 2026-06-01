import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Junior Junction Play School, Erode" },
      {
        name: "description",
        content: "Get in touch with Junior Junction Play School in Erode. Call, email or send an enquiry.",
      },
      { property: "og:title", content: "Contact — Junior Junction Play School" },
      { property: "og:description", content: "Reach out to enquire or schedule a campus visit in Erode." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="px-4 pb-16 pt-32">
      <section className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent-red">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-red" /> Contact
          </span>
          <h1 className="mt-4 text-5xl leading-tight sm:text-6xl">
            Let's <span className="italic text-accent-blue">connect</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We'd love to show you around. Send us a note or call to schedule a visit.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr,1.2fr]">
          <div className="space-y-4">
            {[
              { icon: Phone, label: "Call us", value: "+91 98765 43210", color: "text-accent-red" },
              { icon: Mail, label: "Email", value: "hello@juniorjunction.in", color: "text-accent-blue" },
              { icon: MapPin, label: "Visit", value: "Sathy Road, Erode, Tamil Nadu", color: "text-accent-red" },
              { icon: MessageCircle, label: "WhatsApp", value: "+91 98765 43210", color: "text-accent-blue" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <div className={`grid h-11 w-11 place-items-center rounded-2xl bg-foreground/5 ${c.color}`}>
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="text-base font-semibold">{c.value}</div>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/919876543210"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent-blue px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-[32px] border border-border bg-card p-8 shadow-float"
          >
            <h2 className="text-3xl">Send an enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in your details and we'll get back within one working day.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Parent name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" className="sm:col-span-2" />
              <Field label="Child's age" name="age" />
              <Field label="Program" name="program" placeholder="Play Group / Pre-KG / LKG / UKG" />
              <div className="sm:col-span-2">
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent-blue"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent-red px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.01] sm:w-auto"
            >
              {sent ? "Thanks — we'll be in touch!" : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent-blue"
      />
    </div>
  );
}