import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar({ onEnquire }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Programs", "Why Us", "Values", "Testimonials", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-orange-100/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform"
              style={{ background: "linear-gradient(135deg, #FF6B6B, #FF9A3C)" }}
            >
              🐾
            </div>
            <div>
              <div className="text-xl font-display leading-tight" style={{ color: "#1A1A5E", fontFamily: "'Fredoka One', cursive" }}>
                Toy and Joy
              </div>
              <div className="text-xs font-bold text-orange-400 -mt-0.5 tracking-wide">
                Playzone
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-bold text-slate-600 hover:text-[#FF6B6B] transition-colors duration-200 relative group"
              >
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full bg-[#FF6B6B] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+918979669233"
              className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-[#FF6B6B] transition-colors"
            >
              <span className="text-lg">📞</span>
              <span>Call Us</span>
            </a>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={onEnquire}
              className="px-5 py-2.5 rounded-2xl text-sm font-black text-white shadow-lg transition-shadow hover:shadow-orange-200"
              style={{ background: "linear-gradient(135deg, #FF6B6B, #FF9A3C)", boxShadow: "0 4px 18px rgba(255,107,107,0.4)" }}
            >
              Enroll Now 🎒
            </motion.button>

            {/* Hamburger */}
            <button
              className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block h-0.5 w-6 rounded bg-slate-600 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 rounded bg-slate-600 transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 rounded bg-slate-600 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2"
          >
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 px-4 rounded-xl font-bold text-slate-700 hover:bg-orange-50 hover:text-[#FF6B6B] transition-colors"
              >
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
