import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaSearchPlus,
  FaBirthdayCake,
} from "react-icons/fa";

/* Images */
import g1 from "../assets/g1.jpeg";
import g2 from "../assets/g2.jpeg";
import g3 from "../assets/g3.jpeg";
import g4 from "../assets/g4.jpeg";
import g5 from "../assets/g5.jpeg";
import g6 from "../assets/g6.jpeg";
import g7 from "../assets/g7.jpeg";
import g8 from "../assets/g8.jpeg";
import g9 from "../assets/g9.jpeg";
import g10 from "../assets/g10.jpeg";
import g11 from "../assets/g11.jpeg";
import g12 from "../assets/g12.jpeg";
import g13 from "../assets/g13.jpeg";
import g14 from "../assets/g14.jpeg";
import g15 from "../assets/g15.jpeg";
import g16 from "../assets/g16.jpeg";
import g17 from "../assets/g17.jpeg";
import g18 from "../assets/g18.jpeg";
import g19 from "../assets/g19.jpeg";
import g20 from "../assets/g20.jpeg";
import g21 from "../assets/g21.jpeg";
import g22 from "../assets/g22.jpeg";
import g23 from "../assets/g23.jpeg";
import g24 from "../assets/g24.jpeg";

const galleryImages = [
  {
    id: 1,
    image: g1,
    title: "Certificate Distribution",
    category: "Certificates",
  },

  {
    id: 2,
    image: g24,
    title: "Students Achievement",
    category: "Certificates",
  },

  {
    id: 3,
    image: g3,
    title: "Certified Students",
    category: "Certificates",
  },

  {
    id: 4,
    image: g4,
    title: "Practical Training Session",
    category: "Training",
  },

  {
    id: 5,
    image: g2,
    title: "Student Certification",
    category: "Certificates",
  },

  {
    id: 6,
    image: g5,
    title: "Bakery Course Completion",
    category: "Certificates",
  },

  {
    id: 7,
    image: g7,
    title: "Successful Students",
    category: "Certificates",
  },

  {
    id: 8,
    image: g8,
    title: "Homemade Cookies",
    category: "Bakery Items",
  },

  {
    id: 9,
    image: g9,
    title: "Freshly Baked Cookies",
    category: "Bakery Items",
  },

  {
    id: 10,
    image: g10,
    title: "Birthday Theme Cake",
    category: "Cakes",
  },

  {
    id: 11,
    image: g11,
    title: "Custom Celebration Cake",
    category: "Cakes",
  },

  {
    id: 12,
    image: g12,
    title: "Designer Birthday Cake",
    category: "Cakes",
  },

  {
    id: 13,
    image: g13,
    title: "Chocolate Cream Cake",
    category: "Cakes",
  },

  {
    id: 14,
    image: g14,
    title: "Floral Designer Cake",
    category: "Cakes",
  },

  {
    id: 15,
    image: g15,
    title: "Sweet Bakery Cookies",
    category: "Bakery Items",
  },

  {
    id: 16,
    image: g16,
    title: "Students During Training",
    category: "Training",
  },

  {
    id: 17,
    image: g17,
    title: "Jeera Cookies",
    category: "Bakery Items",
  },

  {
    id: 18,
    image: g18,
    title: "Certificate Ceremony",
    category: "Certificates",
  },

  {
    id: 19,
    image: g19,
    title: "Professional Baking Students",
    category: "Certificates",
  },

  {
    id: 20,
    image: g20,
    title: "Student Success Moment",
    category: "Certificates",
  },

  {
    id: 21,
    image: g21,
    title: "Fresh Fruit Cake",
    category: "Cakes",
  },

  {
    id: 22,
    image: g22,
    title: "Chocolate Shake",
    category: "Beverages",
  },

  {
    id: 23,
    image: g23,
    title: "Chocolate Cookies",
    category: "Bakery Items",
  },
];

const categories = [
  "All",
  "Certificates",
  "Training",
  "Cakes",
  "Bakery Items",
  "Beverages",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div className="bg-[#f6f1e8] min-h-screen pt-24 md:pt-28 pb-20 overflow-hidden">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-5 md:px-6 text-center mb-14">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {/* TOP ICON */}
          <div className="flex justify-center mb-6">

            <div className="w-20 h-20 md:w-24 md:h-24 rounded-[28px] bg-gradient-to-br from-[#1F4E9D] to-[#15386D] text-white flex items-center justify-center shadow-[0_15px_40px_rgba(31,78,157,0.28)] border border-white/30 backdrop-blur-xl">

              <FaBirthdayCake size={36} />

            </div>

          </div>

          <p className="text-[#1F4E9D] uppercase tracking-[0.3em] font-semibold text-sm">
            Cake Academy Gallery
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-[#222] mt-4 leading-[1.1]">
            Student Achievements & Bakery Creations
          </h1>

          <p className="mt-5 text-[#5f5f5f] text-[17px] leading-8 max-w-2xl mx-auto">
            Explore our bakery training sessions, certificate moments,
            student achievements, cakes, cookies, and handcrafted
            bakery creations made during professional classes.
          </p>

        </motion.div>

      </section>

      {/* CATEGORY BUTTONS */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 mb-10">

        <div className="flex flex-wrap justify-center gap-3">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-md

              ${
                activeCategory === category
                  ? "bg-[#1F4E9D] text-white border-[#1F4E9D] shadow-[0_8px_24px_rgba(31,78,157,0.25)]"
                  : "bg-white/70 text-[#444] border-[#d8d2c8] hover:border-[#1F4E9D] hover:text-[#1F4E9D] hover:bg-white"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      </section>

      {/* GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-5 md:px-6">

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-5 space-y-5">

          {filteredImages.map((item) => (

            <motion.div
              key={item.id}
              layout
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-[24px] shadow-[0_10px_35px_rgba(0,0,0,0.10)] cursor-pointer group break-inside-avoid bg-white/40 backdrop-blur-lg border border-white/20"
              onClick={() => setSelectedImage(item)}
            >

              {/* IMAGE */}
              <img
                loading="lazy"
                src={item.image}
                alt={item.title}
                width="500"
                height="500"
                className="w-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* BOTTOM OVERLAY */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">

                <p className="text-white font-bold text-base">
                  {item.title}
                </p>

                <span className="inline-block mt-2 text-xs bg-[#1F4E9D]/80 backdrop-blur-md text-white px-3 py-1 rounded-full">
                  {item.category}
                </span>

              </div>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-[#1F4E9D]/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

                <div className="w-16 h-16 rounded-full bg-white text-[#1F4E9D] flex items-center justify-center shadow-2xl">

                  <FaSearchPlus className="text-2xl" />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>

        {selectedImage && (

          <motion.div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >

            <motion.div
              className="relative max-w-6xl w-full"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-5 -right-2 md:-right-5 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-[#1F4E9D] shadow-2xl flex items-center justify-center text-lg hover:rotate-90 transition duration-300 z-50"
              >

                <FaTimes />

              </button>

              {/* MAIN IMAGE */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[85vh] object-contain rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              />

              {/* CAPTION */}
              <div className="mt-6 text-center">

                <p className="text-[#f5c7a9] uppercase tracking-[0.25em] text-sm mb-2">
                  {selectedImage.category}
                </p>

                <h2 className="text-white text-3xl font-bold">
                  {selectedImage.title}
                </h2>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}