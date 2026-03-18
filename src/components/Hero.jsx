import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import InquiryForm from "./InquiryForm";
import { IMAGES } from "../data";

export default function Hero({ onEnquire }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #FFFBF0 0%, #FFF0F5 40%, #F0F8FF 100%)" }}
    >
      {/* Soft blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl" style={{ background: "#FF6B6B" }} />
      <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl" style={{ background: "#5BC8F5" }} />

      {/* Floating emoji deco */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none z-0">
        {[
          { e: "🌟", top: "12%", right: "9%",  fs: 48, cls: "float-a" },
          { e: "🎈", top: "25%", left: "5%",   fs: 40, cls: "float-b" },
          { e: "🦋", bottom:"30%", right:"5%", fs: 36, cls: "float-c" },
          { e: "🌈", top: "55%", left: "3%",   fs: 34, cls: "float-a" },
          { e: "⭐", bottom:"20%", left:"18%", fs: 28, cls: "float-b" },
          { e: "🎨", top: "18%", left: "28%",  fs: 28, cls: "float-c" },
        ].map(({ e, cls, fs, ...pos }) => (
          <span key={e} className={`absolute select-none ${cls}`} style={{ fontSize: fs, ...pos }}>{e}</span>
        ))}
        <div className="absolute top-20 right-1/4 w-14 h-14 rounded-3xl rotate-12 float-a opacity-20" style={{ background: "#FF6B6B" }} />
        <div className="absolute bottom-28 left-1/3 w-10 h-10 rounded-full float-b opacity-20" style={{ background: "#5BC8F5" }} />
      </motion.div>

      {/* Wavy bottom */}
      <div className="wave-bottom" style={{ zIndex: 2 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#FFFBF0" />
        </svg>
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-24 grid lg:grid-cols-2 gap-14 items-center w-full"
      >
        {/* ── Left: Text ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-md border border-green-100"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-black text-slate-700">Admissions Open — 2025–26 🎉</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-[66px] leading-[1.1] mb-6"
            style={{ fontFamily: "'Fredoka One', cursive", color: "#1A1A5E" }}
          >
            Where{" "}
            <span className="grad-text">Little Minds</span>
            <br />
            Bloom &{" "}
            <span className="grad-text-sky">Big Dreams</span>
            <br />
            Begin!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg font-semibold"
          >
            India's most trusted play school — nurturing your child's curiosity, confidence, and character
            through the internationally acclaimed{" "}
            <span className="text-[#FF6B6B] font-black">HighScope®</span>{" "}
            curriculum for 20+ years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={onEnquire}
              className="px-8 py-4 rounded-3xl font-black text-white text-base pulse-glow"
              style={{ background: "linear-gradient(135deg, #FF6B6B, #FF9A3C)", boxShadow: "0 8px 30px rgba(255,107,107,0.45)" }}
            >
              🎒 Book a Free Visit
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              href="tel:+918010000000"
              className="px-8 py-4 rounded-3xl font-black text-[#FF6B6B] text-base bg-white shadow-lg hover:shadow-xl border-2 border-orange-100"
            >
              📞 Call Us Now
            </motion.a>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-2.5"
          >
            {["🏆 Award Winning", "✅ Govt. Approved", "🔒 Safe & Secure", "📱 App-Connected", "🎓 HighScope® Certified"].map((b) => (
              <span key={b} className="text-xs font-bold text-slate-500 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
                {b}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Image collage + form ── */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md lg:justify-self-end"
        >
          {/* Kids image above form */}
          <div className="relative mb-4">
            <div className="rounded-3xl overflow-hidden shadow-xl h-52">
              <img
                src={IMAGES.heroKids}
                alt="Happy children at Footprints Play School"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(to top, rgba(255,107,107,0.55) 0%, transparent 60%)" }} />
            </div>
            {/* Floating stat chips on image */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-xl px-4 py-2 border-2 border-orange-100"
            >
              <div className="text-lg font-black text-slate-800" style={{ fontFamily: "'Fredoka One', cursive" }}>350+</div>
              <div className="text-xs font-bold text-slate-400">Centers 🏫</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-3 -left-3 bg-white rounded-2xl shadow-xl px-4 py-2 border-2 border-orange-100"
            >
              <div className="text-lg font-black text-slate-800" style={{ fontFamily: "'Fredoka One', cursive" }}>4.8 ★</div>
              <div className="text-xs font-bold text-slate-400">Parent Rating</div>
            </motion.div>
          </div>

          {/* Form card */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-[2rem] opacity-20 blur-xl" style={{ background: "linear-gradient(135deg, #FF6B6B, #5BC8F5)" }} />
            <div className="relative bg-white rounded-[2rem] shadow-2xl p-7 border-2 border-white">
              <div className="flex justify-center gap-1 mb-4">
                {["🌟", "🎈", "🌸", "🦋", "⭐"].map((e, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                    className="text-lg"
                  >
                    {e}
                  </motion.span>
                ))}
              </div>
              <div className="text-center mb-5">
                <h3 className="text-xl font-display text-slate-800 mb-0.5" style={{ fontFamily: "'Fredoka One', cursive" }}>
                  Start Your Child's Journey
                </h3>
                <p className="text-xs text-slate-400 font-semibold">Free counselling session included ✨</p>
              </div>
              <InquiryForm />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
