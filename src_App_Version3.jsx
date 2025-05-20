import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const GITHUB_USERNAME = "shahram08";
const REPO_NAME = "shahram08.github.io";

const getReadmeContent = async () => {
  const res = await fetch(
    `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/main/README.md`
  );
  return await res.text();
};

export default function App() {
  const [readme, setReadme] = useState("");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    getReadmeContent().then(setReadme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-900 via-gray-900 to-gray-800 px-4 py-2 transition-colors">
      <button
        onClick={() => setDark((d) => !d)}
        className="fixed top-4 left-4 z-50 bg-gray-700/50 text-white px-3 py-1 rounded shadow hover:bg-gray-800/70 transition"
        aria-label="تغییر حالت تیره/روشن"
      >
        {dark ? "🌙" : "☀️"}
      </button>
      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Hero readme={readme} />
          <Skills readme={readme} />
          <Projects readme={readme} />
          <Experience readme={readme} />
          <Contact />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}