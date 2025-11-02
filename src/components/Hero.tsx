import React from 'react';
import { motion } from 'framer-motion';

// --- Animation Variants (Kept from before, these are for the text/card) ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  transition: { ease: 'easeOut', duration: 0.3 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { 
      ease: 'easeOut', 
      duration: 0.5,
      delay: 0.3 
    }
  },
};

// --- NEW *Simplified* Blob Animation ---
// This variant will be shared by both blobs
const blobVariant = {
  animate: (i: number) => ({ // 'i' is the custom prop (0 or 1)
    d: [ // Shape morphing
      'M300,300 C320,180 480,180 520,300 C560,420 340,420 300,300 Z',
      'M280,300 C350,160 500,160 550,300 C580,420 320,420 280,300 Z',
      'M300,300 C320,180 480,180 520,300 C560,420 340,420 300,300 Z', // Loop back
    ],
    rotate: [0, i % 2 === 0 ? 30 : -20, 0], // Gentle rotation
    scale: [1, 1.05, 1], // Gentle "breathe"
    transition: {
      d: {
        duration: 15 + (i * 5), // Blob 1 = 15s, Blob 2 = 20s
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
      rotate: {
        duration: 25 + (i * 5), // Blob 1 = 25s, Blob 2 = 30s
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
      scale: {
        duration: 12 + (i * 3), // Blob 1 = 12s, Blob 2 = 15s
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }
    },
  }),
};


export default function Hero({setContactOpen}) {
  return (
    <section className="relative overflow-hidden py-20 min-h-screen flex items-center">
      
      {/* --- Background Blobs (Simplified!) --- */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-70">
        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            {/* Back to ONE gradient! */}
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#7c3aed" stopOpacity="0.8" />
              <stop offset="1" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
            <filter id="f1">
              {/* Reduced blur a bit for more defined color */}
              <feGaussianBlur stdDeviation="25" />
            </filter>
          </defs>
          
          {/* Blob 1 (Large, more centered) */}
          <motion.path
            d="M300,300 C320,180 480,180 520,300 C560,420 340,420 300,300 Z"
            fill="url(#g1)"
            filter="url(#f1)"
            custom={0} // Pass 0 to the variant
            animate="animate"
            variants={blobVariant}
          />
          
          {/* Blob 2 (Smaller, in a corner) */}
          <motion.path
            d="M100,100 C120,50 180,50 220,100 C260,150 140,150 100,100 Z"
            fill="url(#g1)"
            filter="url(#f1)"
            custom={1} // Pass 1 to the variant
            animate="animate"
            variants={blobVariant}
            // Start it at a different scale/opacity
            style={{ 
              scale: 0.8,
              opacity: 0.8,
              transformOrigin: '150px 100px' // Set transform origin for rotation
            }}
          />
        </svg>
      </div>

      {/* --- Foreground Content (No Changes) --- */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* --- LEFT SIDE: Animated Text --- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white"
            >
             
              Crafting{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
                impactful digital experiences with code, creativity, and purpose.
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300"
            >
              I build. I learn. I innovate.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex gap-4">
              <motion.button
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-[#7C3AED] text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all"
              >
                See projects
              </motion.button>
              
              <motion.a
                onClick={() => setContactOpen(prev => !prev)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg border border-slate-700 dark:border-slate-300 font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-700 hover:text-white dark:hover:bg-slate-300 dark:hover:text-slate-900 transition-colors"
              >
                Contact
              </motion.a>
            </motion.div>
          </motion.div>

          {/* --- RIGHT SIDE: Animated Card --- */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="show"
            className="mx-auto w-full max-w-md"
          >
            <div className="rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-xl p-6 ring-1 ring-black/5">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="rounded-full w-20 h-20 bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] shadow-lg"
                />
                <div>
                  <div className="text-lg font-semibold dark:text-white">Lokesh kumar Giddaluru</div>
                  <div className="text-sm opacity-70 dark:text-slate-300">
                    3rd year Computer Science student
                  </div>
                </div>
              </div>

              <motion.div 
                className="mt-4"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                <p className="text-sm opacity-80 dark:text-slate-300">Orbiting highlights</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {['Web dev', 'Machine Learning', 'DSA'].map((tag) => (
                    <motion.div
                      key={tag}
                      variants={fadeInUp}
                      className="text-xs text-center px-2 py-2 rounded-lg bg-white/70 dark:bg-slate-800/70 font-medium"
                    >
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}