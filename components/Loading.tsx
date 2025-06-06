import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-center"
      >
        <motion.div
          className="font-mono text-xs sm:text-sm mb-8"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {"~$ loading portfolio..."}
        </motion.div>
        <motion.div
          className="w-24 sm:w-32 h-0.5 bg-white mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
export default LoadingScreen;
