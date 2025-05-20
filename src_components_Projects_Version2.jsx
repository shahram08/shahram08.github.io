import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "پروژه نمونه ۱",
    link: "https://github.com/shahram08/project1",
    desc: "توضیح کوتاه درباره پروژه اول...",
  },
  {
    name: "پروژه نمونه ۲",
    link: "https://github.com/shahram08/project2",
    desc: "توضیح کوتاه درباره پروژه دوم...",
  },
];

export default function Projects() {
  return (
    <section className="max-w-2xl mx-auto my-8">
      <h3 className="text-2xl font-bold mb-4 text-white">پروژه‌ها</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((proj) => (
          <motion.a
            key={proj.name}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition hover:bg-purple-900/60"
            whileHover={{ scale: 1.03 }}
          >
            <h4 className="text-lg font-semibold text-purple-300">{proj.name}</h4>
            <p className="text-gray-300 mt-2">{proj.desc}</p>
            <span className="text-xs text-purple-200 mt-4 inline-block">مشاهده در GitHub →</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}