import React from "react";
import { motion } from "framer-motion";
import resumePDF from "../assets/images/resume..pdf"; // ← put your latest resume here

export default function Resume() {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white text-slate-800 py-20 px-6 md:px-12 border-t border-zinc-200"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-display font-bold mb-6 text-emerald-600">
          Resume
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Download my latest resume for a detailed look at my technical stack,
          project experience, and professional background.
        </p>
        <a
          href={resumePDF}
          download
          className="inline-block px-8 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-all shadow-lg"
        >
          Download Resume (PDF)
        </a>
      </div>
    </motion.section>
  );
}
