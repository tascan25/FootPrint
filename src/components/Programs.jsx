import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROGRAMS } from "../data";
import { stagger, childFade } from "../data";
import { useToast } from "./Toast";

const CONTACT_NUMBER = "+91 8979669233";

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const toast = useToast();

  const handleExplore = (program) => {
    toast({
      type: "info",
      duration: 6000,
      message: `For more information about <strong>${program}</strong>, please contact us at <strong>${CONTACT_NUMBER}</strong> 📞 — we'd love to help!`,
    });
  };

  return (
    <section id="programs" className="py-24 relative overflow-hidden" style={{ background: "#FFFBF0" }}>
      <div className="wave-top">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,0 L0,0 Z" fill="#FFFBF0" />
        </svg>
      </div>
      <div className="dots-bg absolute inset-0 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-red-100 text-red-500 text-sm font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide"
          >
            📚 Our Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl text-slate-800 mb-4"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Unlocking Every Child's Unique <span className="grad-text">Superpowers</span> ⭐
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-xl mx-auto text-lg font-semibold"
          >
          Tailored educational pathways that foster individual growth, critical thinking, and a foundational love for lifelong learning from day one.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROGRAMS.map((p) => (
            <motion.div
              key={p.title}
              variants={childFade}
              className="lift rounded-3xl overflow-hidden cursor-pointer group relative bg-white shadow-md hover:shadow-xl border-2"
              style={{ borderColor: `${p.color}22` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${p.color}DD 0%, ${p.color}22 50%, transparent 80%)` }}
                />
                <span
                  className="absolute top-3 right-3 text-xs font-black px-3 py-1.5 rounded-full text-white shadow-lg"
                  style={{ background: p.color }}
                >
                  {p.age}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl shadow-md flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.92)" }}
                  >
                    {p.icon}
                  </div>
                  <h3
                    className="text-xl text-white drop-shadow-md"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    {p.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-slate-500 text-sm leading-relaxed font-semibold mb-5">{p.desc}</p>
                <button
                  onClick={() => handleExplore(p.title)}
                  className="flex items-center gap-2 font-black text-sm transition-all hover:gap-3"
                  style={{ color: p.color }}
                >
                  <span>Explore Program</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </button>
              </div>

              <div
                className="h-1 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: p.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
