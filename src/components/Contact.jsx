import { motion } from "framer-motion";
import InquiryForm from "./InquiryForm";

const info = [
  { icon: "📍", label: "Address",  value: "VVIP Addresses G- Block, Flat No. G-101/102, Raj Nagar Extension (Ghaziabad)" },
  { icon: "📞", label: "Phone",    value: "+91 8979669233" },
  { icon: "🕐", label: "Hours",    value: "Mon – Sat: 8:00 AM – 6:30 PM" },
  { icon: "✉️", label: "Email",    value: "admissions@footprintsedu.in" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1A1A5E, #0A3A5E)" }}
    >
      <div className="wave-top">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,18 1440,35 L1440,0 L0,0 Z" fill="#FFFBF0" />
        </svg>
      </div>

      <div className="absolute inset-0 dots-bg opacity-10" />
      <div className="absolute top-20 right-10 text-[120px] opacity-5 select-none float-a">🏫</div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-start">
        {/* Left info */}
        <div>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white/10 border border-white/20 text-white text-sm font-black px-4 py-1.5 rounded-full mb-5 uppercase tracking-wide"
          >
            📍 Visit Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl text-white mb-5"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Come See Our{" "}
            <span style={{ color: "#FFD23F" }}>Happy Place</span> 🏫
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-blue-200 font-semibold mb-8 text-lg leading-relaxed"
          >
            Meet our team, tour the colorful classrooms, and see firsthand why thousands of Delhi parents choose Footprints for their little ones.
          </motion.p>

          <div className="space-y-5">
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(255,107,107,0.2)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.label}</div>
                  <div className="text-white font-bold">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <a
              href="https://wa.me/918010000000"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-white text-sm hover:scale-105 transition-transform"
              style={{ background: "#25D366" }}
            >
              💬 WhatsApp Us
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-white text-sm hover:scale-105 transition-transform border border-white/20"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              🗺️ Get Directions
            </a>
          </motion.div>
        </div>

        {/* Right form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl p-8 border border-white/10"
          style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(20px)" }}
        >
          <h3
            className="text-2xl text-white mb-1"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Enquire Now
          </h3>
          <p className="text-slate-400 font-semibold text-sm mb-6">We'll call you back within 24 hours! 🕐</p>
          <InquiryForm dark />
        </motion.div>
      </div>
    </section>
  );
}
