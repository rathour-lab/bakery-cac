import Hero from "../components/Hero";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaChevronDown,
} from "react-icons/fa";
import { useState } from "react";

const courses = [
  {
    title: "Basic Baking",
    desc: "Learn cakes, cupcakes, brownies, and baking fundamentals.",
    icon: "🧁",
    image:
      "https://www.allrecipes.com/thmb/riDYvmalWk8QgJDBT_pZRkpfpR0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/17377-chocolate-cupcakes-DDMFS-4x3-622a7a66fcd84692947794ed385dc991.jpg",
  },
  {
    title: "Cake Designing",
    desc: "Master cream frosting, fondant art, and theme cakes.",
    icon: "🎂",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Pastry Making",
    desc: "Create bakery-style pastries and premium desserts.",
    icon: "🥐",
    image:
      "https://images.stockcake.com/public/b/8/b/b8bca4f2-33d0-40cb-a267-d57d747713cc_large/assorted-breakfast-pastries-stockcake.jpg",
  },
];

const galleryImages = [
  "https://theobroma.in/cdn/shop/files/EgglessRichChocolatePastry.jpg?v=1750341628",
  "https://api.floraindia.com/upload/NIWHjj52241754041542318.webp",
  "https://img.magnific.com/free-photo/delicious-donuts-with-topping-arrangement_23-2150705319.jpg?semt=ais_hybrid&w=740&q=80",
  "https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1467217212710-PAI8I4NKWGI7EGX0M00P/IMG_5723.jpg",
];

const faqs = [
  {
    q: "Do beginners join this course?",
    a: "Yes, our bakery courses are beginner-friendly with step-by-step practical training.",
  },
  {
    q: "Will certificate be provided?",
    a: "Yes, professional certification is provided after course completion.",
  },
  {
    q: "Are classes practical?",
    a: "Yes, all classes are focused on hands-on baking and cake decoration practice.",
  },
  {
    q: "How can I book a demo class?",
    a: "You can contact us through WhatsApp, phone call, or the contact form.",
  },
];

function FAQItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;

  return (
    <div className="bg-white rounded-3xl border border-[#E8DED1] overflow-hidden">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <h3 className="font-semibold text-[#2B2521] text-lg">
          {item.q}
        </h3>

        <FaChevronDown
          className={`text-[#1F4E9D] transition ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-40 pb-6 px-6" : "max-h-0"
        }`}
      >
        <p className="text-[#5C534B] leading-7">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full overflow-hidden">

      <Hero />

      {/* COURSES */}
      <section className="py-16 bg-[#F7F1E7] relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">

          {/* HEADING */}
          <div className="text-center mb-12">

            <p className="text-[#1F4E9D] font-semibold uppercase tracking-[0.3em]">
              Our Courses
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#2B2521]">
              Learn Professional Baking Skills
            </h2>

            <p className="text-[#5C534B] mt-5 max-w-2xl mx-auto leading-8">
              Practical bakery training designed for beginners and future professionals.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {courses.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-lg border border-[#E8DED1] hover:-translate-y-2 transition-all duration-300"
              >

                {/* IMAGE */}
                <div className="relative h-60 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/20"></div>

                  <div className="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-lg flex items-center justify-center text-3xl shadow-lg">
                    {item.icon}
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-7">

                  <h3 className="text-2xl font-bold text-[#2B2521]">
                    {item.title}
                  </h3>

                  <p className="text-[#5C534B] mt-4 leading-7">
                    {item.desc}
                  </p>

                  <Link
                    to="/courses"
                    className="inline-block mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#1F4E9D] to-[#2D63BC] text-white font-medium shadow-lg hover:scale-[1.02] transition duration-300"
                  >
                    Join Course
                  </Link>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2.5rem]"
            >

              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop"
                alt="Bakery Students"
                className="rounded-[2.5rem] shadow-2xl h-[550px] w-full object-cover"
              />

              {/* CARD */}
              <div className="absolute bottom-6 left-6 bg-white p-5 rounded-3xl shadow-xl border border-[#E8DED1] max-w-[220px]">

                <h3 className="text-4xl font-bold text-[#1F4E9D]">
                  500+
                </h3>

                <p className="text-[#5C534B] mt-2 text-sm leading-6">
                  Students Successfully Trained
                </p>

              </div>

            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <p className="text-[#1F4E9D] font-semibold uppercase tracking-[0.3em]">
                Why Choose Us
              </p>

              <h2 className="text-4xl md:text-5xl font-extrabold mt-5 text-[#2B2521] leading-tight">
                Turn Your Passion Into

                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1F4E9D] to-[#2D63BC]">
                  Professional Skills
                </span>

              </h2>

              <p className="text-[#5C534B] mt-7 leading-8 text-lg">
                Learn modern baking techniques through practical sessions,
                expert guidance, and real bakery experience.
              </p>

              {/* FEATURES */}
              <div className="mt-10 space-y-5">

                {[
                  {
                    icon: "👨‍🍳",
                    title: "100% Practical Training",
                    desc: "Hands-on classes with real baking equipment.",
                  },
                  {
                    icon: "🏆",
                    title: "Certified Courses",
                    desc: "Professional certification after course completion.",
                  },
                  {
                    icon: "⭐",
                    title: "Expert Mentors",
                    desc: "Learn directly from experienced bakery chefs.",
                  },
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex gap-5 bg-[#F7F1E7] p-5 rounded-3xl border border-[#E8DED1]"
                  >

                    <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#2B2521]">
                        {item.title}
                      </h3>

                      <p className="text-[#5C534B] mt-2 leading-7">
                        {item.desc}
                      </p>
                    </div>

                  </div>

                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="py-16 bg-[#F7F1E7] overflow-hidden">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="text-center mb-12">

            <p className="text-[#1F4E9D] font-semibold uppercase tracking-[0.3em]">
              Student Work
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#2B2521]">
              Real Cakes & Bakery Creations
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {galleryImages.map((img, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-lg"
              >

                <img
                  src={img}
                  alt="Student Work"
                  className="w-full h-72 object-cover hover:scale-[1.02] transition duration-500"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FAQ */}
      <section className="py-16 bg-white overflow-hidden">

        <div className="max-w-4xl mx-auto px-5 md:px-6">

          <div className="text-center mb-12">

            <p className="text-[#1F4E9D] font-semibold uppercase tracking-[0.3em]">
              FAQs
            </p>

            <h2 className="text-4xl font-bold mt-4 text-[#2B2521]">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-5">

            {faqs.map((item, index) => (

              <FAQItem
                key={index}
                item={item}
                index={index}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}