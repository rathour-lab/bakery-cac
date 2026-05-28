import React from "react";
import {
  GraduationCap,
  Clock,
  Award,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

/* Original Images */
import g33 from "../assets/g33.jpeg";
import g27 from "../assets/g27.jpeg";

function BeyondAdvancedCourse() {

   const learnItems = [
    {
      title: "Master Chef Level Baking",
      desc: "World-class bakery techniques used in Michelin-level patisseries and luxury hotels.",
    },
    {
      title: "Artisan Bread & Sourdough Mastery",
      desc: "Natural fermentation, wild yeast culture, and premium artisan bread creation.",
    },
    {
      title: "Luxury Dessert Innovation",
      desc: "Create high-end plated desserts with restaurant-level presentation.",
    },
    {
      title: "Sugar & Chocolate Showpieces",
      desc: "Wedding centerpiece sculptures and artistic edible designs.",
    },
    {
      title: "International Bakery Specialization",
      desc: "French, Italian, and modern fusion bakery mastery.",
    },
    {
      title: "Bakery Business Empire Setup",
      desc: "Brand creation, pricing strategy, franchise model, and scaling bakery business globally.",
    },
  ];
  return (

    <div className="min-h-screen bg-[#f8f4ec] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-14 px-4 overflow-hidden">

        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#1f4f99]/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#f5a26f]/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white shadow-md border border-[#ece5db] px-5 py-2 rounded-full text-[#1f4f99] font-semibold mb-6">

              <Sparkles size={18} />

              Bakery Training Program

            </div>

            <h1 className="text-5xl md:text-6xl font-black text-[#1d1d1d] leading-tight mb-6">

              Beyond Advanced

              <span className="block text-[#1f4f99]">
                Course
              </span>

            </h1>

            <p className="text-lg text-[#666] leading-8 mb-8 max-w-xl">

             Masterclass-level training combining showpieces, advanced patisserie, large-event dessert work and bakery business management.
           
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <button
                onClick={() => {
                  document
                    .getElementById("course-highlights")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white border border-[#d8d1c8] text-[#1d1d1d] px-8 py-4 rounded-2xl font-semibold shadow-sm hover:bg-[#f3eee7] hover:shadow-md duration-300"
              >

                View Course Details

              </button>

              <button
                onClick={() => {

                  const phoneNumber = "7087831409";

                   const message = `
Hello Cake Academy of Chandigarh,

I want to enroll in Advance Baking Course.

Course:Beyond Advanced Baking Course
Duration:9–12 months
Level: Professional / Entrepreneur

Please share:
- Fee Structure
- Class Timings
- Admission Process
- Course Details

Thank you
        `;

                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

                  window.open(url, "_blank");

                }}
                className="bg-gradient-to-r from-[#1f4f99] to-[#15386d] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 duration-300 flex items-center gap-2"
              >

                Quick Enquiry

                <ArrowRight size={18} />

              </button>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mt-10">

              <div className="bg-white rounded-3xl p-5 shadow-lg border border-[#ece5db]">

                <h3 className="text-3xl font-bold text-[#1f4f99]">
                  9–12
                </h3>

                <p className="text-[#666] text-sm mt-1">
                  Months
                </p>

              </div>

              <div className="bg-white rounded-3xl p-5 shadow-lg border border-[#ece5db]">

                <h3 className="text-3xl font-bold text-[#f5a26f]">
                  100%
                </h3>

                <p className="text-[#666] text-sm mt-1">
                  Practical
                </p>

              </div>

              <div className="bg-white rounded-3xl p-5 shadow-lg border border-[#ece5db]">

                <h3 className="text-3xl font-bold text-[#1f4f99]">
                  24/7
                </h3>

                <p className="text-[#666] text-sm mt-1">
                  Support
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Main Image */}
            <img
              src={g27}
              alt="Basic Baking Course"
              className="relative  w-full h-[520px] object-cover rounded-[40px] shadow-2xl border-4 border-white"
            />

            {/* Floating Image */}
            <img
              src={g33}
              alt=""
              className="absolute -bottom-8 -left-8 w-48 h-48 object-cover rounded-[2rem] border-8 border-white shadow-2xl hidden md:block"
            />

            {/* Floating Card */}
            <div className="absolute top-6 -right-4 bg-white/95 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-[#ece5db] z-20 hidden md:block">

              <p className="text-sm text-[#666] mb-1">
                Course Level
              </p>

              <h3 className="text-2xl font-bold text-[#1d1d1d]">
               Beyond Advance Friendly
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* INFO CARDS */}
      <section className="px-4 pb-14">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

          {/* Duration */}
          <div className="group bg-white rounded-[30px] p-7 shadow-lg border border-[#ece5db] hover:-translate-y-2 duration-300">

            <div className="w-16 h-16 rounded-2xl bg-[#edf3fc] flex items-center justify-center mb-5 group-hover:bg-[#1f4f99] duration-300">

              <Clock
                className="text-[#1f4f99] group-hover:text-white duration-300"
                size={30}
              />

            </div>

            <h3 className="text-2xl font-bold text-[#1d1d1d] mb-2">
              Duration
            </h3>

            <p className="text-[#666] text-lg">
             9-12 Months Intensive Training
            </p>

          </div>

          {/* Skill */}
          <div className="group bg-white rounded-[30px] p-7 shadow-lg border border-[#ece5db] hover:-translate-y-2 duration-300">

            <div className="w-16 h-16 rounded-2xl bg-[#fff1e7] flex items-center justify-center mb-5 group-hover:bg-[#f5a26f] duration-300">

              <GraduationCap
                className="text-[#f5a26f] group-hover:text-white duration-300"
                size={30}
              />

            </div>

            <h3 className="text-2xl font-bold text-[#1d1d1d] mb-2">
              Skill Level
            </h3>

            <p className="text-[#666] text-lg">
                Perfect for  Professional / Entrepreneur 
            </p>

          </div>

          {/* Certificate */}
          <div className="group bg-white rounded-[30px] p-7 shadow-lg border border-[#ece5db] hover:-translate-y-2 duration-300">

            <div className="w-16 h-16 rounded-2xl bg-[#edf3fc] flex items-center justify-center mb-5 group-hover:bg-[#1f4f99] duration-300">

              <Award
                className="text-[#1f4f99] group-hover:text-white duration-300"
                size={30}
              />

            </div>

            <h3 className="text-2xl font-bold text-[#1d1d1d] mb-2">
              Certification
            </h3>

            <p className="text-[#666] text-lg">
              Industry Recognized Certificate
            </p>

          </div>

        </div>

      </section>

      {/* WHAT YOU LEARN */}
      <section
        id="course-highlights"
        className="px-4 pb-16"
      >

        <div className="max-w-7xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-[#ece5db]">

          {/* Top */}
          <div className="text-center mb-12">

            <span className="bg-[#edf3fc] text-[#1f4f99] px-4 py-2 rounded-full text-sm font-semibold">

              Course Highlights

            </span>

            <h2 className="text-4xl md:text-5xl font-black text-[#1d1d1d] mt-5 mb-4">

              What You’ll Learn

            </h2>

            <p className="text-[#666] text-lg max-w-2xl mx-auto">

              Practical baking skills designed to help you confidently
              begin your professional baking journey.

            </p>

          </div>

          {/* Learn Grid */}
          <div className="grid md:grid-cols-2 gap-6">

            {learnItems.map((item, index) => (

              <div
                key={index}
                className="group bg-[#f8f4ec] hover:bg-[#1f4f99] p-7 rounded-3xl duration-300 shadow-md hover:shadow-2xl"
              >

                <div className="flex gap-4 items-start">

                  <div className="min-w-[55px] h-[55px] rounded-2xl bg-white flex items-center justify-center shadow-md">

                    <CheckCircle
                      className="text-[#1f4f99]"
                      size={28}
                    />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-[#1d1d1d] group-hover:text-white duration-300 mb-2">

                      {item.title}

                    </h3>

                    <p className="text-[#666] group-hover:text-blue-100 duration-300 leading-relaxed">

                      {item.desc}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-[#526d82] via-[#6b8296] to-[#8aa0b2] rounded-[35px] p-10 text-center text-white shadow-xl">
            <h2 className="text-4xl font-bold mb-4">
              Ready To Start Baking?
            </h2>

            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">

              Join our beginner-friendly baking course and turn your
              passion into professional skills.

            </p>

            {/* BUTTON */}
            <div className="flex justify-center">

              <button
                onClick={() => {

                   const phoneNumber = "7087831409";

                   const message = `
Hello Cake Academy of Chandigarh,

I want to enroll in Advance Baking Course.

Course:Beyond Advanced Baking Course
Duration:9–12 months
Level: Professional / Entrepreneur

Please share:
- Fee Structure
- Class Timings
- Admission Process
- Course Details

Thank you
        `;
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

                  window.open(url, "_blank");

                }}
                className="group relative overflow-hidden bg-white text-[#1f4f99] px-10 py-4 rounded-2xl font-bold shadow-xl hover:shadow-white/40 hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >

                <span className="relative z-10">
                  Enroll Now
                </span>

                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>

              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default BeyondAdvancedCourse;