import { useEffect, useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaGoogle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Manpreet Singh",
    course: "Cake Designing Course",
    image:
      "https://img.magnific.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
    review:
      "If you want to become a professional baker, this is the best place to learn. Rajpriya mam explains everything very clearly and gives proper hands-on practice. Highly recommended for beginners as well as advanced learners.",
  },
  {
    id: 2,
    name: "Anita Gaur",
    course: "Basic Baking Course",
    image:
      "https://img.magnific.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
    review:
      "I joined this academy at the age of 63 and had a wonderful experience. There is no age limit for learning here. Every student gets personal attention and practical training. One of the best bakery academies in Tricity.",
  },
  {
    id: 3,
    name: "Richu Pupneja",
    course: "Professional Baking Course",
    image:
      "https://img.magnific.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
    review:
      "I completed my 3 months baking course from CAC and the experience was amazing. The academy focuses more on practical learning and provides excellent after-class support. Totally worth every penny.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="py-10 md:py-14 bg-[#FFFDF9] relative overflow-hidden">
      
      {/* BACKGROUND BLOBS */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D8B08C]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E8D5C4]/20 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto px-5 relative z-10">
        
        {/* HEADING */}
        <div className="text-center mb-8">
          
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8DED1] px-4 py-2 rounded-full shadow-sm">
            <FaGoogle className="text-[#4285F4]" />

            <span className="text-sm font-semibold text-[#2B2521]">
              Google Reviews
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#2B2521] mt-4 leading-tight">
            What Our Students Say
          </h2>

          <p className="text-[#5C534B] mt-3 max-w-2xl mx-auto leading-7 text-[15px] md:text-base">
            Real feedback from students who joined our bakery &
            cake designing courses.
          </p>
        </div>

        {/* REVIEW CARD */}
        <div className="relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-[#EEE4D8] rounded-[2rem] shadow-lg p-6 md:p-8 relative"
            >
              
              {/* TOP */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                {/* USER */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-[#F7F1E7]"
                  />

                  <div>
                    <h3 className="text-xl font-bold text-[#2B2521]">
                      {testimonial.name}
                    </h3>

                    <p className="text-[#A06B42] font-medium text-sm mt-1">
                      {testimonial.course}
                    </p>

                    {/* STARS */}
                    <div className="flex gap-1 mt-2 text-yellow-400 text-sm">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* VERIFIED BADGE */}
                <div className="flex items-center gap-2 bg-[#F7F7F7] px-4 py-2 rounded-full border border-[#E8DED1] w-fit">
                  <FaGoogle className="text-[#4285F4]" />

                  <span className="text-sm font-medium text-[#2B2521]">
                    Verified Google Review
                  </span>
                </div>
              </div>

              {/* QUOTE ICON */}
              <div className="w-12 h-12 rounded-xl bg-[#F7F1E7] flex items-center justify-center mt-6 mb-4">
                <FaQuoteLeft className="text-[#A06B42]" />
              </div>

              {/* REVIEW */}
              <p className="text-[#5C534B] text-[15px] md:text-lg leading-7 md:leading-8">
                “{testimonial.review}”
              </p>
            </motion.div>
          </AnimatePresence>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-[#A06B42]"
                    : "w-2.5 bg-[#D8C5B3]"
                }`}
              />
            ))}
          </div>

          {/* BOTTOM STATS */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            
            <div className="bg-white border border-[#E8DED1] rounded-2xl px-5 py-3 shadow-sm flex items-center gap-3">
              <FaGoogle className="text-[#4285F4] text-xl" />

              <div>
                <h3 className="font-bold text-[#2B2521]">
                  4.9/5 Rating
                </h3>

                <p className="text-xs text-[#5C534B]">
                  Based on student reviews
                </p>
              </div>
            </div>

            <div className="bg-[#A06B42] text-white rounded-2xl px-5 py-3 shadow-md">
              <p className="font-medium text-sm">
                ⭐ Trusted By 500+ Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}