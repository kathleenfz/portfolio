
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchContent } from "@/utils/content";

const Index = () => {
  const { data: bioData, isLoading } = useQuery({
    queryKey: ['bio'],
    queryFn: () => fetchContent('bio'),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-40 px-6 flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-40 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={bioData?.image || "https://via.placeholder.com/256"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6 text-white">{bioData?.name || "Loading..."}</h1>
            <p className="text-lg text-white mb-6">
              {bioData?.bio || "Loading..."}
            </p>
            <div className="space-y-4">
              <p className="text-white">
                {bioData?.additionalInfo || "Loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
