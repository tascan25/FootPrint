import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FEATURES } from "../data";

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1A1A5E 0%, #2D2D8E 50%, #1A4A5E 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full opacity-5 blur-3xl" style={{ background: "#FF6B6B" }} />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: "#5BC8F5" }} />
      <div className="absolute inset-0 dots-bg opacity-10" />

      {/* Wavy top */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,35 C360,0 720,70 1080,35 C1260,18 1380,52 1440,35 L1440,0 L0,0 Z" fill="#F5FEFF" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white/10 text-white text-sm font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide border border-white/20"
          >
            ✨ Why Toy and Joy Playzone
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl text-white mb-4"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Everything Your Child{" "}
            <span style={{ color: "#FFD23F" }}>Deserves</span>{" "}
            & More 🌟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-blue-200 max-w-xl mx-auto text-lg font-semibold"
          >
            We've thought of everything — so you can drop off with complete peace of mind.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-3xl p-7 cursor-default transition-all"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "2px solid rgba(255,255,255,0.1)",
              }}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-lg"
                style={{ background: `${f.color}30`, border: `2px solid ${f.color}40` }}
              >
                {f.icon}
              </motion.div>
              <h3
                className="text-xl text-white mb-3"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                {f.title}
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed font-semibold">{f.desc}</p>

              {/* Hover glow bottom */}
              <div
                className="mt-5 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
