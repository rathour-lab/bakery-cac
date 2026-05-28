import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaGraduationCap,
  FaChevronDown,
} from "react-icons/fa";

/* Images */
import g4 from "../assets/g4.jpeg";
import g10 from "../assets/g10.jpeg";
import g16 from "../assets/g16.jpeg";
import g21 from "../assets/g21.jpeg";

export default function Contact() {

  const [course, setCourse] = useState("");
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative overflow-hidden bg-[#f8f4ec] min-h-screen pt-28 pb-14">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#1f4f99]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f5a26f]/20 rounded-full blur-3xl"></div>

 {/* Hero */}
<section className="relative max-w-7xl mx-auto px-6 mb-14">

  <div className="grid lg:grid-cols-2 gap-14 items-center">

    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >

      <p className="inline-flex items-center gap-2 bg-white shadow-md border border-[#ece5db] text-[#1f4f99] px-6 py-2 rounded-full uppercase tracking-[0.25em] text-sm font-semibold">
        <FaGraduationCap />
        Admission Open
      </p>

      <h1 className="text-5xl md:text-7xl font-black text-[#1d1d1d] mt-7 leading-tight">
        Start Your

        <span className="block text-[#1f4f99]">
          Bakery Journey
        </span>

      </h1>

      <p className="mt-6 text-[#666] text-lg leading-8 max-w-2xl">
        Learn professional baking, cake designing, pastry making,
        and advanced bakery skills from expert chefs with practical training.
      </p>

      {/* Features */}
      <div className="mt-8 flex flex-wrap items-center gap-4">

        <div className="bg-white px-5 py-4 rounded-2xl shadow-md border border-[#ece5db] text-[#1d1d1d] font-medium">
          🎓 Certified Courses
        </div>

        <div className="bg-white px-5 py-4 rounded-2xl shadow-md border border-[#ece5db] text-[#1d1d1d] font-medium">
          👨‍🍳 Expert Trainers
        </div>

        <div className="bg-white px-5 py-4 rounded-2xl shadow-md border border-[#ece5db] text-[#1d1d1d] font-medium">
          🧁 Practical Training
        </div>

      </div>

    </motion.div>

    {/* Right Side Premium Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="relative"
    >

      {/* Main Image */}
      <img
        src={g16}
        alt=""
        className="rounded-[2.5rem] h-[500px] w-full object-cover shadow-2xl"
      />

      {/* Floating Card 1 */}
      <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl shadow-2xl p-5 border border-[#ece5db]">

        <p className="text-3xl font-bold text-[#1f4f99]">
          500+
        </p>

        <p className="text-[#666]">
          Students Trained
        </p>

      </div>

      {/* Floating Card 2 */}
      <div className="absolute top-6 -right-6 bg-white rounded-3xl shadow-2xl p-5 border border-[#ece5db]">

        <p className="text-3xl font-bold text-[#f5a26f]">
          7+
        </p>

        <p className="text-[#666]">
          Years Experience
        </p>

      </div>

    </motion.div>

  </div>

</section>

      {/* Main Section */}
      <section className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8 border border-[#ece5db]"
        >

          {/* Top Border */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1f4f99] to-[#f5a26f] rounded-t-[2rem]"></div>

          <h2 className="text-4xl font-bold text-[#1d1d1d] mb-3">
            Apply For Admission
          </h2>

          <p className="text-[#666] mb-8">
            Fill out the form and continue on WhatsApp.
          </p>

          {/* FORM */}
          <div className="space-y-5">

            {/* Name */}
            <div>

              <label className="text-sm font-semibold text-[#444] block mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-[#f8f4ec] border border-[#e4ddd3] rounded-2xl px-5 py-4 focus:border-[#1f4f99] focus:bg-white outline-none transition"
              />

            </div>

            {/* Phone */}
            <div>

              <label className="text-sm font-semibold text-[#444] block mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10);

                  setFormData({
                    ...formData,
                    phone: value,
                  });
                }}
                placeholder="Enter phone number"
                maxLength={10}
                pattern="[0-9]{10}"
                className="w-full bg-[#f8f4ec] border border-[#e4ddd3] rounded-2xl px-5 py-4 focus:border-[#1f4f99] focus:bg-white outline-none transition"
              />

            </div>

            {/* Course Dropdown */}
            <div className="relative">

              <label className="text-sm font-semibold text-[#444] block mb-2">
                Select Course
              </label>

              <div
                onClick={() => setOpen(!open)}
                className="w-full bg-[#f8f4ec] border border-[#e4ddd3] rounded-2xl px-5 py-4 cursor-pointer flex items-center justify-between hover:border-[#1f4f99] transition"
              >

                <span className={course ? "text-[#1d1d1d]" : "text-gray-400"}>
                  {course || "Choose your course"}
                </span>

                <FaChevronDown
                  className={`text-[#1f4f99] transition duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />

              </div>

              {/* Dropdown */}
              {open && (

                <div className="absolute z-30 left-0 w-full mt-3 bg-white rounded-2xl shadow-2xl border border-[#ece5db] overflow-hidden">

                  {[
                    "Basic Baking",
                    "Cake Designing",
                    "Pastry Making",
                    "Advanced Bakery",
                  ].map((item) => (

                    <div
                      key={item}
                      onClick={() => {
                        setCourse(item);
                        setOpen(false);
                      }}
                      className="px-5 py-4 text-[#444] hover:bg-[#f8f4ec] hover:text-[#1f4f99] cursor-pointer transition"
                    >
                      {item}
                    </div>

                  ))}

                </div>

              )}

            </div>

            {/* Message */}
            <div>

              <label className="text-sm font-semibold text-[#444] block mb-2">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full bg-[#f8f4ec] border border-[#e4ddd3] rounded-2xl px-5 py-4 focus:border-[#1f4f99] focus:bg-white outline-none transition resize-none"
              />

            </div>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/917087831409?text=${encodeURIComponent(
                `Hello Cake Academy!

 New Admission Inquiry

 Name: ${formData.name}

 Phone: ${formData.phone}

 Course: ${course}

 Message:
${formData.message}`
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                if (
                  !formData.name ||
                  !formData.phone ||
                  !course ||
                  !formData.message
                ) {
                  e.preventDefault();

                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "All fields are required!",
                    confirmButtonColor: "#1f4f99",
                  });
                }
              }}
              className="group relative mt-7 block"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-[#1f4f99] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

              {/* Main Button */}
              <div className="relative flex items-center justify-between bg-gradient-to-r from-[#1f4f99] to-[#15386d] px-6 py-4 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-all duration-300">

                {/* Left */}
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center">

                    <FaWhatsapp className="text-3xl text-white" />

                  </div>

                  <div className="flex flex-col">

                    <span className="text-blue-100 text-sm font-medium">
                      Quick Admission
                    </span>

                    <span className="text-white text-lg font-bold tracking-wide">
                      Continue on WhatsApp
                    </span>

                  </div>

                </div>

                {/* Right */}
                <div className="flex items-center gap-2">

                  <span className="text-white text-sm hidden sm:block">
                    Get Course Details
                  </span>

                  <div className="w-3 h-3 rounded-full bg-[#f5a26f] animate-pulse"></div>

                </div>

              </div>

            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >

          {/* Info Cards */}
          {[
            {
              icon: <FaMapMarkerAlt />,
              title: "Institute Location",
              desc: "SCO 285, First Floor Sector, 32D Chandigarh",
            },

            {
              icon: <FaPhoneAlt />,
              title: "Call Us",
              desc: "+91 7087831409",
            },

            {
              icon: <FaEnvelope />,
              title: "Email Address",
              desc: "cakeacdofchd@gmail.com",
            },

            {
              icon: <FaClock />,
              title: "Opening Hours",
              desc: "Mon - Sat | 10 AM - 5 PM",
            },

          ].map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] shadow-lg border border-[#ece5db] p-6 flex gap-5 items-center hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1f4f99] to-[#15386d] text-white flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition">

                {item.icon}

              </div>

              <div>

                <h4 className="text-lg font-bold text-[#1d1d1d]">
                  {item.title}
                </h4>

                <p className="text-[#666] mt-1">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

          {/* Google Map */}
          <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#ece5db]">

            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3430.333177337142!2d76.7739774!3d30.7090326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQyJzMyLjUiTiA3NsKwNDYnMjYuMyJF!5e0!3m2!1sen!2sin!4v1779780892457!5m2!1sen!2sin"
              className="w-full h-[300px]"
              loading="lazy"
            />

          </div>

        </motion.div>

      </section>

    </div>
  );
}