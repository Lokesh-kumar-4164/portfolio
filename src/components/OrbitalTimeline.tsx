import React, { useState } from 'react';
// We need AnimatePresence and motion!
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects'; // Assuming projects has tags and url
import type { Project } from '../types/project';

// --- Node (Planet) Component ---
// Simplified! It doesn't need to know its position.
// It's just the "planet" that lives on the "orbit" path.
function Node({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  return (
    <motion.button
      onClick={() => onOpen(p)}
      whileHover={{ scale: 1.2, zIndex: 10 }} // Pop on hover!
      // Positioned at the 3-o'clock (right) position of its parent orbit path
      className="absolute top-1/2 -right-7 -translate-y-1/2 w-14 h-14 rounded-full bg-white dark:bg-slate-900 shadow-lg"
      aria-label={`Open ${p.title}`}
    >
      {/* The colorful inner circle */}
      <div
        style={{ background: p.coverColor }}
        className="w-full h-full rounded-full scale-[0.9] ring-2 ring-white/50"
      />
    </motion.button>
  );
}

// --- Orbital Timeline Component ---
export default function OrbitalTimeline() {
  const [open, setOpen] = useState<Project | null>(null);

  // --- THIS IS THE ORBIT LOGIC ---
  // Define our orbit "lanes". [radius, duration]
  const orbits = [
    [110, 20], // 110px radius, 20s duration
    [170, 30], // 170px radius, 30s duration
    [230, 40], // 230px radius, 40s duration
  ];
  // -------------------------------

  return (
    // Added overflow-hidden to the section to contain the side panel
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My Project Orbit
        </h2>
        
        {/* Made the container taller and wider to fit the orbits */}
        <div className="relative w-full h-[500px] flex items-center justify-center">
          
          {/* The "Sun" Core */}
          <div className="relative w-28 h-28 rounded-full bg-yellow-400 dark:bg-yellow-500 grid place-items-center shadow-2xl shadow-yellow-500/50 z-10">
            <span className="font-bold text-slate-900 text-lg">CORE</span>
          </div>

          {/* --- The Orbits --- */}
          {projects.map((p, i) => {
            const [radius, duration] = orbits[i % orbits.length];
            // Stagger the start times so they don't all start at 3 o'clock
            const delay = -(duration * (i / projects.length));

            return (
              // This is the "Orbit Path"
              <motion.div
                key={p.id}
                className="absolute rounded-full border border-dashed border-slate-300 dark:border-slate-700"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                }}
                // THIS is the animation!
                animate={{ rotate: 360 }}
                transition={{
                  duration,
                  delay,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {/* The "Planet" lives on the path */}
                <Node p={p} onOpen={() => setOpen(p)} />
              </motion.div>
            );
          })}
          {/* ------------------- */}

          {/* --- The Animated Side Panel --- */}
          <AnimatePresence>
            {open && (
              <motion.aside
                // `layout` helps it animate smoothly if content changes
                layout
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ ease: 'easeOut', duration: 0.3 }}
                // Positioned on the right, but relative to the orbit container
                className="absolute right-0 top-1/2 -translate-y-1/2 w-96 rounded-lg bg-white dark:bg-slate-800 shadow-2xl z-20 overflow-hidden"
              >
                {/* Colorful Header Bar */}
                <div style={{ background: open.coverColor }} className="h-2 w-full" />

                {/* Close Button */}
                <button
                  onClick={() => setOpen(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 grid place-items-center transition-colors"
                  aria-label="Close project details"
                >
                  ✕
                </button>

                {/* Panel Content */}
                <div className="p-6 pt-8">
                  <h3 className="text-xl font-bold">{open.title}</h3>
                  <p className="mt-2 text-sm opacity-80">{open.description}</p>
                  
                  {/* Added tags like we had on the card */}
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {open.tags.map(t => (
                      <span key={t} className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium dark:bg-blue-900 dark:text-blue-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Better Button */}
                  <div className="mt-6 flex">
                    <a
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 font-semibold text-sm transition-colors hover:bg-slate-700 dark:hover:bg-slate-100"
                      href={open.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>
          {/* ------------------- */}
          
        </div>
      </div>
    </section>
  );
}