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
          <span className="font-semibold">Full-Stack Developer</span> with a
          background in construction engineering and a deep passion for building
          tools that make people’s lives easier. My journey into tech started
          with curiosity, learning how systems work, break, and can be improved,
          and it naturally led me to software development, where I found the
          perfect mix of creativity and logic.
        </p>

        <p className="text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto mt-4">
          I specialize in{" "}
          <span className="font-semibold">
            modern JavaScript, cloud services, and AI-powered applications
          </span>
          , focusing on building scalable, elegant, and human-centered web
          experiences. I’m currently part of{" "}
          <span className="font-semibold">i.c.stars | Chicago</span>, where I’ve
          worked on projects using React, Node.js, Azure, and Power BI —
          creating solutions that connect people, simplify workflows, and grow
          with purpose.
        </p>
      </div>
    </motion.section>
  );
}
