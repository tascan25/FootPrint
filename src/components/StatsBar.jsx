import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "../data";

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-10 relative z-10 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1A1A5E 0%, #2D2D8E 100%)" }}
    >
      {/* Playful dots */}
      <div className="absolute inset-0 dots-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-center py-4 group"
          >
            <motion.div
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl mb-2"
            >
              {s.icon}
            </motion.div>
            <div
              className="text-4xl font-display text-white mb-1"
              style={{ fontFamily: "'Fredoka One', cursive", textShadow: "0 2px 10px rgba(255,107,107,0.4)" }}
            >
              {s.value}
            </div>
            <div className="text-sm font-bold text-blue-200">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
