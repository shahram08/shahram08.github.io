import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "توسعه‌دهنده فرانت‌اند",
    company: "شرکت ایکس",
    date: "1402 - اکنون",
    desc: "توضیح مختصر درباره وظایف و دستاوردها...",
  },
  {
    role: "برنامه‌نویس جاوااسکریپت",
    company: "شرکت وای",
    date: "1399 - 1402",
    desc: "توضیح مختصر درباره سابقه شغلی...",
  },
];

export default function Experience() {
  return (
    <section className="max-w-2xl mx-auto my-8">
      <h3 className="text-2xl font-bold mb-4 text-white">سوابق شغلی</h3>
      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 rounded-lg p-4 shadow"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-purple-300">{exp.role}</span>
              <span className="text-xs text-gray-400">{exp.date}</span>
            </div>
            <div className="text-gray-300">{exp.company}</div>
            <div className="text-sm text-gray-400 mt-2">{exp.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}