# 🐾 Footprints Play School — Landing Page

Modern, kids-friendly React landing page built with:
- ⚛️ **React 18** + **Vite**
- 🎨 **Tailwind CSS v3**
- 🎞️ **Framer Motion** (animations)
- 🍞 **Custom Toast system** (no extra library needed)
- 🔤 **Fredoka One** + **Nunito** (Google Fonts)
- 🖼️ **Unsplash images** (loaded via URL, no download needed)

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```
Open **http://localhost:5173**

---

## 📁 Structure

```
src/
├── components/
│   ├── Navbar.jsx          ← Sticky nav + mobile hamburger
│   ├── Hero.jsx            ← Hero with image + inquiry form
│   ├── StatsBar.jsx        ← Trust numbers (dark strip)
│   ├── Programs.jsx        ← Program cards with images + Toast on Explore
│   ├── Values.jsx          ← 9 keyword highlight cards
│   ├── Features.jsx        ← Feature grid (dark bg)
│   ├── Curriculum.jsx      ← HighScope section with classroom image
│   ├── Gallery.jsx         ← Photo gallery grid
│   ├── Testimonials.jsx    ← Auto-rotating testimonial carousel
│   ├── Contact.jsx         ← Contact info + enquiry form
│   ├── Footer.jsx          ← Full footer
│   ├── InquiryForm.jsx     ← Reusable form with success state
│   ├── Overlays.jsx        ← Enquiry modal + mobile floating CTA
│   └── Toast.jsx           ← Custom toast notification system
├── data.js                 ← All site data, images, animation variants
├── App.jsx
├── main.jsx
└── index.css               ← Global styles + CSS animations
```

---

## ✏️ Customise

| What                   | Where                          |
|------------------------|--------------------------------|
| Phone number in toast  | `Programs.jsx` → `CONTACT_NUMBER` |
| Programs list + images | `data.js` → `PROGRAMS`         |
| 9 keyword cards        | `data.js` → `KEYWORDS`         |
| Gallery photos         | `data.js` → `IMAGES.gallery`   |
| Stats numbers          | `data.js` → `STATS`            |
| Colors                 | `index.css` `:root` vars        |
