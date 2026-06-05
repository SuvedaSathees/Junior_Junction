import { useState, useEffect, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Calendar,
  CheckCircle2
} from "lucide-react";

// Image Imports
import a1 from "@/assets/a-1.jpg";
import a2 from "@/assets/a-2.jpg";
import a3 from "@/assets/a-3.jpg";
import a4 from "@/assets/a-4.jpg";
import a5 from "@/assets/a-5.jpg";
import a6 from "@/assets/a-6.jpg";
import a7 from "@/assets/a-7.jpg";
import a8 from "@/assets/a-8.jpg";

import c1 from "@/assets/c-1.jpg";
import c2 from "@/assets/c-2.jpg";
import c3 from "@/assets/c-3.jpg";
import c4 from "@/assets/c-4.jpg";
import c5 from "@/assets/c-5.jpg";
import c6 from "@/assets/c-6.jpg";
import c7 from "@/assets/c-7.jpg";
import c8 from "@/assets/c-8.jpg";
import c9 from "@/assets/c-9.jpg";
import c10 from "@/assets/c-10.jpg";

import l1 from "@/assets/l-1.jpg";
import l2 from "@/assets/l-2.jpg";
import l3 from "@/assets/l-3.jpg";
import l4 from "@/assets/l-4.jpg";
import l5 from "@/assets/l-5.jpg";

const categories = ["All", "Activity", "Learn"] as const;

interface GalleryItem {
  src: string;
  label: string;
  category: "Activity" | "Learn" | "Celebration";
  h: "tall" | "short";
  date: string;
  desc: string;
  highlights: string[];
  skills: string[];
}

