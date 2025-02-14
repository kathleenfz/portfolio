
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js.",
    date: "2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    link: "https://github.com",
  },
  {
    title: "Portfolio Generator",
    description: "A tool for creating beautiful portfolio websites automatically.",
    date: "2023",
    tags: ["Next.js", "TailwindCSS", "Supabase"],
    link: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    date: "2023",
    tags: ["React", "Firebase", "Material-UI"],
    link: "https://github.com",
  },
];

const Development = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Web Development</h1>
        <p className="text-gray-600 mb-8">
          A collection of my web development projects and applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Development;
