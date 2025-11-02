import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/experience";

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
          Work Experience
        </h2>

        <div className="relative border-l-2 border-gradient-to-b from-[#8B5CF6] to-[#06B6D4] pl-8">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              <div className="absolute -left-4 w-3 h-3 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full" />
              <div className="card p-6">
                <div className="flex items-center justify-between flex-wrap">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-sm opacity-70">{exp.period}</span>
                </div>
                <p className="text-sm opacity-80 mt-1">{exp.company}</p>
                <ul className="mt-4 list-disc pl-5 space-y-1 text-sm opacity-90">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
