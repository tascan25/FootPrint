import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" style={{ background: "#FFFBF0" }}>
      <div className="wave-top">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,35 C360,0 720,70 1080,35 C1260,18 1380,52 1440,35 L1440,0 L0,0 Z" fill="#FFF5F0" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-yellow-100 text-yellow-600 text-sm font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide"
          >
            💬 Parent Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl text-slate-800"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            What Parents Say{" "}
            <span className="grad-text">About Us</span> 💛
          </motion.h2>
        </div>

        {/* Main testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.45 }}
            className="bg-white rounded-3xl p-10 shadow-2xl shadow-orange-100/40 mb-8 text-center relative border-2 border-orange-50"
          >
            {/* Quote mark */}
            <div
              className="absolute top-6 left-8 text-7xl leading-none select-none"
              style={{ color: "#FF6B6B", opacity: 0.12, fontFamily: "Georgia, serif" }}
            >
              "
            </div>

            <div className="text-6xl mb-4">{TESTIMONIALS[active].avatar}</div>
            <p className="text-xl text-slate-600 leading-relaxed mb-7 max-w-2xl mx-auto font-semibold">
              "{TESTIMONIALS[active].text}"
            </p>
            <div
              className="text-xl text-slate-800 mb-1"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              {TESTIMONIALS[active].name}
            </div>
            <div className="text-sm font-bold text-orange-400 mb-3">{TESTIMONIALS[active].role}</div>
            <div className="flex justify-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot nav */}
        <div className="flex justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 32 : 10,
                height: 10,
                background: i === active ? "#FF6B6B" : "#FFCFCF",
              }}
            />
          ))}
        </div>

        {/* Mini cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -4 }}
              onClick={() => setActive(i)}
              className={`rounded-2xl p-4 text-left transition-all border-2 ${
                active === i
                  ? "border-[#FF6B6B] bg-red-50 shadow-md"
                  : "border-slate-100 bg-white hover:border-orange-200"
              }`}
            >
              <div className="text-2xl mb-2">{t.avatar}</div>
              <div className="font-black text-sm text-slate-800">{t.name}</div>
              <div className="text-xs font-semibold text-slate-400">{t.role}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
