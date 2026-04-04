import { motion } from "framer-motion";
import { IMAGES } from "../data";

const pillars = [
  { icon: "https://img.icons8.com/color/48/star--v1.png", label: "Core Skills" },
  { icon: "https://img.icons8.com/color/48/handshake.png", label: "Personal & Social" },
  { icon: "https://img.icons8.com/color/48/brain.png", label: "Cognitive Base" },
  { icon: "https://img.icons8.com/color/48/idea.png", label: "Problem Solving" },
  { icon: "https://img.icons8.com/color/48/chat.png", label: "Communicative Arts" },
  { icon: "https://img.icons8.com/color/48/paint-palette.png", label: "Creative Thinking" },
  { icon: "https://img.icons8.com/color/48/abc.png", label: "Language Base" },
  { icon: "https://img.icons8.com/color/48/tablet.png", label: "Digital Literacy" },
];

export default function Curriculum() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#FFF5F0" }}>
      <div className="wave-top">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,28 1440,35 L1440,0 L0,0 Z" fill="#1A4A5E" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: image + overlaid curriculum card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main classroom photo */}
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              src={IMAGES.classroom}
              alt="Children learning in a Toy & Joy classroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,94,0.7) 0%, transparent 55%)" }} />
          </div>

          {/* Overlaid curriculum badge */}
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl p-4 border border-white/20" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(16px)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">🎓</div>
              <div>
                <div className="text-white font-black text-lg" style={{ fontFamily: "'Fredoka One', cursive" }}>Foundational Core®</div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-widest">Our Unique Core Curriculum · Founded in India</div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {pillars.map((p) => (
                <div key={p.label} className="rounded-xl px-1 py-1.5 text-center" style={{ background: "rgba(255,255,255,0.12)" }}>
                  <img src={p.icon} alt={p.label} className="w-6 h-6 mx-auto" />
                  <div className="text-white/80 text-[9px] font-bold leading-tight mt-0.5">{p.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 text-center border-2 border-orange-100"
          >
            <div className="text-2xl">🏅</div>
            <div className="text-xs font-black text-slate-600">Award Won</div>
          </motion.div>
        </motion.div>

        {/* Right: Text */}
        <div>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-orange-100 text-orange-500 text-sm font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide"
          >
            🎓 Our Approach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl text-slate-800 mb-6 leading-tight"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Learning Through <span className="grad-text">Play & Purpose</span> 🎯
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg leading-relaxed mb-5 font-semibold"
          >
            Toy & Joy is the <strong className="text-slate-700">only preschool chain in India</strong> to use the Foundational Core® curriculum — a research-backed methodology founded in India that has transformed early education globally.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed mb-8 font-semibold"
          >
            Our children <strong className="text-[#FF6B6B]">plan their day, act on it, and reflect</strong> — building independence, creativity, and confidence from day one.
          </motion.p>

          {/* Two image thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="grid grid-cols-2 gap-3 mb-8"
          >
            {[
              { img: IMAGES.painting, label: "🎨 Creative Arts" },
              { img: IMAGES.reading,  label: "📚 Story Time" },
            ].map(({ img, label }) => (
              <div key={label} className="rounded-2xl overflow-hidden shadow-md aspect-video relative group">
                <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: "rgba(26,26,94,0.4)" }} />
                <span className="absolute bottom-2 left-3 text-xs font-black text-white drop-shadow">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-3"
          >
            {[
              { icon: "🧠", label: "Cognitive Base",       color: "#A855F7" },
              { icon: "💬", label: "Language Base",        color: "#5BC8F5" },
              { icon: "🤝", label: "Personal & Social",    color: "#4CAF50" },
              { icon: "🎨", label: "Creative Thinking",    color: "#FF6B6B" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-black text-slate-700 text-sm">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}