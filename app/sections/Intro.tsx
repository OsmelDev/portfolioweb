import { motion } from "framer-motion";

function IntroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-4xl mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-mono text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8"
      >
        {"~$ whoami"}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-light mb-4 sm:mb-6 tracking-tight leading-tight"
      >
        Osmel Prades
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-lg sm:text-xl md:text-3xl text-gray-400 font-light mb-8 sm:mb-12 px-4"
      >
        Frontend Developer
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="font-mono text-xs sm:text-sm text-gray-600"
      >
        {"Based in Habana, Cuba"}
      </motion.div>
    </motion.div>
  );
}
export default IntroSection;
