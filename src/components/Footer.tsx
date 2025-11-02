import React from 'react';
import { motion } from 'framer-motion';

// --- Placeholder Icons ---
// I'm putting these simple SVGs here for you. 
// In a real app, you might use a library like react-icons.

const GithubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    // Animate the footer in when it's scrolled to
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      className="py-10 mt-20 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Made this a responsive flex container */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright text (stays on the left) */}
          <div className="text-sm text-slate-500 dark:text-slate-400">
            &copy; Lokesh Kumar
          </div>

          {/* Social & Nav Links (goes on the right) */}
          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Projects
            </a>
            
            {/* --- Socials --- */}
            <a
              href="https://github.com/Lokesh-kumar-4164" // <-- TODO: Add your link
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/lokesh-kumar-giddaluru-0785a62a4/" // <-- TODO: Add your link
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            
          </div>
          
        </div>
      </div>
    </motion.footer>
  );
}