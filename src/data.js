// ── Shared animation helpers ──────────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export const childFade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ── Site Data ─────────────────────────────────────────────────────────────────
export const STATS = [
  { value: "14+",  label: "Years of Trust",     icon: "🏆" },
  { value: "30+", label: "Centers Nationwide", icon: "🏫" },
  { value: "1.5L+",label: "Happy Children",     icon: "👶" },
  { value: "4.8★", label: "Parent Rating",      icon: "⭐" },
];

export const PROGRAMS = [
  {
    title: "Playgroup",
    age: "1.5 – 2.5 yrs",
    icon: "🧸",
    color: "#FF6B6B",
    bg: "#FFF0F0",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&auto=format&fit=crop&q=80",
    desc: "First steps into the world — through sensory play, stories, and new friends.",
  },
  {
    title: "Pre-Nursery",
    age: "2.5 – 3 yrs",
    icon: "🎨",
    color: "#FF9A3C",
    bg: "#FFF5EC",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&auto=format&fit=crop&q=80",
    desc: "Building curiosity and early language skills through creative exploration.",
  },
  {
    title: "Nursery",
    age: "3 – 4 yrs",
    icon: "📚",
    color: "#4CAF50",
    bg: "#F0FFF0",
    image: "https://images.unsplash.com/photo-1598901865264-4f5f51f7a1ab?w=600&auto=format&fit=crop&q=80",
    desc: "Foundational literacy, numeracy, and social-emotional growth.",
  },
  {
    title: "Junior KG",
    age: "4 – 5 yrs",
    icon: "🔬",
    color: "#5BC8F5",
    bg: "#F0FBFF",
    image: "https://images.unsplash.com/photo-1526958097901-5e6d742d3371?w=600&auto=format&fit=crop&q=80",
    desc: "School readiness through critical thinking and hands-on learning.",
  },
  {
    title: "Senior KG",
    age: "5 – 6 yrs",
    icon: "🚀",
    color: "#A855F7",
    bg: "#F8F0FF",
    image: "https://images.unsplash.com/photo-1604881989793-466aca8dd319?w=600&auto=format&fit=crop&q=80",
    desc: "Advanced curriculum building confidence for primary school.",
  },
  {
    title: "Day Care",
    age: "6 months+",
    icon: "🌙",
    color: "#FF6EC7",
    bg: "#FFF0FB",
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&auto=format&fit=crop&q=80",
    desc: "Safe, nurturing after-school care with trained caregivers.",
  },
];

export const KEYWORDS = [
  {
    icon: "😊", label: "Comfortable & Friendly Environment", color: "#FF6B6B", bg: "#FFF0F0",
    desc: "A warm, inviting space that feels like a home away from home for your little one.",
  },
  {
    icon: "💎", label: "Value for Money", color: "#FF9A3C", bg: "#FFF5EC",
    desc: "World-class education at honest, transparent pricing — no hidden fees.",
  },
  {
    icon: "🎵", label: "Harmony", color: "#A855F7", bg: "#F8F0FF",
    desc: "Music, movement, and mindfulness woven into daily routines for balanced growth.",
  },
  {
    icon: "📹", label: "CCTV Surveillance", color: "#5BC8F5", bg: "#F0FBFF",
    desc: "Live, 24×7 camera access straight to your phone — watch your child anytime.",
  },
  {
    icon: "🛡️", label: "Secure Day Care", color: "#4CAF50", bg: "#F0FFF0",
    desc: "Biometric entry, trained attendants, and strict visitor protocols keep every child safe.",
  },
  {
    icon: "🧩", label: "Activity-Based Learning", color: "#FF6EC7", bg: "#FFF0FB",
    desc: "Children learn best by doing. Every lesson is hands-on, exploratory, and fun.",
  },
  {
    icon: "🌱", label: "Nurturing Environment", color: "#FFD23F", bg: "#FFFBEC",
    desc: "Caring teachers who know every child by name, temperament, and love language.",
  },
  {
    icon: "🔄", label: "Adaptive Curriculum", color: "#FF6B6B", bg: "#FFF0F0",
    desc: "Learning plans that flex to each child's pace, interests, and learning style.",
  },
  {
    icon: "🌟", label: "Personality Development", color: "#A855F7", bg: "#F8F0FF",
    desc: "Beyond academics — building confidence, empathy, leadership, and self-expression.",
  },
];

export const FEATURES = [
  { icon: "📹", title: "Live CCTV Access",       desc: "Watch your child in real-time from your phone during school hours.",       color: "#FF6B6B" },
  { icon: "🍱", title: "Nutritious Meals",        desc: "Fresh, home-like meals planned by dietitians with monthly menus.",         color: "#4CAF50" },
  { icon: "📱", title: "ParentConnect App",       desc: "Instant updates — activities, photos, naps, meals — all in one app.",     color: "#5BC8F5" },
  { icon: "🎓", title: "HighScope® Curriculum",  desc: "Internationally acclaimed, research-backed methodology from the USA.",     color: "#A855F7" },
  { icon: "🚌", title: "GPS-Tracked Transport",  desc: "Secure school vans with GPS tracking and trained female attendants.",      color: "#FF9A3C" },
  { icon: "🏥", title: "First-Aid Trained Staff", desc: "Every educator is certified in child development and pediatric first aid.", color: "#FF6EC7" },
];

export const TESTIMONIALS = [
  {
    name: "Priya Sharma", role: "Mom of Aarav, 4 yrs", avatar: "👩", rating: 5,
    text: "Footprints has been a second home for my son. The teachers are incredibly nurturing and the ParentConnect app keeps me updated all day. Absolutely the best decision we made!",
  },
  {
    name: "Rohit Mehta", role: "Dad of Ananya, 3 yrs", avatar: "👨", rating: 5,
    text: "The HighScope curriculum is exceptional. We've seen remarkable growth in Ananya's confidence and communication in just 6 months. Can't recommend enough!",
  },
  {
    name: "Sunita Verma", role: "Mom of Kabir, 2.5 yrs", avatar: "👩‍💼", rating: 5,
    text: "Safety and hygiene are top-notch. The live CCTV feature gave me so much peace of mind when Kabir just started. Highly recommend Footprints to every parent!",
  },
  {
    name: "Amit Kapoor", role: "Dad of Diya, 5 yrs", avatar: "👨‍💻", rating: 5,
    text: "Diya went from being shy to performing on stage! The holistic development here is unlike anything we've seen. A truly special place.",
  },
];

// ── Image assets used across sections ─────────────────────────────────────────
export const IMAGES = {
  // Hero section – happy kids in classroom
  heroBg: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1400&auto=format&fit=crop&q=80",
  heroKids: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=900&auto=format&fit=crop&q=80",

  // About / Curriculum
  classroom:   "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&auto=format&fit=crop&q=80",
  painting:    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900&auto=format&fit=crop&q=80",
  reading:     "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=80",
  outdoor:     "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=900&auto=format&fit=crop&q=80",

  // Gallery photos
  gallery: [
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600&auto=format&fit=crop&q=80",
  ],
};
