import React, { useState } from 'react';
// We need AnimatePresence to make the button fade in/out smoothly
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types/project';

// I'm assuming your Project type might have a 'link'
// If not, the button can just be for show!
// type Project = {
//   id: string;
//   title: string;
//   description: string;
//   coverColor: string;
//   tags: string[];
//   link?: string;
// };

export default function ProjectCard({ project }: { project: Project }) {
  // Renamed for clarity!
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      layout // This will smoothly animate the card size change!
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      // Let's make it "pop" on hover! 🚀
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{
        layout: { duration: 0.3, ease: 'easeOut' },
        y: { duration: 0.2, ease: 'easeOut' },
        scale: { duration: 0.2, ease: 'easeOut' },
      }}
      // Added a slightly stronger shadow that gets bigger on hover
      className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-900"
      aria-labelledby={`project-${project.id}`}
    >
      {/* This part is fine */}
      <div style={{ background: project.coverColor }} className="h-40 w-full" />

      {/* Content Area */}
      <div className="p-4">
        {/* Made the title bigger and bolder for better hierarchy */}
        <h3
          id={`project-${project.id}`}
          className="font-bold text-lg text-slate-800 dark:text-slate-100"
        >
          {project.title}
        </h3>
        
        {/* Adjusted text colors for better readability */}
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* --- Improved Tag Styling --- */}
        <div className="mt-4 flex gap-2 flex-wrap">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium dark:bg-blue-900 dark:text-blue-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* --- HERE'S THE MAGIC! --- */}
        {/* This will animate the button's appearance */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="mt-4"
            >
              <a
                href={project.url || '#'} // Assuming project.link exists!
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 rounded-lg font-semibold text-sm transition-colors hover:bg-slate-700 dark:hover:bg-slate-100"
              >
                View Project <span>&rarr;</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}