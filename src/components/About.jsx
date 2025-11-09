import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-zinc-50 text-slate-800 py-20 px-6 md:px-12 border-t border-zinc-200"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-display font-bold mb-6 text-emerald-600">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto">
          I’m Bonny Makaniankhondo — a{" "}
          <span className="font-semibold">Full-Stack Developer</span>
          with a passion for crafting scalable, elegant web applications using
          <span className="font-semibold">
            {" "}
            modern JavaScript, cloud services, and AI tools
          </span>
          . I focus on building systems that connect people, simplify workflows,
          and grow with purpose.
        </p>
      </div>
    </motion.section>
  );
}
