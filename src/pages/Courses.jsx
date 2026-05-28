import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* Original Images */
import g25 from "../assets/g25.webp";
import g26 from "../assets/g26.jpeg";
import g28 from "../assets/g28.jpeg";
import g27 from "../assets/g27.jpeg";
import g30 from "../assets/g30.jpeg";

const courses = [
  {
    title: "Basic Baking Course",
    desc: "Perfect for beginners to learn cakes, cookies, pastries, frosting, and bakery fundamentals.",
    duration: "4 Weeks",
    level: "Beginner",
    highlights: [
      "Kitchen Safety",
      "Basic Doughs",
      "Simple Pastries",
    ],
    image: g25,
    link: "/basic-course",
  },

  {
    title: "Moderate Baking Course",
    desc: "Build strong baking skills with layered cakes, decorative piping, breads, and presentation.",
    duration: "3 Months",
    level: "Beginner → Intermediate",
    highlights: [
      "Layer Cakes",
      "Advanced Dough",
      "Decorative Finishing",
    ],
    image: g26,
    link: "/moderate-course",
  },

  {
    title: "Advance Baking Course",
    desc: "Professional training in chocolate work, plated desserts, viennoiserie, and bakery techniques.",
    duration: "6 Months",
    level: "Intermediate → Advanced",
    highlights: [
      "Chocolate Work",
      "Plated Desserts",
      "Quality Control",
    ],
    image: g28,
    link: "/advance-course",
  },

  {
    title: "Beyond Advance Course",
    desc: "Masterclass-level bakery program with business setup, sugar art, and event dessert production.",
    duration: "9–12 Months",
    level: "Professional",
    highlights: [
      "Sugar Art",
      "Bakery Business",
      "Portfolio Training",
    ],
    image: g27,
    link: "/beyond-advance-course",
  },
];

export default function Courses() {

  return (
    <div className="bg-[#f8f4ec] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-14 overflow-hidden">

        {/* Background Blur */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#1f4f99]/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#f5a26f]/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#1f4f99] font-semibold uppercase tracking-[0.35em]"
            >
              Professional Bakery Programs
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-5xl md:text-7xl font-black text-[#1d1d1d] leading-tight"
            >

              Explore Our

              <span className="block text-[#1f4f99]">
                Bakery Courses
              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-7 text-lg text-[#666] max-w-2xl leading-8"
            >

              From beginner baking to professional cake artistry,
              our courses are designed to build real-world bakery
              skills with practical training.

            </motion.p>

            {/* Small Features */}
            <div className="mt-8 flex flex-wrap gap-4">

              <div className="bg-white px-5 py-4 rounded-2xl shadow-md border border-[#ece5db]">
                🎓 Certified Courses
              </div>

              <div className="bg-white px-5 py-4 rounded-2xl shadow-md border border-[#ece5db]">
                👨‍🍳 Expert Training
              </div>

              <div className="bg-white px-5 py-4 rounded-2xl shadow-md border border-[#ece5db]">
                🧁 Practical Classes
              </div>

            </div>

          </div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* Main Image */}
            <img
              src={g30}
              alt=""
              className="rounded-[2.5rem] h-[520px] w-full object-cover shadow-2xl"
            />

            {/* Floating Image */}
            <img
              src={g28}
              alt=""
              className="absolute -bottom-10 -left-10 w-52 h-52 object-cover rounded-[2rem] border-8 border-white shadow-2xl hidden md:block"
            />

            {/* Floating Card */}
            <div className="absolute top-8 -right-6 bg-white rounded-3xl shadow-2xl px-6 py-5 border border-[#ece5db] hidden md:block">

              <h3 className="text-3xl font-bold text-[#1f4f99]">
                500+
              </h3>

              <p className="text-[#666]">
                Students Trained
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* COURSES GRID */}
      <section className="py-14">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-8">

            {courses.map((course, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-[#ece5db] hover:shadow-2xl transition-all duration-500"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-[280px] w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                  {/* Level Badge */}
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-lg px-5 py-2 rounded-full text-sm font-semibold text-[#1f4f99] shadow-lg">

                    {course.level}

                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-5 right-5 bg-gradient-to-r from-[#1f4f99] to-[#15386d] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">

                    {course.duration}

                  </div>

                </div>

                {/* Content */}
                <div className="p-7">

                  <h2 className="text-3xl font-bold text-[#1d1d1d] group-hover:text-[#1f4f99] transition">

                    {course.title}

                  </h2>

                  <p className="mt-4 text-[#666] leading-8">

                    {course.desc}

                  </p>

                  {/* Features */}
                  <div className="mt-6 space-y-3">

                    {course.highlights.map((feature, i) => (

                      <div
                        key={i}
                        className="flex items-center gap-3 text-[#444]"
                      >

                        <div className="w-3 h-3 rounded-full bg-[#f5a26f]"></div>

                        <p>{feature}</p>

                      </div>

                    ))}

                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-wrap gap-4">

                    <Link
                      to={course.link}
                      className="px-7 py-4 rounded-full bg-gradient-to-r from-[#1f4f99] to-[#15386d] text-white font-semibold shadow-xl hover:scale-105 transition duration-300"
                    >
                      View Details →
                    </Link>

                    <Link
                      to="/contact"
                      className="px-7 py-4 rounded-full border border-[#d8d1c8] bg-[#f8f4ec] text-[#1d1d1d] font-semibold hover:bg-white transition"
                    >
                      Enroll Now
                    </Link>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}