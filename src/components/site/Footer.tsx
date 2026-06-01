import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-red text-primary-foreground font-bold">
              JJ
            </span>
            <span className="text-lg font-semibold">Junior Junction</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A joyful preschool in Erode where little minds learn, play and grow with confidence.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground/70 transition-colors hover:text-accent-red"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-foreground/80 underline-anim">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">
            Programs
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>Play Group</li>
            <li>Pre-KG</li>
            <li>LKG</li>
            <li>UKG</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-accent-red" />
              Sathy Road, Erode, Tamil Nadu
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent-blue" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent-blue" /> hello@juniorjunction.in
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 px-6 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Junior Junction Play School · Erode. All rights reserved.
      </div>
    </footer>
  );
}