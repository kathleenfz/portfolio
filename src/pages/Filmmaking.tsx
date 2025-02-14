
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { useEffect } from "react";

const films = [
  {
    title: "The City at Night",
    description: "A short film exploring urban life after dark.",
    date: "December 2023",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Short Film", "Urban", "Documentary"],
  },
  {
    title: "Digital Dreams",
    description: "An experimental film about technology and human connection.",
    date: "October 2023",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["Experimental", "Technology", "Drama"],
  },
  {
    title: "Nature's Rhythm",
    description: "A documentary about natural patterns and cycles.",
    date: "August 2023",
    tags: ["Documentary", "Nature", "Environment"],
  },
];

const Filmmaking = () => {
  useEffect(() => {
    // Update metadata when component mounts
    document.title = "Filmmaking Portfolio";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A showcase of cinematic projects and visual storytelling, featuring documentaries, experimental films, and short films.');
    }
    // Update OpenGraph metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogTitle) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      document.head.appendChild(meta);
    }
    if (!ogDescription) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      document.head.appendChild(meta);
    }
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Filmmaking Portfolio');
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'A showcase of cinematic projects and visual storytelling.');
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Filmmaking</h1>
        <p className="text-gray-600 mb-8">
          A showcase of my cinematic projects and visual storytelling.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {films.map((film) => (
            <ProjectCard key={film.title} {...film} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Filmmaking;
