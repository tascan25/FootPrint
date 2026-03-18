import { useState } from "react";
import { ToastProvider }            from "./components/Toast";
import Navbar                       from "./components/Navbar";
import Hero                         from "./components/Hero";
import StatsBar                     from "./components/StatsBar";
import Programs                     from "./components/Programs";
import Values                       from "./components/Values";
import Features                     from "./components/Features";
import Curriculum                   from "./components/Curriculum";
import Gallery                      from "./components/Gallery";
import Testimonials                 from "./components/Testimonials";
import Contact                      from "./components/Contact";
import Footer                       from "./components/Footer";
import { FloatingCTA, EnquiryModal } from "./components/Overlays";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const open  = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <ToastProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar       onEnquire={open} />
        <Hero         onEnquire={open} />
        <StatsBar />
        <Programs />
        <Values />
        <Features />
        <Curriculum />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
        <FloatingCTA  onEnquire={open} />
        <EnquiryModal open={modalOpen} onClose={close} />
      </div>
    </ToastProvider>
  );
}
