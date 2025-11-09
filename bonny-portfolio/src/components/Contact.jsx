import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thanks ${form.name}! I’ll get back to you soon.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-zinc-50 text-slate-800 py-20 px-6 md:px-12 border-t border-zinc-200"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-display font-bold mb-6 text-emerald-600">
          Get in Touch
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Have a question, collaboration idea, or just want to connect? Drop a
          message below — I’d love to hear from you.
        </p>

        <form
          action="https://formspree.io/f/mnnlazrk"
          method="POST"
          className="grid gap-6 sm:grid-cols-2 bg-white rounded-xl shadow-md p-8 text-left"
        >
          <div className="sm:col-span-1">
            <label className="block mb-2 font-semibold text-slate-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block mb-2 font-semibold text-slate-700">
              Email
            </label>
            <input
              type="email"
              name="_replyto"
              required
              className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-2 font-semibold text-slate-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
            />
          </div>

          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-all shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
