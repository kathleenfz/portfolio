
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { useEffect } from "react";

const writings = [
  {
    title: "The Future of Web Development",
    description: "An exploration of emerging trends in web development and their impact on user experience.",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Web Development", "Technology", "Future"],
  },
  {
    title: "Understanding Modern Cinema",
    description: "A deep dive into contemporary filmmaking techniques and storytelling.",
    date: "February 28, 2024",
    tags: ["Film", "Art", "Analysis"],
  },
  {
    title: "The Art of Storytelling",
    description: "Exploring narrative techniques across different mediums.",
    date: "January 20, 2024",
    tags: ["Writing", "Storytelling", "Creative"],
  },
];

const Writing = () => {
  useEffect(() => {
    // Update metadata when component mounts
    document.title = "Writing - Portfolio";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A collection of articles and essays covering web development, filmmaking, and creative writing.');
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Writing</h1>
        <p className="text-gray-600 mb-8">A collection of my articles and essays.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {writings.map((writing) => (
            <ProjectCard key={writing.title} {...writing} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Writing;
