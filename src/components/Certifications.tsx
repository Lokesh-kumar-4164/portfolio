import React from "react";
import { motion } from "framer-motion";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-white to-[#f9f9ff] dark:from-[#0a0f24] dark:to-[#0f1734]"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
          Certifications
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <motion.a
              href={cert.link || "#"}
              key={cert.id}
              target={cert.link ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative block p-6 rounded-xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#06B6D4]/10 border border-[#8B5CF6]/20 dark:border-[#06B6D4]/20 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition"
            >
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] opacity-30 blur-xl" />
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm opacity-80">{cert.issuer}</p>
              <p className="text-xs opacity-60 mt-2">{cert.year}</p>
              {cert.link && (
                <span className="inline-block mt-3 text-sm text-[#06B6D4] hover:underline">
                  View Certificate →
                </span>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
