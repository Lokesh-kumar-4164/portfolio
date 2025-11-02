import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

interface ContactPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactPopup({ open, onClose }: ContactPopupProps) {
  // Handle ESC key close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-[90%] max-w-sm rounded-2xl p-8 text-center bg-gradient-to-br from-[#8B5CF6]/20 to-[#06B6D4]/20 border border-[#8B5CF6]/20 backdrop-blur-lg shadow-[0_0_35px_rgba(139,92,246,0.3)]">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-white/70 hover:text-white"
                aria-label="Close popup"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
                Let’s Connect
              </h2>

              <p className="text-sm opacity-80 mb-6">
                Reach out through any of the platforms below 👇
              </p>

              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/lokesh-kumar-giddaluru-0785a62a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#0A66C2] hover:scale-110 transition-transform"
                >
                  <FaLinkedin size={32} />
                </a>

                <a
                  href="https://github.com/Lokesh-kumar-4164"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-white hover:scale-110 transition-transform"
                >
                  <FaGithub size={32} />
                </a>

                <a
                  href="mailto:lokeshkumarg4164@gmail.com"
                  aria-label="Email"
                  className="text-[#EA4335] hover:scale-110 transition-transform"
                >
                  <FaEnvelope size={32} />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
