import { motion } from "framer-motion";
import {
  FaHeart,
  FaLeaf,
  FaUsers,
  FaGraduationCap,
  FaCheckCircle,
} from "react-icons/fa";

import g4 from "../assets/g4.jpeg";
import g10 from "../assets/g10.jpeg";
import g16 from "../assets/g16.jpeg";
import g19 from "../assets/g19.jpeg";
import g21 from "../assets/g21.jpeg";

const values = [
  {
    icon: <FaHeart className="text-[#1f4f99] text-3xl" />,
    title: "Practical Learning",
    description:
      "We focus on hands-on training so students learn real bakery skills step by step.",
  },

  {
    icon: <FaLeaf className="text-[#f5a26f] text-3xl" />,
    title: "Professional Techniques",
    description:
      "Learn industry-standard baking methods used in modern bakeries and cake studios.",
  },

  {
    icon: <FaGraduationCap className="text-[#1f4f99] text-3xl" />,
    title: "Certified Courses",
    description:
      "Get structured courses from basic to advanced level with proper guidance.",
  },

  {
    icon: <FaUsers className="text-[#f5a26f] text-3xl" />,
    title: "Expert Mentors",
    description:
      "Train under experienced chefs who guide you in every step of your journey.",
  },
];

export default function About() {
  return (
    <div className="bg-[#f8f4ec] overflow-hidden">

      {/* Hero Section */}
      <section className="relative pt-20 pb-10 md:pt-24 md:pb-14">

        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#1f4f99]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#f5a26f]/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center relative z-10">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-[#1f4f99] uppercase tracking-[0.25em] font-semibold mb-3 text-sm">
              About Our Institute
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-[#1d1d1d] leading-tight">
              Learn Professional Bakery Skills From Experts
            </h1>

            <p className="mt-4 text-[#5f5f5f] leading-7 text-base md:text-lg">
              We are a professional bakery training institute where students
              learn baking, cake designing, pastries, cookies, and desserts
              with complete practical hands-on training.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="bg-white rounded-[1.7rem] shadow-lg p-5 border border-[#ece5db]">

                <h3 className="text-3xl md:text-4xl font-bold text-[#1f4f99]">
                  7+
                </h3>

                <p className="text-[#666] mt-1 text-sm md:text-base">
                  Years Training Experience
                </p>

              </div>

              <div className="bg-white rounded-[1.7rem] shadow-lg p-5 border border-[#ece5db]">

                <h3 className="text-3xl md:text-4xl font-bold text-[#1f4f99]">
                  500+
                </h3>

                <p className="text-[#666] mt-1 text-sm md:text-base">
                  Students Trained
                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >

            <img
              src={g4}
              alt=""
              className="rounded-[1.8rem] h-[220px] md:h-[240px] w-full object-cover shadow-xl"
            />

            <img
              src={g21}
              alt=""
              className="rounded-[1.8rem] h-[220px] md:h-[240px] w-full object-cover shadow-xl mt-6"
            />

            <img
              src={g16}
              alt=""
              className="rounded-[1.8rem] h-[220px] md:h-[240px] w-full object-cover shadow-xl -mt-6"
            />

            <img
              src={g10}
              alt=""
              className="rounded-[1.8rem] h-[220px] md:h-[240px] w-full object-cover shadow-xl"
            />

          </motion.div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-10 md:py-14 bg-white">

        <div className="max-w-7xl mx-auto px-5 text-center mb-8">

          <p className="text-[#1f4f99] uppercase tracking-[0.2em] font-semibold text-sm">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-[#1d1d1d]">
            What We Teach
          </h2>

        </div>

        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          {values.map((value, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-[#f8f4ec] rounded-[1.8rem] shadow-md p-6 text-center border border-[#ece5db]"
            >

              <div className="mb-4 flex justify-center">
                {value.icon}
              </div>

              <h3 className="text-xl font-bold mb-2 text-[#1d1d1d]">
                {value.title}
              </h3>

              <p className="text-[#666] leading-6 text-sm md:text-base">
                {value.description}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Baking Journey */}
      <section className="py-10 md:py-14 bg-[#f8f4ec]">

        <div className="max-w-7xl mx-auto px-5 text-center">

          <p className="text-[#1f4f99] uppercase tracking-[0.2em] font-semibold text-sm">
            Journey
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-[#1d1d1d]">
            Your Baking Journey
          </h2>

          <div className="grid md:grid-cols-4 gap-5 mt-10">

            {[
              "Learn Basics",
              "Practice Live",
              "Create Masterpieces",
              "Start Your Baking Career",
            ].map((step, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[1.8rem] p-6 shadow-md border border-[#ece5db] relative overflow-hidden"
              >

                {/* Top Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1f4f99] to-[#f5a26f]"></div>

                {/* Number */}
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#1f4f99]/10 text-[#1f4f99] flex items-center justify-center text-xl font-bold">
                  0{index + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mt-5 leading-snug text-[#1d1d1d]">
                  {step}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Certificate Section */}
      <section className="py-10 md:py-14 bg-white">

        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <img
              src={g19}
              alt="Certificate"
              className="rounded-[2rem] shadow-xl w-full max-w-md mx-auto object-cover"
            />

          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-[#1f4f99] uppercase tracking-[0.25em] font-semibold text-sm">
              Certification
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-3 text-[#1d1d1d] leading-tight">
              Become a Certified Baker
            </h2>

            <p className="text-[#666] mt-4 leading-7 text-base md:text-lg">
              Complete your bakery training with hands-on practical learning
              and receive a professional certificate that showcases your
              baking skills and achievements.
            </p>

            <div className="mt-6 space-y-4">

              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-[#1f4f99] text-lg mt-1" />

                <p className="text-[#444]">
                  Professional Course Completion Certificate
                </p>

              </div>

              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-[#1f4f99] text-lg mt-1" />

                <p className="text-[#444]">
                  Practical & Industry-Based Training
                </p>

              </div>

              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-[#1f4f99] text-lg mt-1" />

                <p className="text-[#444]">
                  Career & Business Guidance Support
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
}