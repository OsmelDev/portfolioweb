import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto w-full text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-mono text-xs sm:text-sm text-gray-500 mb-8 sm:mb-12"
      >
        {"~$ contact --help"}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8"
      >
        Let's work together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-gray-400 mb-8 sm:mb-12 leading-relaxed text-sm sm:text-base px-4"
      >
        I am always interested in new opportunities and collaborations. Whether
        you have a project in mind or just want to say hello, feel free to reach
        out.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="space-y-6"
      >
        <a
          href="mailto:oprades4@gmail.com"
          target="_blank"
          className="block text-white hover:text-gray-300 transition-colors text-base sm:text-lg break-all"
        >
          oprades4@gmail.com
        </a>

        <div className="flex justify-center gap-6 sm:gap-8 pt-6 sm:pt-8">
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="mt-12 sm:mt-16 font-mono text-xs text-gray-600"
      >
        {"© 2025 Osmel Prades. All rights reserved."}
      </motion.div>
    </motion.div>
  );
}

export default ContactSection;
