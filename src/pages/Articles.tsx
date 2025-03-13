import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import content from "@/content/articles.json";

const Articles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-52 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.articles.map((article) => (
            <ProjectCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Articles;
