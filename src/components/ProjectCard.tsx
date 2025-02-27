import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  position?: string;
  image?: string;
  link?: string;
  watchLink?: string;
  technologies?: Array<{
    name: string;
    logo: string;
  }>;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  date,
  position,
  image,
  link,
  watchLink,
  technologies,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "bg-white/90 rounded-lg overflow-hidden card-hover border border-white/20",
        className
      )}
    >
      {image && (
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <p className="text-sm text-emerald-600 mb-1">{date}</p>
        {position && (
          <p className="text-xl font-semibold text-emerald-700 mb-2">{position.toUpperCase()}</p>
        )}
        <h3 className="text-xl font-semibold mb-2 text-emerald-1200">{title}</h3>
        <p className="text-emerald-800 mb-4">{description}</p>
        
        {technologies && (
          <div className="flex gap-3 mb-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="relative group">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-8 h-8 rounded-full object-contain"
                />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-emerald-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {watchLink && (
          <a
            href={watchLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 mr-5 font-medium hover:underline"
          >
            Watch →
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 font-medium hover:underline"
          >
            View More →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
