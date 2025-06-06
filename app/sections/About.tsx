import { motion } from "framer-motion";

function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-mono text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8"
      >
        {"~$ cat about.txt"}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed"
      >
        <p className="text-base sm:text-lg">
          I'm a passionate frontend developer who believes in the power of clean
          code and thoughtful design. My journey began with curiosity about how
          digital experiences come to life.
        </p>

        <p className="text-sm sm:text-base">
          I specialize in React, Next.js, and modern web technologies. I enjoy
          creating interfaces that are not only functional but also delightful
          to use.
        </p>

        <p className="text-sm sm:text-base">
          When I'm not coding, you can find me exploring new technologies,
          reading about design, or enjoying coffee.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 sm:mt-12"
      >
        <div className="font-mono text-xs text-gray-500 mb-4">
          {"// Skills"}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm">
          <div>
            <div className="text-gray-400 mb-2">Frontend</div>
            <div className="text-gray-600 space-y-1 text-xs sm:text-sm">
              <div>React / Next.js</div>
              <div>TypeScript</div>
              <div>Tailwind CSS</div>
            </div>
          </div>
          <div>
            <div className="text-gray-400 mb-2">Tools</div>
            <div className="text-gray-600 space-y-1 text-xs sm:text-sm">
              <div>Git / GitHub</div>
              <div>Vercel</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutSection;
