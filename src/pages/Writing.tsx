import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import content from "@/content/writing.json";

const Writing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{content.title}</h1>
        <p className="text-gray-600 mb-8">{content.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.writings.map((writing) => (
            <ProjectCard key={writing.title} {...writing} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Writing;
