import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-display font-bold mb-4"
      >
        Bonny Makaniankhondo
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="text-xl md:text-2xl font-light text-slate-300 max-w-2xl mb-4"
      >
        Full-Stack Software Engineer building modern, data-driven web
        experiences that connect people, simplify complexity, and scale with
        purpose.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="text-lg text-emerald-400 font-medium mb-10"
      >
        Currently building tools at i.c.stars | Chicago
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-all shadow-lg"
      >
        View Projects
      </motion.a>
    </section>
  );
}
