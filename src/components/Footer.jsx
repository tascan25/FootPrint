import { motion } from "framer-motion";

const links = {
  Programs: ["Playgroup", "Pre-Nursery", "Nursery", "Junior KG", "Senior KG", "Day Care"],
  Company: ["About Us", "Our Story", "Centers Near You", "Careers", "News & Awards"],
  Support: ["FAQs", "Admissions Process", "Fee Structure", "Privacy Policy", "Terms of Use"],
};

export default function Footer() {
  return (
    <footer style={{ background: "#0D1A3A" }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                style={{ background: "linear-gradient(135deg, #FF6B6B, #FF9A3C)" }}
              >
                🐾
              </div>
              <div>
                <div
                  className="text-xl text-white"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  Footprints
                </div>
                <div className="text-xs font-bold text-orange-400 -mt-0.5">Play School</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm font-semibold leading-relaxed mb-6">
              India's most trusted preschool chain — nurturing little minds for over 20 years with love, play, and purpose.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: "📘", label: "Facebook",  bg: "#1877F2" },
                { icon: "📸", label: "Instagram", bg: "linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)" },
                { icon: "▶️", label: "YouTube",   bg: "#FF0000" },
                { icon: "🐦", label: "Twitter",   bg: "#1DA1F2" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm"
                  style={{ background: s.bg }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4
                className="text-white text-base mb-4"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-orange-400 text-sm font-semibold transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-sm font-semibold">
            © 2025 Footprints Childcare Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
            <span>Made with</span>
            <span className="text-red-400 animate-pulse">❤️</span>
            <span>for every little learner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
