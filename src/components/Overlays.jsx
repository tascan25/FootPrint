import { motion, AnimatePresence } from "framer-motion";
import InquiryForm from "./InquiryForm";

// ── Floating bottom bar (mobile only) ────────────────────────────────────────
export function FloatingCTA({ onEnquire }) {
  return (
    <motion.div
      initial={{ y: 120 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 120, damping: 16 }}
      className="fixed bottom-4 left-4 right-4 z-50 sm:hidden"
    >
      <div
        className="flex gap-3 p-3 rounded-3xl shadow-2xl border border-white/30"
        style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(16px)" }}
      >
        <a
          href="tel:+918010000000"
          className="flex-1 py-3.5 rounded-2xl font-black text-center text-white text-sm"
          style={{ background: "linear-gradient(135deg, #1A1A5E, #2D2D8E)" }}
        >
          📞 Call Now
        </a>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onEnquire}
          className="flex-1 py-3.5 rounded-2xl font-black text-center text-white text-sm"
          style={{
            background: "linear-gradient(135deg, #FF6B6B, #FF9A3C)",
            boxShadow: "0 4px 16px rgba(255,107,107,0.45)",
          }}
        >
          🎒 Enquire Free
        </motion.button>
      </div>
    </motion.div>
  );
}

// ── Enquiry modal ─────────────────────────────────────────────────────────────
export function EnquiryModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4"
          style={{ background: "rgba(13,26,58,0.75)", backdropFilter: "blur(10px)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.93 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-md relative"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 font-bold transition-colors text-lg"
            >
              ✕
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <motion.div
                animate={{ rotate: [0, -10, 10, -5, 0] }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-5xl mb-3"
              >
                🎒
              </motion.div>
              <h3
                className="text-2xl text-slate-800 mb-1"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                Book a Free Visit!
              </h3>
              <p className="text-sm font-semibold text-slate-400">
                We'll call you within 24 hours 🕐
              </p>
            </div>

            <InquiryForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
