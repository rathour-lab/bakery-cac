import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "https://i.pinimg.com/736x/1b/05/d0/1b05d0a9e7ee0d72ab8f93ac1e1096d9.jpg",
    "https://i.pinimg.com/1200x/4f/f9/3b/4ff93b3b747e826cebfdcc8b245f25b7.jpg",
    "https://i.pinimg.com/1200x/6c/20/01/6c2001bb72d5bd08a1d1c3c3fe8d75d5.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // AUTO SLIDER
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);
  }, [images.length]);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden bg-[#F7F1E7] pt-20 md:pt-24">

      {/* BG GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7F1E7] via-[#F9F5EE] to-[#EFE6D8]"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >

          {/* BADGE */}
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/40 text-[#1F4E9D] font-semibold mb-6"
          >
            🎂 Professional Bakery Training Institute
          </motion.p>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] text-[#2B2521]">

            Become A Professional

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1F4E9D] via-[#2D63BC] to-[#4B7FD6] mt-2">
              Baker & Cake Artist
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-[17px] text-[#5C534B] leading-8">
            Hands-on bakery training for beginners & aspiring professionals.
            Learn cakes, pastries, desserts, cookies, and modern baking
            techniques from expert bakers.
          </p>

          {/* TRUST BADGES */}
          <div className="mt-7 flex flex-wrap gap-3">

            {[
              "🎓 Certified Courses",
              "🎂 100% Practical",
              "👩‍🍳 Expert Trainers",
              "🏆 500+ Students",
            ].map((item, i) => (

              <span
                key={i}
                className="px-4 py-2 bg-white/70 backdrop-blur-lg border border-white/50 rounded-full text-sm font-medium shadow-sm text-[#2B2521]"
              >
                {item}
              </span>

            ))}

          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/courses"
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1F4E9D] to-[#2D63BC] text-white font-semibold shadow-[0_10px_30px_rgba(31,78,157,0.28)] hover:-translate-y-1 transition-all duration-300"
            >
              Explore Courses →
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-2xl bg-white/85 backdrop-blur-xl text-[#1F4E9D] border border-white/50 font-semibold shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:bg-white transition-all duration-300"
            >
              Book Free Demo
            </Link>

          </div>

          {/* GOOGLE RATING */}
          <div className="mt-8 flex items-center gap-4 flex-wrap">

            <div className="flex text-yellow-500 text-xl">
              ★★★★★
            </div>

            <p className="text-[#5C534B] text-sm">
              Rated <span className="font-semibold">4.9/5</span> by students on
              Google Reviews
            </p>

          </div>

          {/* STATS */}
          <div className="mt-10 pb-2 grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/40">
              <h3 className="text-3xl font-black text-[#1F4E9D]">
                500+
              </h3>

              <p className="text-[#5C534B] mt-1 text-sm">
                Students Trained
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/40">
              <h3 className="text-3xl font-black text-[#1F4E9D]">
                6+
              </h3>

              <p className="text-[#5C534B] mt-1 text-sm">
                Professional Courses
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/40">
              <h3 className="text-3xl font-black text-[#1F4E9D]">
                100%
              </h3>

              <p className="text-[#5C534B] mt-1 text-sm">
                Practical Training
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE SLIDER */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >

          {/* MAIN SLIDER */}
          <div className="relative h-[480px] md:h-[580px] rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-white/40">

            {images.map((img, index) => (

              <motion.img
                key={index}
                src={img}
                alt="Bakery Training"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                  current === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110"
                }`}
              />

            ))}

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-5 left-5 right-5 bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.18)] border border-white/40"
            >

              <p className="text-sm text-[#1F4E9D] font-semibold uppercase tracking-[0.15em]">
                Professional Bakery Training
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-[#2B2521] mt-2 leading-snug">
                Learn By Practicing Real Cakes & Desserts
              </h3>

              <p className="text-[#5C534B] mt-2 text-sm leading-6">
                Practical classes with expert guidance, modern techniques,
                certification, and real baking experience.
              </p>

            </motion.div>

          </div>

          {/* SLIDER DOTS */}
          <div className="flex justify-center gap-3 mt-6 pb-2">

            {images.map((_, index) => (

              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-10 bg-[#1F4E9D]"
                    : "w-3 bg-[#DCCFBE]"
                }`}
              />

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}