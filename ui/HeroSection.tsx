import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero content overlaid on particle canvas */}
      {/* <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center"> */}
      {/* Hero text */}
      {/*  <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl">
            Welcome
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto drop-shadow-lg">
            Experience the intersection of creativity and technology
          </p>

          <div className="flex gap-4 justify-center pt-8">
            <motion.button
              data-cursor-transparent
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors shadow-xl"
            >
              Get Started
            </motion.button>

            <motion.button
              data-cursor-transparent
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/50 text-white rounded-lg hover:bg-white/10 backdrop-blur-sm transition-colors shadow-xl"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div> */}

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-neutral-400"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div> */}
      {/* </motion.div> */}
    </section>
  );
}