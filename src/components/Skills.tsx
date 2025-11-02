import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-[#f9f9ff] dark:from-[#0a0f24] dark:to-[#0f1734]">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="card p-6 relative overflow-hidden"
            >
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-[#7C3AED]/20 to-[#06B6D4]/20 border border-[#7C3AED]/20 dark:border-[#06B6D4]/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
