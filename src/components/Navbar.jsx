import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaWhatsapp,
} from "react-icons/fa";

const navLinks = [
  ["/", "Home"],
  ["/gallery", "Gallery"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

const phone = "917087831409";

const message = `Hello Cake Academy,

I want to enroll in your Baking Course.

Please share details:
- Course Fee
- Timings
- Duration
- Admission Process

Thank you`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[#E8DED1] shadow-sm">
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3 min-w-0 group"
        >
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-[#1F4E9D]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></div>

            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg border border-[#E8DED1] flex items-center justify-center overflow-hidden">
              <img
                src="logo.png"
                alt="Cake Academy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="leading-tight min-w-0">
            <h1 className="text-lg sm:text-2xl font-extrabold text-[#2B2521] group-hover:text-[#1F4E9D] transition whitespace-nowrap">
              Cake Academy
            </h1>

            <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#1F4E9D] font-semibold whitespace-nowrap">
              Of Chandigarh
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">
          
          {navLinks.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-[#1F4E9D]"
                    : "text-[#5C534B] hover:text-[#1F4E9D]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* COURSES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <Link
              to="/courses"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#EFE6D8] text-[#1F4E9D] font-semibold hover:bg-[#1F4E9D] hover:text-white transition"
            >
              Courses

              <FaChevronDown
                className={`text-xs transition duration-300 ${
                  coursesOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            <div
              className={`absolute top-14 left-0 w-64 bg-white rounded-2xl shadow-2xl border border-[#E8DED1] transition-all duration-300 ${
                coursesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-3"
              }`}
            >
              <NavLink
                to="/basic-course"
                className="block p-4 rounded-t-2xl hover:bg-[#F7F1E7] text-[#2B2521] font-medium transition"
              >
                Basic Course
              </NavLink>

              <NavLink
                to="/moderate-course"
                className="block p-4 hover:bg-[#F7F1E7] text-[#2B2521] font-medium transition"
              >
                Moderate Course
              </NavLink>

              <NavLink
                to="/advance-course"
                className="block p-4 hover:bg-[#F7F1E7] text-[#2B2521] font-medium transition"
              >
                Advance Course
              </NavLink>

              <NavLink
                to="/beyond-advance-course"
                className="block p-4 rounded-b-2xl hover:bg-[#F7F1E7] text-[#2B2521] font-medium transition"
              >
                Beyond Advance
              </NavLink>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 flex-shrink-0">
          
          {/* WHATSAPP DESKTOP */}
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-3 px-6 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            <FaWhatsapp size={20} />
            WhatsApp Now
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden w-11 h-11 rounded-full bg-[#EFE6D8] text-[#1F4E9D] flex items-center justify-center shadow-sm flex-shrink-0"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#F7F1E7] border-t border-[#E8DED1] px-6 py-6 space-y-3">
          
          {navLinks.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="block p-3 rounded-xl text-[#2B2521] hover:bg-white transition font-medium"
            >
              {label}
            </NavLink>
          ))}

          {/* MOBILE COURSES */}
          <div>
            <button
              onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              className="w-full flex justify-between items-center p-3 bg-[#EFE6D8] rounded-xl text-[#1F4E9D] font-semibold"
            >
              Courses

              <FaChevronDown
                className={`transition duration-300 ${
                  mobileCoursesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileCoursesOpen ? "max-h-96 mt-3" : "max-h-0"
              }`}
            >
              <NavLink
                to="/basic-course"
                onClick={() => {
                  setOpen(false);
                  setMobileCoursesOpen(false);
                }}
                className="block px-4 py-3 rounded-xl text-[#2B2521] hover:bg-white transition font-medium"
              >
                Basic Course
              </NavLink>

              <NavLink
                to="/moderate-course"
                onClick={() => {
                  setOpen(false);
                  setMobileCoursesOpen(false);
                }}
                className="block px-4 py-3 rounded-xl text-[#2B2521] hover:bg-white transition font-medium"
              >
                Moderate Course
              </NavLink>

              <NavLink
                to="/advance-course"
                onClick={() => {
                  setOpen(false);
                  setMobileCoursesOpen(false);
                }}
                className="block px-4 py-3 rounded-xl text-[#2B2521] hover:bg-white transition font-medium"
              >
                Advance Course
              </NavLink>

              <NavLink
                to="/beyond-advance-course"
                onClick={() => {
                  setOpen(false);
                  setMobileCoursesOpen(false);
                }}
                className="block px-4 py-3 rounded-xl text-[#2B2521] hover:bg-white transition font-medium"
              >
                Beyond Advance
              </NavLink>
            </div>
          </div>

          {/* WHATSAPP MOBILE */}
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 mt-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-2xl font-semibold shadow-lg"
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}