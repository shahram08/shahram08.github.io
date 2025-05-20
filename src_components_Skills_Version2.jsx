import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TailwindCSS", icon: "🎨" },
  { name: "JavaScript", icon: "🟨" },
  { name: "HTML", icon: "🟧" },
  { name: "CSS", icon: "🟦" },
  { name: "Git", icon: "🔧" },
];

export default function Skills() {
  return (
    <section className="max-w-2xl mx-auto my-8">
      <h3 className="text-2xl font-bold mb-4 text-white">مهارت‌ها</h3>
      <motion.div className="flex flex-wrap gap-4 justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="bg-gray-800 rounded-lg px-4 py-2 flex items-center gap-2 shadow hover:scale-105 transition"
            whileHover={{ scale: 1.1 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-white">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}