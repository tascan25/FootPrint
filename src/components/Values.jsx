import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { KEYWORDS } from "../data";

export default function Values() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="values" className="py-24 relative overflow-hidden" style={{ background: "#F5FEFF" }}>
      {/* Wavy top */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,28 1440,35 L1440,0 L0,0 Z" fill="#FFFBF0" />
        </svg>
      </div>

      {/* Spinning star deco */}
      <div className="absolute top-16 right-16 text-5xl opacity-10 spin-slow select-none">⭐</div>
      <div className="absolute bottom-16 left-10 text-4xl opacity-10 spin-slow select-none" style={{ animationDirection: "reverse" }}>🌟</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-sky-100 text-sky-600 text-sm font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide"
          >
            💎 Discover the difference Toy and Joy Makes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl text-slate-800 mb-4"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Unlock your child potential in our safe, play focused  {" "}
            <span className="grad-text-sky"> environment</span> 💙
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-xl mx-auto text-lg font-semibold"
          >
            Explore our pillars of holistic development, meticulously crafted to nuture the whole child. See how we make learning a joy!
          </motion.p>
        </div>

        {/* Bento grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {KEYWORDS.map((kw, i) => (
            <motion.div
              key={kw.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-3xl p-7 cursor-default group transition-shadow hover:shadow-2xl"
              style={{
                background: kw.bg,
                border: `2px solid ${kw.color}20`,
              }}
            >
              {/* Icon + label row */}
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-md flex-shrink-0"
                  style={{ background: `${kw.color}18`, border: `2px solid ${kw.color}30` }}
                >
                  {kw.icon}
                </motion.div>
                <h3
                  className="text-lg leading-tight text-slate-800"
                  style={{ fontFamily: "'Fredoka One', cursive", color: kw.color }}
                >
                  {kw.label}
                </h3>
              </div>
              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed font-semibold">
                {kw.desc}
              </p>
              {/* Bottom accent line */}
              <div
                className="mt-5 h-1 rounded-full w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${kw.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center bg-white rounded-3xl p-10 shadow-xl border-2 border-orange-100"
        >
          <div className="text-5xl mb-4">🌈</div>
          <h3
            className="text-3xl text-slate-800 mb-3"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
           Your child's most joyful and engaging learning adventure
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-base font-semibold leading-relaxed">
           Why choose Toy & Joy over other play schools? At Toy & Joy Play Zone, we are dedicated to creating a vibrant, safe, and stimulating environment where your child can flourish. We offer a curriculum built on research-backed, play-based learning that fosters cognitive, social, and emotional development. Our highly trained and caring educators are passionate about unlocking each child's unique potential, providing personalized attention and a love for discovery. With state-of-the-art play zones, a commitment to holistic development, and a strong focus on community, Toy & Joy provides an unmatched foundation for a lifelong love of learning and future success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
