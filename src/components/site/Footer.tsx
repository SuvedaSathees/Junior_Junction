import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import logoImg from "../../assets/logo.jpg";
import fImg from "../../assets/f.jpg";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#EEF7FF] via-[#F4F9FD] to-[#E9F4FF] pt-20 pb-0 overflow-visible mt-12">

      {/* Curve Wave Top Cap */}
      <div className="absolute top-0 left-0 w-full overflow-visible -translate-y-[99%] pointer-events-none select-none z-10">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16 overflow-visible">
          <defs>
            <linearGradient id="footer-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EEF7FF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#EEF7FF" />
            </linearGradient>
            <linearGradient id="neon-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#0F7EBC" stopOpacity="1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Filled Curve Base */}
          <path d="M0,100 C480,20 960,20 1440,100 L1440,101 L0,101 Z" fill="url(#footer-grad)" />

          {/* Animated Glowing Light Sweep Line */}
          <motion.path
            d="M0,100 C480,20 960,20 1440,100"
            fill="none"
            stroke="url(#neon-line-grad)"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{
              strokeDashoffset: [0, -1440],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              strokeDasharray: "200 1240",
              filter: "blur(0.5px) drop-shadow(0 0 6px rgba(15, 126, 188, 0.8))",
            }}
          />

          {/* Subtle static border boundary */}
          <path
            d="M0,100 C480,20 960,20 1440,100"
            fill="none"
            stroke="#0F7EBC"
            strokeOpacity="0.12"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Subtle floating background decorative glow */}
      <motion.div
        className="absolute left-[15%] top-[25%] h-56 w-56 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, -15, 0],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Grid Content */}
      <div className="mx-auto max-w-7xl px-6 grid gap-12 sm:grid-cols-2 md:grid-cols-12 relative z-10">

        {/* Left Brand Segment (5 columns) */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <motion.img
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              src={logoImg}
              alt="Junior Junction Logo"
              className="h-11 w-11 rounded-full object-cover border border-accent-blue/20 bg-card shadow-soft"
            />
            <div className="flex flex-col items-start gap-1">
              <span className="text-xl font-bold tracking-tight text-foreground/90 font-sans leading-none">
                Junior Junction
              </span>
              <svg viewBox="0 0 100 16" className="w-[76px] h-3 text-accent-red mt-0.5">
                <path d="M 6,3 Q 50,13 94,3" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground font-semibold">
            A joyful preschool in Erode where little minds learn, play, and grow with confidence. Providing a premium, modern, and caring environment.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/junior_junction_preschool/", color: "hover:bg-pink-500 hover:shadow-pink-500/25", label: "Instagram" },
              { Icon: Facebook, href: "https://www.facebook.com/p/junior_junction_erode-100089342184125/", color: "hover:bg-blue-600 hover:shadow-blue-600/25", label: "Facebook" },
              { Icon: Youtube, href: "https://www.youtube.com/@juniorjunction2907", color: "hover:bg-red-600 hover:shadow-red-600/25", label: "YouTube" },
              { Icon: MapPin, href: "https://maps.google.com/?q=Junior+Junction+Kids+Care+and+Play+Group+Erode", color: "hover:bg-emerald-600 hover:shadow-emerald-600/25", label: "Google Maps Location" },
            ].map(({ Icon, href, color, label }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.15 }}
                className={`grid h-10 w-10 place-items-center rounded-full bg-white/60 border border-accent-blue/10 text-accent-blue/80 shadow-[0_4px_12px_rgba(15,126,188,0.04)] transition-all duration-300 cursor-pointer ${color} hover:text-white hover:border-transparent`}
                aria-label={label}
              >
                <Icon className="h-4.5 w-4.5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Center-Left: Quick Links (2 columns) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold font-sans uppercase tracking-wider text-accent-blue/80">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm font-semibold">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/events", label: "Events" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-foreground/80 hover:text-accent-blue hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Center-Right: Programs (2 columns) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold font-sans uppercase tracking-wider text-accent-blue/80">
            Programs
          </h4>
          <ul className="space-y-3 text-sm font-semibold text-foreground/80">
            {["Toddler", "Play Group", "Pre-KG", "LKG", "UKG"].map((prog) => (
              <li key={prog}>
                <span className="hover:text-accent-blue hover:translate-x-1 transition-all duration-300 inline-block cursor-default">
                  {prog}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Segment: Contact Details (3 columns) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold font-sans uppercase tracking-wider text-accent-blue/80">
            Contact
          </h4>
          <ul className="space-y-4 text-sm font-semibold text-foreground/80">

            <li className="flex items-center gap-2.5">
              <Phone className="h-4.5 w-4.5 text-accent-blue/80 shrink-0" />
              <a href="tel:+914244208777" className="hover:text-accent-blue transition-colors">
                0424 420 8777
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[19px] w-[19px] text-accent-blue/80 shrink-0"
              >
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
              <a href="https://wa.me/919442895057" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">
                +91 94428 95057
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4.5 w-4.5 text-accent-blue/80 shrink-0" />
              <a href="mailto:juniorjunctionerode@gmail.com" className="hover:text-accent-blue transition-colors">
                juniorjunctionerode@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Segment */}
      <div className="border-t border-accent-blue/10 mt-12 px-6 py-6 text-center text-xs text-muted-foreground font-semibold relative z-10 bg-white/30 backdrop-blur-sm">
        © {new Date().getFullYear()} Junior Junction Play School · Erode. All rights reserved.
      </div>
    </footer>
  );
}