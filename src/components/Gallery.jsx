import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IMAGES } from "../data";

const captions = [
  "Happy explorers 🌟",
  "Story time magic 📚",
  "Little artists at work 🎨",
  "Learning never stops 🔬",
  "Outdoor adventures 🌿",
  "Best friends forever 🤝",
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#F0F8FF" }}>
      {/* Wavy top */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,35 C360,0 720,70 1080,35 C1260,18 1380,52 1440,35 L1440,0 L0,0 Z" fill="#FFF5F0" />
        </svg>
      </div>

      <div className="dots-bg absolute inset-0 opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-100 text-blue-600 text-sm font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide"
          >
            📸 Life at Toy and Joy Playzone
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl text-slate-800 mb-4"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Every Day is an{" "}
            <span className="grad-text-sky">Adventure</span> 🌈
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-xl mx-auto text-lg font-semibold"
          >
            A peek into the joyful world your child will be part of.
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {IMAGES.gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className={`group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer ${
                i === 0 || i === 3 ? "md:row-span-1" : ""
              }`}
              style={{ aspectRatio: i % 3 === 0 ? "4/3" : "3/4" }}
            >
              <img
                src={src}
                alt={captions[i]}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(26,26,94,0.75) 0%, transparent 60%)" }}
              >
                <span className="text-white font-black text-sm drop-shadow">
                  {captions[i]}
                </span>
              </div>

              {/* Corner emoji badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07, type: "spring", stiffness: 200 }}
                className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-white/90 flex items-center justify-center text-lg shadow-md"
              >
                {["🌟", "📚", "🎨", "🔬", "🌿", "🤝"][i]}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA below gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-slate-500 font-semibold mb-4">
            Want to see more? Come for a free visit and experience it yourself! 🏫
          </p>
          <a
            href="https://wa.me/918979669233"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-black text-white text-sm shadow-lg hover:scale-105 transition-transform"
            style={{ background: "#25D366" }}
          >
            💬 WhatsApp for a Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
