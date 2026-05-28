import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden mt-16 -mb-2 bg-[#2B2521] text-white">

      {/* PREMIUM BACKGROUND GLOW */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#1F4E9D]/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#D4A373]/10 blur-3xl rounded-full"></div>

      {/* TOP BORDER GLOW */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 py-14 relative z-10">

        {/* GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 lg:gap-12">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3 mb-5">

              {/* LOGO */}
              <div className="relative w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.18)] border border-white/20 flex items-center justify-center overflow-hidden">

                <img
                  src="logo.png"
                  alt="Cake Academy"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* TEXT */}
              <div>

                <h2 className="text-2xl font-black text-white leading-none">
                  Cake Academy
                </h2>

                <p className="text-[11px] tracking-[0.28em] uppercase text-[#D4A373] font-semibold mt-1">
                  Of Chandigarh
                </p>

              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="text-[#D6CCC2] text-sm leading-7 max-w-sm">
              Learn professional baking, cake decoration, pastries,
              cookies, and dessert making with hands-on practical
              training from expert bakers.
            </p>

            {/* CTA CARD */}
            <div className="mt-6 p-5 rounded-[28px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">

              <p className="text-sm text-[#D4A373] font-semibold mb-2">
                🎂 Free Demo Classes Available
              </p>

              <p className="text-sm text-[#D6CCC2] leading-6">
                Join our bakery training institute and start your
                baking journey today.
              </p>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-bold mb-6 text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-[#D6CCC2]">

              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Courses", "/courses"],
                ["Gallery", "/gallery"],
                ["Contact", "/contact"],
              ].map(([name, path]) => (

                <li key={name}>

                  <Link
                    to={path}
                    className="group flex items-center gap-3 hover:text-[#D4A373] transition-all duration-300"
                  >

                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition duration-300" />

                    {name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* COURSES */}
          <div>

            <h3 className="text-lg font-bold mb-6 text-white">
              Courses
            </h3>

            <ul className="space-y-4 text-[#D6CCC2]">

              <li>
                <Link
                  to="/basic-course"
                  className="hover:text-[#D4A373] transition-all duration-300"
                >
                  Basic Baking
                </Link>
              </li>

              <li>
                <Link
                  to="/moderate-course"
                  className="hover:text-[#D4A373] transition-all duration-300"
                >
                  Moderate Baking
                </Link>
              </li>

              <li>
                <Link
                  to="/advance-course"
                  className="hover:text-[#D4A373] transition-all duration-300"
                >
                  Advance Baking
                </Link>
              </li>

              <li>
                <Link
                  to="/beyond-advance-course"
                  className="hover:text-[#D4A373] transition-all duration-300"
                >
                  Beyond Advance
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-bold mb-6 text-white">
              Contact Info
            </h3>

            <div className="space-y-5 text-[#D6CCC2]">

              {/* LOCATION */}
              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center flex-shrink-0">

                  <FaMapMarkerAlt className="text-[#D4A373]" />

                </div>

                <div>

                  <p className="text-white font-semibold">
                    Location
                  </p>

                  <p className="text-sm leading-6 mt-1">
                    SCO 285, First Floor Sector 32D Chandigarh
                  </p>

                </div>

              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center flex-shrink-0">

                  <FaPhoneAlt className="text-[#D4A373]" />

                </div>

                <div>

                  <p className="text-white font-semibold">
                    Phone
                  </p>

                  <a
                    href="tel:+917087831409"
                    className="text-sm mt-1 inline-block hover:text-[#D4A373] transition-all duration-300"
                  >
                    +91 7087831409
                  </a>

                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center flex-shrink-0">

                  <FaEnvelope className="text-[#D4A373]" />

                </div>

                <div>

                  <p className="text-white font-semibold">
                    Email
                  </p>

                  <a
                    href="mailto:cakeacdofchd@gmail.com"
                    className="text-sm mt-1 inline-block hover:text-[#D4A373] transition-all duration-300"
                  >
                    cakeacdofchd@gmail.com
                  </a>

                </div>

              </div>

            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/share/1EDBCVXLVg/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-[#1F4E9D] transition-all duration-300 hover:-translate-y-1"
              >
                <FaFacebookF />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/cakeacademyofchd?igsh=NGVlMW5hMGY3ejY2&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-pink-500 hover:text-[#2B2521] transition-all duration-300 hover:-translate-y-1"
              >
                <FaInstagram />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/917087831409"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-green-500 transition-all duration-300 hover:-translate-y-1"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#B8ADA3]">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Cake Academy Of Chandigarh.
            All rights reserved.
          </p>

          <p className="text-center md:text-right">
            Crafted with passion for future bakers 🎂
          </p>

        </div>

      </div>

    </footer>
  );
}