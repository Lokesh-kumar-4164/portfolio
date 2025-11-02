import React from "react";
import { motion } from "framer-motion";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-[#f9f9ff] to-white dark:from-[#0f1734] dark:to-[#0a0f24]">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
          Achievements
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative p-6 rounded-xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#06B6D4]/10 border border-[#8B5CF6]/20 dark:border-[#06B6D4]/20 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]"
            >
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] opacity-30 blur-xl" />
              <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
              <p className="text-sm opacity-80">{a.description}</p>
              {a.year && <p className="text-xs mt-3 opacity-60">🏆 {a.year}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
