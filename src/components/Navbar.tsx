import React, { useState } from 'react';
// We need motion and AnimatePresence for the mobile menu!
import { motion, AnimatePresence } from 'framer-motion';

// --- Mobile Menu Button (Hamburger/X) ---
// This is a common pattern for an animated hamburger icon
function MobileMenuButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    openTop: { rotate: 45, y: 6 },
    openBottom: { rotate: -45, y: -6 },
  };
  const lineProps = "h-0.5 w-6 bg-slate-900 dark:bg-white transition-colors";

  return (
    <button
      onClick={onClick}
      className="md:hidden z-50 flex flex-col gap-1.5"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <motion.span
        className={lineProps}
        variants={lineVariants}
        animate={isOpen ? 'openTop' : 'closed'}
      />
      <motion.span
        className={lineProps}
        // This line just fades out
        animate={{ opacity: isOpen ? 0 : 1 }} 
        transition={{ duration: 0.1 }}
      />
      <motion.span
        className={lineProps}
        variants={lineVariants}
        animate={isOpen ? 'openBottom' : 'closed'}
      />
    </button>
  );
}

// --- Main Navbar Component ---
export default function Navbar({setContactOpen}) {
  const [isOpen, setIsOpen] = useState(false);

  // Animation for the whole navbar sliding in
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.4, ease: 'easeOut' }
    },
  };
  
  // Stagger variants for mobile menu links
  const mobileNavVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      // Animate the whole bar on load!
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="sticky top-0 z-40 backdrop-blur-sm bg-white/50 dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="container mx-auto px-6 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo (now a link!) */}
        <a href="#" className="font-bold text-lg text-slate-900 dark:text-white">
          Giddaluru Lokesh kumar 
        </a>

        {/* --- Desktop Nav (hidden on mobile) --- */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            href="#projects"
          >
            Projects
          </a>
          
          {/* CTA Button! */}
          <a
            className="text-sm font-medium px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 transition-colors"
            onClick={() => setContactOpen(true)}
          >
            Get in Touch
          </a>
        </nav>

        {/* --- Mobile Menu Button (visible on mobile) --- */}
        <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* --- Animated Mobile Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            // This is the full-screen dropdown
            className="absolute top-full left-0 right-0 h-screen-dynamic bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg md:hidden flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
            variants={mobileNavVariants} // Apply stagger parent
          >
            <motion.a variants={mobileLinkVariants} onClick={() => setIsOpen(false)} className="text-2xl font-semibold" href="#projects">
              Projects
            </motion.a>
            <motion.a variants={mobileLinkVariants} onClick={() => setIsOpen(false)} className="text-2xl font-semibold" href="#about">
              About
            </motion.a>
            <motion.a variants={mobileLinkVariants} onClick={() => setContactOpen(prev => !prev)} className="text-2xl font-semibold" href="#contact">
              Contact
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}