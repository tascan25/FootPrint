import { useState, useEffect, createContext, useContext, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Context ───────────────────────────────────────────────────────────────────
const ToastContext = createContext(null);

export function useToast() {
  return useContext(ToastContext);
}

// ── Provider ──────────────────────────────────────────────────────────────────
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback(({ message, type = "info", duration = 5000 }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), duration);
  }, []);

  const remove = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  const icons = { info: "ℹ️", success: "✅", warning: "⚠️", error: "❌" };
  const colors = {
    info:    { bg: "#EFF6FF", border: "#BFDBFE", text: "#1E40AF", icon: "#3B82F6" },
    success: { bg: "#F0FFF4", border: "#BBF7D0", text: "#166534", icon: "#22C55E" },
    warning: { bg: "#FFFBEB", border: "#FDE68A", text: "#92400E", icon: "#F59E0B" },
    error:   { bg: "#FFF1F2", border: "#FECDD3", text: "#9F1239", icon: "#F43F5E" },
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {/* Toast container */}
      <div className="fixed top-6 right-4 left-4 sm:left-auto sm:w-[420px] z-[200] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => {
            const c = colors[t.type];
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 80, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 80, scale: 0.92, transition: { duration: 0.25 } }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className="pointer-events-auto rounded-2xl shadow-2xl border-2 overflow-hidden"
                style={{ background: c.bg, borderColor: c.border }}
              >
                <div className="flex items-start gap-4 p-4">
                  {/* Icon bubble */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${c.icon}20` }}
                  >
                    {icons[t.type]}
                  </div>

                  {/* Message */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <p
                      className="text-sm font-bold leading-relaxed"
                      style={{ color: c.text }}
                      dangerouslySetInnerHTML={{ __html: t.message }}
                    />
                  </div>

                  {/* Close */}
                  <button
                    onClick={() => remove(t.id)}
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold transition-colors hover:opacity-70"
                    style={{ color: c.text, background: `${c.icon}15` }}
                  >
                    ✕
                  </button>
                </div>

                {/* Progress bar */}
                <motion.div
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: 0 }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-1 origin-left"
                  style={{ background: c.icon }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
