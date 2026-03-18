import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const FAQS = [
  {
    q: "What age range does your preschool cater to?",
    a: "Our preschool welcomes children aged 12 Months to 96 Months.",
    icon: "👶",
  },
  {
    q: "What are your operating hours and days?",
    a: "We are open from Monday to Friday, from 8:15 AM to 7:15 PM. Regular timings are from 9:00 AM to 6:30 PM. Early/Late hours are available at specific branches and charged extra. Saturday services are also available at select branches.",
    icon: "🕐",
  },
  {
    q: "Do you have a curriculum or learning approach?",
    a: "Yes, we follow a US based HighScope Curriculum that encourages social, emotional, and cognitive development through interactive and creative activities.",
    icon: "🎓",
  },
  {
    q: "What is the teacher-to-student ratio in your preschool?",
    a: "We maintain a 1:10 teacher-to-student ratio, ensuring personalized attention and a nurturing learning environment.",
    icon: "👩‍🏫",
  },
  {
    q: "Are meals provided for the children, or should they bring their own lunch?",
    a: "We offer healthy snacks and meals as part of our program. You can find our menu in our handbook, and we accommodate dietary restrictions as needed.",
    icon: "🍱",
  },
  {
    q: "Is Footprints Preschool in I.P. Extension, New Delhi safe for young children?",
    a: "Yes. Safety is our top priority. The centre follows strict safety protocols including secure entry–exit systems, CCTV surveillance, child-safe infrastructure, and trained staff to ensure a safe environment for every child.",
    icon: "🛡️",
  },
  {
    q: "Does Footprints I.P. Extension, New Delhi provide live CCTV access to parents?",
    a: "Yes. Parents receive secure live CCTV access, allowing them to monitor their child in real time during school or daycare hours for complete peace of mind.",
    icon: "📹",
  },
  {
    q: "Is Footprints suitable for working parents?",
    a: "Absolutely. Our flexible daycare timings, extended care options, and structured routine make Footprints an ideal choice for working parents in I.P. Extension, New Delhi and nearby areas.",
    icon: "💼",
  },
  {
    q: "How is hygiene and cleanliness maintained at the centre?",
    a: "The centre follows strict daily cleaning and sanitization routines, age-appropriate hygiene practices, and safe food handling to maintain a clean and healthy environment.",
    icon: "🧼",
  },
  {
    q: "Are the teachers and caregivers trained?",
    a: "Yes. All teachers and caregivers are professionally trained, background-verified, and regularly upskilled to ensure high-quality early childhood care and learning.",
    icon: "✅",
  },
  {
    q: "How does Footprints help children adjust during the initial days?",
    a: "We follow a gentle settling-in process, allowing children to adapt gradually with emotional support, familiarization activities, and close communication with parents.",
    icon: "🤗",
  },
  {
    q: "How does Footprints communicate with parents?",
    a: "Parents receive regular updates, daily activity reports, photos, and notifications through digital platforms, ensuring transparency and strong parent-school communication.",
    icon: "📱",
  },
  {
    q: "What makes Footprints different from other preschools in I.P. Extension, New Delhi?",
    a: "Footprints stands out due to its live CCTV access, research-driven curriculum, strong safety standards, trained staff, and focus on holistic child development.",
    icon: "🌟",
  },
  {
    q: "How can I schedule a visit or take admission at I.P. Extension, New Delhi?",
    a: "Parents can easily schedule a centre visit, counselling session, or admission enquiry by filling out the form on the website or contacting the centre directly.",
    icon: "📅",
  },
];

function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
        isOpen
          ? "border-[#FF6B6B] shadow-lg shadow-red-100"
          : "border-slate-100 bg-white hover:border-orange-200 hover:shadow-md"
      }`}
      style={{ background: isOpen ? "#FFF8F6" : "white" }}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 py-5 text-left"
      >
        {/* Icon bubble */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-colors"
          style={{ background: isOpen ? "#FF6B6B18" : "#F1F5F9" }}
        >
          {faq.icon}
        </div>

        {/* Text */}
        <span
          className="flex-1 font-black text-slate-800 text-sm sm:text-base leading-snug"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {faq.q}
        </span>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center"
          style={{ background: isOpen ? "#FF6B6B" : "#F1F5F9" }}
        >
          <svg
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L7 10L12 5"
              stroke={isOpen ? "white" : "#64748B"}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pl-20">
              <div
                className="h-px mb-4"
                style={{ background: "linear-gradient(90deg, #FF6B6B33, transparent)" }}
              />
              <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // first open by default
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  // Split into two columns on desktop
  const left  = FAQS.slice(0, 7);
  const right = FAQS.slice(7);

  return (
    <section id="faq" className="py-24 relative overflow-hidden" style={{ background: "#FFFBF0" }}>
      {/* Wavy top */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,18 1440,35 L1440,0 L0,0 Z" fill="#0D1A3A" />
        </svg>
      </div>

      {/* Background deco */}
      <div className="dots-bg absolute inset-0 opacity-25" />
      <span className="absolute top-20 right-16 text-6xl opacity-5 spin-slow select-none">❓</span>
      <span className="absolute bottom-20 left-10 text-5xl opacity-5 float-b select-none">💡</span>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block bg-purple-100 text-purple-600 text-sm font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide"
          >
            ❓ Frequently Asked Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl text-slate-800 mb-4"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Got Questions?{" "}
            <span className="grad-text">We've Got Answers!</span> 🙋
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
            className="text-slate-500 max-w-xl mx-auto text-lg font-semibold"
          >
            Everything parents want to know before choosing Footprints for their little one.
          </motion.p>
        </div>

        {/* Two-column accordion on desktop, single on mobile */}
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Left column */}
          <div className="space-y-3">
            {left.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
          {/* Right column */}
          <div className="space-y-3">
            {right.map((faq, i) => {
              const globalIndex = i + 7;
              return (
                <FaqItem
                  key={globalIndex}
                  faq={faq}
                  index={globalIndex}
                  isOpen={openIndex === globalIndex}
                  onToggle={() => toggle(globalIndex)}
                />
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 rounded-3xl p-8 sm:p-10 text-center border-2 border-orange-100"
          style={{ background: "linear-gradient(135deg, #FFF0F0, #FFF8EC)" }}
        >
          <div className="text-4xl mb-3">💬</div>
          <h3
            className="text-2xl text-slate-800 mb-2"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Still Have Questions?
          </h3>
          <p className="text-slate-500 font-semibold mb-6 max-w-md mx-auto">
            Our friendly team is happy to help! Call us or drop a WhatsApp message and we'll get back to you right away.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918010055055"
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-black text-white text-sm shadow-lg hover:scale-105 transition-transform"
              style={{ background: "linear-gradient(135deg, #FF6B6B, #FF9A3C)", boxShadow: "0 6px 20px rgba(255,107,107,0.35)" }}
            >
              📞 Call Us: 8010055055
            </a>
            <a
              href="https://wa.me/918010055055"
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-black text-white text-sm shadow-lg hover:scale-105 transition-transform"
              style={{ background: "#25D366" }}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}