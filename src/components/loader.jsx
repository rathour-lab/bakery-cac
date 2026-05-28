import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#f8f4ef]"
      >
        {/* SOFT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f4ef] via-[#fdfaf7] to-[#f6eee5]" />

        {/* BLUR EFFECTS */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute w-[420px] h-[420px] bg-[#1F4E9D]/10 blur-3xl rounded-full"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#F6B7A7]/20 blur-3xl rounded-full"
        />

        {/* ROTATING RING */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[300px] h-[300px] border border-[#1F4E9D]/10 rounded-full"
        />

        {/* CONTENT */}
        <div className="relative flex flex-col items-center px-6">

          {/* LOGO */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="relative"
          >
            {/* OUTER GLOW */}
            <div className="absolute inset-0 bg-[#1F4E9D]/10 blur-2xl rounded-full"></div>

            {/* LOGO CONTAINER */}
            <div className="relative bg-white/80 backdrop-blur-xl p-4 rounded-full border border-[#E8DED1] shadow-[0_10px_40px_rgba(31,78,157,0.12)]">
              <img
                src="/logo.png"
                alt="Cake Academy Logo"
                className="w-40 h-40 md:w-48 md:h-48 object-contain rounded-full"
              />
            </div>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-3xl md:text-5xl font-black text-[#2B2521] tracking-wide text-center"
          >
            CAKE ACADEMY
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-2 text-[#1F4E9D] uppercase tracking-[0.45em] text-xs md:text-sm font-semibold"
          >
            Of Chandigarh
          </motion.p>

          {/* LOADING DOTS */}
          <div className="flex gap-3 mt-8">
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: dot * 0.2,
                }}
                className="w-3 h-3 rounded-full bg-[#F6B7A7]"
              />
            ))}
          </div>

          {/* TEXT */}
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-5 text-[#6b625c] text-xs md:text-sm tracking-[0.3em] uppercase text-center"
          >
            Baking Sweet Experiences
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}