import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import video from '../assets/video/video.mp4'

const VIDEO_ID = "_6MlfeJ-Q4o";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #FFFBF0 0%, #FFF0F5 100%)" }}
    >
      {/* Wavy top */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,18 1440,35 L1440,0 L0,0 Z" fill="#F0F8FF" />
        </svg>
      </div>

      {/* Floating deco */}
      <span className="absolute top-16 left-10 text-4xl opacity-10 float-a select-none">🎠</span>
      <span className="absolute bottom-16 right-10 text-4xl opacity-10 float-b select-none">🧸</span>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block bg-pink-100 text-pink-600 text-sm font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide"
          >
            🐾 Welcome to Our World
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl text-slate-800 mb-4"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Welcome to{" "}
            <span className="grad-text">Toy & Joy Playzone!</span> 🎉
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
            className="text-slate-500 max-w-lg mx-auto text-lg font-semibold"
          >
            A magical place where little ones learn, laugh, and grow — take a peek inside our world of wonder!
          </motion.p>
        </div>

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Glow ring */}
          <div
            className="absolute -inset-3 rounded-[2.5rem] opacity-30 blur-xl"
            style={{ background: "linear-gradient(135deg, #FF6B6B, #FF9A3C, #5BC8F5)" }}
          />

          {/* Video frame */}
          <div
            className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
            style={{ aspectRatio: "16/9" }}
          >
            {!playing ? (
              <div className="absolute inset-0">
                <img
                  src={video}
                  alt="Welcome to Toy and Joy Playzone"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(26,26,94,0.75) 0%, rgba(26,26,94,0.2) 60%, transparent 100%)" }}
                />

                {/* Watermark text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div
                    className="text-center select-none"
                    style={{
                      fontFamily: "'Fredoka One', cursive",
                      fontSize: "clamp(2.5rem, 8vw, 6rem)",
                      color: "rgba(255,255,255,0.12)",
                      lineHeight: 1,
                      letterSpacing: "0.04em",
                    }}
                  >
                    <div>TOY AND</div>
                    <div style={{ color: "rgba(255,107,107,0.18)" }}>JOY</div>
                  </div>
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                  <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setPlaying(true)}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-2xl"
                    style={{ background: "linear-gradient(135deg, #FF6B6B, #FF9A3C)" }}
                  >
                    <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: "#FF6B6B" }} />
                    <span className="absolute -inset-3 rounded-full border-2 border-white/20 animate-pulse" />
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="ml-2">
                      <path d="M8 6L26 16L8 26V6Z" fill="white" />
                    </svg>
                  </motion.button>

                  <div className="text-center">
                    <p className="text-white font-black text-lg drop-shadow" style={{ fontFamily: "'Fredoka One', cursive" }}>
                      Take a Tour 🎠
                    </p>
                    <p className="text-white/70 text-sm font-semibold">3 min 20 sec</p>
                  </div>
                </div>

                {/* Corner logo badge */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur rounded-2xl px-4 py-2 shadow-lg">
                  <span className="text-sm font-black" style={{ fontFamily: "'Fredoka One', cursive", color: "#1A1A5E" }}>
                    🐾 Toy and Joy
                  </span>
                  <div className="text-[10px] font-bold text-orange-500 -mt-0.5">Pre-School & Playzone</div>
                </div>
              </div>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={video}
                title="Welcome to Toy and Joy Playzone"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </motion.div>

        {/* Stat pills below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {[
            { icon: "👨‍👩‍👧", label: "1.5K+ happy families" },
            { icon: "⭐",       label: "4.8 average parent rating" },
            { icon: "📍",       label: "Raj Nagar Extension" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-white rounded-2xl px-5 py-3 shadow-md border border-slate-100 text-sm font-black text-slate-700"
            >
              <span className="text-xl">{icon}</span>
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}