import React from "react";
import { motion } from "framer-motion";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
          Education
        </h2>

        <div className="relative border-l-2 border-gradient-to-b from-[#8B5CF6] to-[#06B6D4] pl-8">
          {education.map((edu, i) => (
            <motion.article
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              <div className="absolute -left-4 w-3 h-3 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full" />
              <div className="card p-6">
                <div className="flex items-center justify-between flex-wrap">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <span className="text-sm opacity-70">{edu.period}</span>
                </div>
                <p className="text-sm opacity-80 mt-1">{edu.institution}</p>
                {edu.details && (
                  <ul className="mt-4 list-disc pl-5 space-y-1 text-sm opacity-90">
                    {edu.details.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
