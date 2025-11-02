import React from 'react';
// We need motion here!
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

// --- Animation Variants ---

// 1. The "Parent" (the grid itself)
// This variant will "orchestrate" the children
const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // This is the magic!
      // It makes each child animate 0.15s after the previous one
      staggerChildren: 0.15,
    },
  },
};

// 2. The "Child" (each card)
// This defines how each card will animate
const cardVariants = {
  // Start 50px down and invisible
  hidden: { opacity: 0, y: 50 },
  // Animate to 0px (original position) and fully visible
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

// ---------------------------

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-20 container mx-auto px-6 lg:px-20">
      {/* Made the title bigger and centered it! */}
      <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
        My Projects
      </h2>
      
      {/* This <div> is now a motion.div! */}
      <motion.div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        // Pass the variants
        variants={gridVariants}
        // Start in the "hidden" state
        initial="hidden"
        // Animate to "show" when it enters the viewport
        whileInView="show"
        // Only run the animation once, trigger when 20% is visible
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((p) => (
          // Our ProjectCard is already a <motion.article>,
          // so we can just pass the child variants directly to it!
          <ProjectCard 
            key={p.id} 
            project={p} 
            // variants={cardVariants} 
          />
        ))}
      </motion.div>
    </section>
  );
}