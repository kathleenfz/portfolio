
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6 text-white">John Doe</h1>
            <p className="text-lg text-white mb-6">
              Creative professional with expertise in web development, filmmaking,
              and writing. Based in San Francisco, I combine technical skills with
              artistic vision to create compelling digital experiences and
              stories.
            </p>
            <div className="space-y-4">
              <p className="text-white">
                With over a decade of experience in multiple creative fields, I've
                developed a unique perspective that allows me to approach projects
                holistically, considering both technical requirements and artistic
                merit.
              </p>
              <p className="text-white">
                My work has been featured in various publications and festivals,
                and I'm always eager to take on new challenges that push the
                boundaries of digital storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
