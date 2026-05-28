import { Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";

import BasicCourse from "./pages/BasicCourse";
import ModerateCourse from "./pages/ModerateCourse";
import AdvanceCourse from "./pages/AdvanceCourse";
import BeyondAdvanceCourse from "./pages/BeyondAdvanceCourse";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Gallery = lazy(() => import("./pages/Gallery"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // LOADER
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-white text-gray-800 pb-20 md:pb-0">

      <ScrollToTop />

      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/basic-course" element={<BasicCourse />} />

        <Route path="/moderate-course" element={<ModerateCourse />} />

        <Route path="/advance-course" element={<AdvanceCourse />} />

        <Route
          path="/beyond-advance-course"
          element={<BeyondAdvanceCourse />}
        />

        <Route
          path="/gallery"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center text-[#1F4E9D] text-lg font-semibold">
                  Loading Gallery...
                </div>
              }
            >
              <Gallery />
            </Suspense>
          }
        />
      </Routes>

      {/* DESKTOP FLOATING BOOKING BUTTON */}
      <div className="hidden md:block fixed bottom-5 right-5 z-50">

        <a
          href={`https://wa.me/917087831409?text=${encodeURIComponent(
            `Hello Cake Academy of Chandigarh,

I want to book a FREE trial class.

Please share course details and timings.

Thank you`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            relative
            overflow-hidden
            flex items-center gap-4
            px-5 py-3.5
            rounded-2xl
            border border-white/30
            bg-white/20
            backdrop-blur-xl
            shadow-[0_8px_32px_rgba(31,78,157,0.18)]
            hover:shadow-[0_12px_40px_rgba(31,78,157,0.28)]
            hover:-translate-y-1
            transition-all duration-500
          "
        >

          {/* GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F4E9D]/10 to-[#D4A373]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* ICON */}
          <div
            className="
              relative z-10
              flex items-center justify-center
              w-12 h-12
              rounded-2xl
              bg-gradient-to-br from-[#1F4E9D] to-[#2D68C4]
              shadow-lg
            "
          >

            <span className="absolute inset-0 rounded-2xl bg-[#1F4E9D]/30 animate-ping"></span>

            <span className="relative z-10 text-white text-xl">
              📅
            </span>

          </div>

          {/* TEXT */}
          <div className="relative z-10 leading-tight">

            <p
              className="
                text-[12px]
                uppercase
                tracking-[0.22em]
                text-[#1F4E9D]
                font-semibold
              "
            >
              Free Demo
            </p>

            <h3
              className="
                text-sm
                font-bold
                text-[#2B2521]
                group-hover:text-[#1F4E9D]
                transition
              "
            >
              Book Trial Class
            </h3>

          </div>

          {/* ARROW */}
          <span
            className="
              relative z-10
              text-[#1F4E9D]
              text-lg
              group-hover:translate-x-1
              transition
            "
          >
            →
          </span>

        </a>

      </div>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-xl border-t border-[#E8DED1] px-4 py-3 shadow-2xl">

        <div className="flex gap-3">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/917087831409"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              flex items-center justify-center gap-2
              bg-[#00C951]
              text-white
              py-3
              rounded-2xl
              font-semibold
              shadow-lg
            "
          >

            <FaWhatsapp />

            WhatsApp

          </a>

          {/* CALL NOW */}
          <a
            href="tel:+917087831409"
            className="
              flex-1
              flex items-center justify-center gap-2
              bg-[#1F4E9D]
              text-white
              py-3
              rounded-2xl
              font-semibold
              shadow-lg
            "
          >

            <FaPhoneAlt />

            Call Now

          </a>

        </div>

      </div>

      <Footer />

    </div>
  );
}