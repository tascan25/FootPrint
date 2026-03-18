import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InquiryForm({ dark = false }) {
  const [form, setForm] = useState({ name: "", phone: "", age: "", program: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const inputClass = `w-full px-4 py-3 rounded-2xl border-2 text-sm font-semibold transition-all placeholder:font-normal ${
    dark
      ? "bg-white/10 border-white/20 text-white placeholder:text-white/50"
      : "bg-white border-slate-200 text-slate-700 placeholder:text-slate-400"
  }`;

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8 px-4"
        >
          <motion.div
            initial={{ rotate: -20, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="text-7xl mb-4"
          >
            🎉
          </motion.div>
          <h3 className={`text-2xl font-display mb-2 ${dark ? "text-white" : "text-slate-800"}`}
              style={{ fontFamily: "'Fredoka One', cursive" }}>
            You're All Set!
          </h3>
          <p className={`text-sm ${dark ? "text-white/70" : "text-slate-500"}`}>
            Our team will call you within 24 hours to schedule your <strong>free school visit</strong>.
          </p>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={handleSubmit} className="space-y-3">
          <input required placeholder="Parent's Full Name *" value={form.name} onChange={set("name")} className={inputClass} />
          <input required type="tel" placeholder="Phone Number *" value={form.phone} onChange={set("phone")} className={inputClass} />
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="Child's Age" value={form.age} onChange={set("age")} className={inputClass} />
            <select value={form.program} onChange={set("program")} className={inputClass}>
              <option value="">Program</option>
              {["Playgroup","Pre-Nursery","Nursery","Junior KG","Senior KG","Day Care"].map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
          <textarea
            rows={3}
            placeholder="Any questions? (optional)"
            value={form.message}
            onChange={set("message")}
            className={`${inputClass} resize-none`}
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl font-black text-white text-base transition-all disabled:opacity-70"
            style={{ background: "linear-gradient(135deg, #FF6B6B, #FF9A3C)", boxShadow: "0 6px 24px rgba(255,107,107,0.4)" }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
                  <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Booking...
              </span>
            ) : "🚀 Book Free Visit"}
          </motion.button>
          <p className="text-center text-xs text-slate-400 font-medium">
            🔒 100% Private · No spam, ever
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