const items: readonly GalleryItem[] = [
  // Activity (a-1 to a-8)
  { 
    src: a1, 
    label: "Outdoor Activity Fun", 
    category: "Activity", 
    h: "tall", 
    date: "April 2026", 
    desc: "Joyful play sessions where physical skills and teamwork develop naturally through fun interactive group games on our green lawns.",
    highlights: ["Structured outdoor games", "Cooperative play activities", "Gross motor skill exercises"],
    skills: ["Teamwork", "Agility", "Coordination", "Social Skills"]
  },
  { 
    src: a2, 
    label: "Nature & Outdoor Play", 
    category: "Activity", 
    h: "short", 
    date: "May 2026", 
    desc: "Nurturing curiosity and sensory awareness with outdoor playground exploration and healthy fresh air play.",
    highlights: ["Sensory outdoor walks", "Safe playground exploration", "Active physical games"],
    skills: ["Motor Planning", "Coordination", "Confidence", "Nature Exploration"]
  },
  { 
    src: a3, 
    label: "Creative Indoor Playtime", 
    category: "Activity", 
    h: "short", 
    date: "March 2026", 
    desc: "Exploring creative toys, building blocks, and sensory materials in a comfortable, secure indoor play zone.",
    highlights: ["Building block designs", "Interactive group play", "Montessori educational toys"],
    skills: ["Spatial Reasoning", "Creativity", "Fine Motor Skills", "Social Sharing"]
  },
  { 
    src: a4, 
    label: "Healthy Snack & Food Time", 
    category: "Activity", 
    h: "tall", 
    date: "April 2026", 
    desc: "Fostering table manners, healthy eating habits, and self-help skills during our social snack and lunch sessions.",
    highlights: ["Table manners practice", "Healthy nutrition focus", "Independent self-help habits"],
    skills: ["Self-Regulation", "Social Etiquette", "Fine Motor Control", "Healthy Habits"]
  },
  { 
    src: a5, 
    label: "Carrom Board Focus", 
    category: "Activity", 
    h: "short", 
    date: "May 2026", 
    desc: "Building concentration, strategy, and hand-eye coordination with basic tabletop board games and puzzles.",
    highlights: ["Introductory board games", "Concentration exercises", "Taking turns practice"],
    skills: ["Strategic Logic", "Hand-Eye Coordination", "Patience", "Focus"]
  },
  { 
    src: a6, 
    label: "Indoor Ball Games", 
    category: "Activity", 
    h: "tall", 
    date: "February 2026", 
    desc: "Developing agility, cooperative tossing, and color matching with soft indoor ball activities.",
    highlights: ["Soft ball throwing & catching", "Color-coded target games", "Team circle toss"],
    skills: ["Gross Motor Skills", "Agility", "Teamwork", "Reactions"]
  },
  { 
    src: a7, 
    label: "Outer Space Activity", 
    category: "Activity", 
    h: "short", 
    date: "March 2026", 
    desc: "Sparking interest in astronomy with outer space crafts, rocket toys, and galaxy-themed drawing events.",
    highlights: ["Rocket model making", "Planet sensory sorting", "Constellation drawings"],
    skills: ["Astronomy Basics", "Creativity", "Curiosity", "Handcrafting"]
  },
  { 
    src: a8, 
    label: "Indoor Play & Coordination", 
    category: "Activity", 
    h: "tall", 
    date: "April 2026", 
    desc: "Cooperative circle games and active physical exercises inside our air-conditioned playroom.",
    highlights: ["Indoor obstacle course", "Balance beanbag games", "Interactive dance movements"],
    skills: ["Coordination", "Agility", "Balance", "Cooperative Play"]
  },

  // Celebration (c-1 to c-10)
  { 
    src: c1, 
    label: "Sports Day Celebrations", 
    category: "Celebration", 
    h: "tall", 
    date: "December 2025", 
    desc: "Cheering on athletic achievements, fun obstacle races, and proud award ceremonies during our annual physical fitness day.",
    highlights: ["Track and field races", "Obstacle course challenge", "Award and medal presentation"],
    skills: ["Physical Endurance", "Sportsmanship", "Goal Setting", "Agility"]
  },
  { 
    src: c2, 
    label: "Annual Day Stage Show", 
    category: "Celebration", 
    h: "short", 
    date: "January 2026", 
    desc: "Class dance presentations and costume pageants celebrating talent, creativity, and self-expression.",
    highlights: ["Group rhythm choreographies", "Colorful stage costumes", "Class memory presentation"],
    skills: ["Rhythm", "Self-Expression", "Stage Confidence", "Teamwork"]
  },
  { 
    src: c3, 
    label: "Red Day Celebration", 
    category: "Celebration", 
    h: "short", 
    date: "July 2025", 
    desc: "A vibrant themed day dedicated to learning color associations, crafts, and matching activities with red elements.",
    highlights: ["Red objects treasure hunt", "Red paint craft making", "Red apparel theme day"],
    skills: ["Color Recognition", "Sensory Art", "Association Logic", "Involvement"]
  },
  { 
    src: c4, 
    label: "Birthday Celebrations", 
    category: "Celebration", 
    h: "tall", 
    date: "Ongoing", 
    desc: "Spreading joy, kindness, and sharing by celebrating each child's special day with friends.",
    highlights: ["Class birthday songs", "Sharing healthy cake alternatives", "Birthday card handcrafting"],
    skills: ["Social Bonding", "Empathy", "Sharing Habits", "Self-Esteem"]
  },
  { 
    src: c5, 
    label: "Diwali Festive Lights", 
    category: "Celebration", 
    h: "short", 
    date: "November 2025", 
    desc: "Learning about cultural heritage and diversity during the festival of lights with crafts and decorations.",
    highlights: ["Clay diya painting", "Paper lantern decorations", "Diwali story circles"],
    skills: ["Cultural Awareness", "Creative Crafts", "Empathy", "Fine Motor"]
  },
  { 
    src: c6, 
    label: "Diwali Sweet Sharing", 
    category: "Celebration", 
    h: "tall", 
    date: "November 2025", 
    desc: "Learning about festive sharing, values, and community harmony during Diwali gatherings.",
    highlights: ["Sharing festive treats", "Making greeting cards", "Clay craft decoration display"],
    skills: ["Generosity", "Community Bonding", "Social Skills", "Traditions"]
  },
  { 
    src: c7, 
    label: "Pink Day Theme", 
    category: "Celebration", 
    h: "short", 
    date: "September 2025", 
    desc: "Exploring pastel hues, soft textures, and craft activities during our colorful Pink Day theme.",
    highlights: ["Pink color mixing paint", "Pink blossom drawings", "Group flower decoration board"],
    skills: ["Color Blending", "Art Appreciation", "Focus", "Socializing"]
  },
  { 
    src: c8, 
    label: "Annual Sports Day", 
    category: "Celebration", 
    h: "tall", 
    date: "December 2025", 
    desc: "Friendly track races, obstacle course runs, and medal ceremonies building health and sportsmanship.",
    highlights: ["Fun potato races", "Relay coordination sprints", "Every child medal ceremony"],
    skills: ["Physical Stamina", "Sportsmanship", "Goal Setting", "Agility"]
  },
  { 
    src: c9, 
    label: "Annual Day Milestones", 
    category: "Celebration", 
    h: "short", 
    date: "January 2026", 
    desc: "Awarding certificates and celebrating class milestones during the final showcase event.",
    highlights: ["Growth portfolio awards", "Student speech moments", "Parent photo station"],
    skills: ["Self-Esteem", "Reflection", "Transitions Readiness", "Public Speaking"]
  },
  { 
    src: c10, 
    label: "Fancy Dress Event", 
    category: "Celebration", 
    h: "short", 
    date: "October 2025", 
    desc: "Stepping into imaginative roles and speech presentation dressed up as community helpers and animals.",
    highlights: ["Dressing up as doctors & firefighters", "Short character introduction speech", "Class photo book creation"],
    skills: ["Public Speaking", "Role-Playing", "Imagination", "Confidence"]
  },

  // Learn (l-1 to l-5)
  { 
    src: l1, 
    label: "Alphabet Learning Fun", 
    category: "Learn", 
    h: "tall", 
    date: "June 2025", 
    desc: "Tactile letter tracing, phonics lessons, and word building blocks in the early language classes.",
    highlights: ["Sandpaper letter tracing", "Phonics sounds identification", "Early matching card sets"],
    skills: ["Phonics", "Tactile Learning", "Vocabulary", "Reading Readiness"]
  },
  { 
    src: l2, 
    label: "Joyful Group Study", 
    category: "Learn", 
    h: "short", 
    date: "August 2025", 
    desc: "Engaging in interactive learning activities where kids collaborate on worksheets and counting games.",
    highlights: ["Montessori counting blocks", "Interactive worksheet sets", "Peer-to-peer sharing work"],
    skills: ["Collaborative Study", "Counting", "Logical Reasoning", "Social Skills"]
  },
  { 
    src: l3, 
    label: "Teacher Guided Lessons", 
    category: "Learn", 
    h: "short", 
    date: "September 2025", 
    desc: "Direct teacher instruction using visuals, smartboard graphics, and interactive learning tools.",
    highlights: ["Smartboard media learning", "Interactive story charts", "Active Q&A circles"],
    skills: ["Digital Literacy", "Listening Habits", "Active Focus", "Language Skills"]
  },
  { 
    src: l4, 
    label: "Smart Classroom Activities", 
    category: "Learn", 
    h: "tall", 
    date: "July 2025", 
    desc: "Studying key educational concepts in our fully-equipped smart interactive classrooms.",
    highlights: ["Interactive drawing tablet games", "Class visual schedule reviews", "Early science slideshows"],
    skills: ["Smart Focus", "Visual Processing", "Technology Safety", "Curiosity"]
  },
  { 
    src: l5, 
    label: "Creative Teaching Sessions", 
    category: "Learn", 
    h: "short", 
    date: "October 2025", 
    desc: "Exploring creative math concepts and pattern recognition guided by experienced Montessori educators.",
    highlights: ["Pattern sequence puzzles", "Geometric counting towers", "Handmade math counters"],
    skills: ["Mathematical Logic", "Pattern Recognition", "Focus", "Spatial Reasoning"]
  },
] as const;

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Milestones — Junior Junction Play School, Erode" },
      {
        name: "description",
        content: "Explore how learning, celebrations, and play come together to shape preschool minds at Junior Junction, Erode.",
      },
      { property: "og:title", content: "Events & Milestones — Junior Junction Play School" },
      {
        property: "og:description",
        content: "A premium portfolio showcasing preschool events, celebrations, and key learning milestones.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  // Spotlight active index
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  // Filter items
  const filteredItems = useMemo(() => {
    return items.filter((it) => activeFilter === "All" || it.category === activeFilter);
  }, [activeFilter]);

  // Reset spotlight index when filter changes
  useEffect(() => {
    setSpotlightIndex(0);
  }, [activeFilter]);

  const [slideDirection, setSlideDirection] = useState(1);

  const handlePrevSpotlight = () => {
    setSlideDirection(-1);
    setSpotlightIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNextSpotlight = () => {
    setSlideDirection(1);
    setSpotlightIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  // Autoplay slide transitions every 5 seconds (resets when index changes due to manual clicks)
  useEffect(() => {
    if (filteredItems.length <= 1) return;
    const interval = setInterval(() => {
      handleNextSpotlight();
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredItems.length, spotlightIndex]);

  // Slide Animation Variants (Fluid 3D Page Flip effect)
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      rotateY: direction > 0 ? 35 : -35,
      opacity: 0,
      filter: "blur(6px)",
      scale: 0.95
    }),
    center: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      rotateY: direction < 0 ? -35 : 35,
      opacity: 0,
      filter: "blur(6px)",
      scale: 0.95
    })
  };

  return (
    <div className="relative min-h-screen px-4 pb-24 pt-44 bg-[#fafafc] overflow-hidden">
      {/* Background Ambient Radial Glows */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-accent-blue/[0.025] blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-accent-red/[0.02] blur-3xl" />

      {/* Header Section */}
      <section className="mx-auto max-w-7xl relative z-10 text-center">
        <div className="flex flex-col items-center justify-center gap-6 border-b border-neutral-200/60 pb-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-800 text-center">
            Activity , Learning & <span className="text-accent-red font-light italic">Celebrations</span>
          </h1>
        </div>
      </section>

      {/* Main Content Showcase */}
      <div className="mx-auto max-w-7xl mt-12 relative min-h-[500px] z-10">
        <div 
          className="relative w-full rounded-[40px] border border-neutral-200/50 bg-white shadow-card p-6 md:p-12 overflow-hidden min-h-[520px]"
          style={{ perspective: 1200 }}
        >
          
          {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center text-neutral-400">
              <p>No events found.</p>
            </div>
          ) : (
            (() => {
              const activeItem = filteredItems[spotlightIndex];
              return (
                <div className="relative w-full h-full min-h-[460px]">
                  
                  {/* Atmospheric Blurred Backdrop layer (local to container) - animates color shift */}
                  <div className="absolute -inset-12 -z-10 pointer-events-none opacity-[0.08] saturate-150 blur-3xl overflow-hidden rounded-[40px]">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.img 
                        key={activeItem.src}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        src={activeItem.src} 
                        alt="" 
                        className="w-full h-full object-cover" 
                      />
                    </AnimatePresence>
                  </div>

                  {/* Horizontal Slide Transitions */}
                  <AnimatePresence mode="wait" initial={false} custom={slideDirection}>
                    <motion.div
                      key={spotlightIndex}
                      custom={slideDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 220, damping: 25 },
                        rotateY: { type: "spring", stiffness: 220, damping: 25 },
                        opacity: { duration: 0.25 },
                        filter: { duration: 0.2 },
                        scale: { duration: 0.2 }
                      }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10 w-full transform-gpu"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Left side: Information details */}
                      <div className="lg:col-span-5 space-y-6">
                        <motion.div 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05, duration: 0.4 }}
                          className="flex items-center gap-3"
                        >
                          <span className="px-3.5 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-black uppercase tracking-wider border border-accent-blue/5">
                            {activeItem.category}
                          </span>
                          <span className="text-xs font-bold text-neutral-400 flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {activeItem.date}
                          </span>
                        </motion.div>

                        <motion.h2 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.12, duration: 0.4 }}
                          className="text-3xl md:text-5xl font-black text-neutral-800 leading-tight text-left"
                        >
                          {activeItem.label}
                        </motion.h2>

                        <motion.p 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.18, duration: 0.4 }}
                          className="text-sm md:text-base text-neutral-500 leading-relaxed font-light text-left"
                        >
                          {activeItem.desc}
                        </motion.p>

                        {/* Nurtured Skills */}
                        <motion.div 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.24, duration: 0.4 }}
                          className="space-y-2 border-t border-neutral-100 pt-5 text-left"
                        >
                          <h4 className="text-xs font-black uppercase text-neutral-700 tracking-wider">
                            Skills Nurtured
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {activeItem.skills.map((skill, index) => (
                              <motion.span
                                key={skill}
                                initial={{ scale: 0.6, opacity: 0, y: 10 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.25 + index * 0.05 }}
                                className="text-xs bg-neutral-100 text-neutral-700 font-bold px-3 py-1 rounded-full border border-neutral-200/50"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        {/* Slide Navigation and Progress bar */}
                        <motion.div 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                          className="flex items-center justify-between pt-6 border-t border-neutral-100"
                        >
                          {/* Navigation circles */}
                          <div className="flex items-center gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handlePrevSpotlight}
                              className="p-3 border border-neutral-200 hover:border-accent-blue rounded-full bg-white text-neutral-600 hover:text-accent-blue shadow-xs active:scale-95 transition-all cursor-pointer hover:shadow-md"
                              aria-label="Previous slide"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleNextSpotlight}
                              className="p-3 border border-neutral-200 hover:border-accent-blue rounded-full bg-white text-neutral-600 hover:text-accent-blue shadow-xs active:scale-95 transition-all cursor-pointer hover:shadow-md"
                              aria-label="Next slide"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </motion.button>
                          </div>

                          {/* Pagination tracker */}
                          <div className="text-xs font-bold text-neutral-400">
                            <span className="text-neutral-800 font-black">{spotlightIndex + 1}</span>
                            <span className="mx-1">/</span>
                            <span>{filteredItems.length}</span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Right side: High-end 3D tilt picture slate */}
                      <div className="lg:col-span-7 flex justify-center items-center" style={{ perspective: 1200 }}>
                        <motion.div
                          onClick={() => setSelectedItem(activeItem)}
                          whileHover={{ rotateY: -6, rotateX: 4, scale: 1.02, z: 15 }}
                          animate={{
                            boxShadow: [
                              "0 12px 40px -20px rgba(0,0,0,0.15), 0 0 15px rgba(255,215,0,0.18)",
                              "0 20px 48px -15px rgba(0,0,0,0.22), 0 0 30px rgba(255,215,0,0.45)",
                              "0 12px 40px -20px rgba(0,0,0,0.15), 0 0 15px rgba(255,215,0,0.18)"
                            ],
                            borderColor: [
                              "#ffd700",
                              "#ffea70",
                              "#ffd700"
                            ]
                          }}
                          transition={{
                            x: { type: "spring", stiffness: 200, damping: 20 },
                            rotateY: { type: "spring", stiffness: 200, damping: 20 },
                            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                            borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                          }}
                          className="group relative w-full aspect-[4/3] rounded-[32px] overflow-hidden border-[8px] cursor-pointer transform-gpu"
                        >
                          <img
                            src={activeItem.src}
                            alt={activeItem.label}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                          />
                          
                          {/* Animated gold diagonal shimmer sheen sweep */}
                          <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <motion.div
                              animate={{
                                x: ["-150%", "150%"],
                              }}
                              transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                repeatDelay: 2.5,
                                ease: "easeInOut",
                              }}
                              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg]"
                            />
                          </div>

                          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                          <div className="absolute bottom-5 right-5 z-10 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-accent-blue flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-neutral-200/50">
                            <Maximize2 className="h-3 w-3" />
                            <span>Enlarge view</span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                </div>
              );
            })()
          )}

          {/* Slide progress timeline indicator bar at bottom (pulsing gradient) */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-neutral-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((spotlightIndex + 1) / filteredItems.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="h-full bg-gradient-to-r from-accent-blue via-[#60a5fa] to-accent-blue shadow-[0_0_8px_rgba(37,99,235,0.5)]"
            />
          </div>

        </div>
      </div>

      {/* ================= ELEGANT DETAILS PANEL OVERLAY ================= */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-5xl bg-white rounded-[32px] border border-neutral-200/50 shadow-float overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[92vh] md:max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-30 p-2.5 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer active:scale-95"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Left Side Image Panel */}
              <div className="md:col-span-7 bg-[#f6f7f9] p-6 flex flex-col justify-center items-center relative min-h-[300px] md:min-h-0 border-r border-neutral-200/40">
                <div className="relative w-full h-full rounded-[24px] overflow-hidden shadow-card border-4 border-[#ffd700] bg-neutral-200">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-neutral-900/5 mix-blend-multiply" />
                </div>
              </div>

              {/* Right Side Content Drawer */}
              <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue text-[10px] font-extrabold uppercase border border-accent-blue/5">
                      {selectedItem.category}
                    </span>
                    <span className="text-xs font-bold text-neutral-400 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {selectedItem.date}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black text-neutral-800 leading-tight">
                    {selectedItem.label}
                  </h2>

                  <p className="text-sm text-neutral-500 leading-relaxed font-light">
                    {selectedItem.desc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3 pt-4 border-t border-neutral-100">
                    <h4 className="text-xs font-black uppercase text-neutral-700 tracking-wider">
                      Preschool Highlights
                    </h4>
                    <ul className="space-y-2">
                      {selectedItem.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5 text-xs text-neutral-600">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="font-medium leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills tags */}
                  <div className="space-y-3 pt-4 border-t border-neutral-100">
                    <h4 className="text-xs font-black uppercase text-neutral-700 tracking-wider">
                      Developmental Skills Nurtured
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedItem.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] bg-neutral-100 text-neutral-700 font-bold px-3 py-1 rounded-full border border-neutral-200/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer action */}
                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-neutral-400">Junior Junction Play School · Erode</span>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="bg-neutral-800 hover:bg-neutral-900 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all active:scale-95 cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
