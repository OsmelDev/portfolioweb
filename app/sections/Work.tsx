import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function WorkSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-mono text-xs sm:text-sm text-gray-500 mb-8 sm:mb-12"
      >
        {"~$ ls projects/"}
      </motion.div>

      <div className="space-y-8 sm:space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2 sm:gap-4">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-light text-white group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  {project.description}
                </p>
              </div>
              <div className="flex sm:flex-col items-start sm:items-end gap-2 sm:gap-0">
                <div className="font-mono text-xs text-gray-500">
                  {project.year}
                </div>
                <a href={project.git} target="_blank">
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" />
                </a>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap mb-4 sm:mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-gray-600 bg-gray-900 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="w-full h-px bg-gray-800 group-hover:bg-gray-700 transition-colors" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
export default WorkSection;
