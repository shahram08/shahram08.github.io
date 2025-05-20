import React from "react";
import { motion } from "framer-motion";

export default function Hero({ readme }) {
  const name = "شهرام محمدی";
  const title = "توسعه‌دهنده فرانت‌اند";
  const intro = "سایت رزومه شخصی با React و TailwindCSS";

  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-[50vh] text-center py-12"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">{name}</h1>
      <h2 className="text-xl md:text-2xl font-semibold text-purple-300 mb-4">{title}</h2>
      <p className="max-w-xl text-gray-300">{intro}</p>
    </motion.section>
  );
}