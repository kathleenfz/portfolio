
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  image?: string;
  link?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  date,
  image,
  link,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden card-hover border border-white/20",
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
        <p className="text-sm text-emerald-700 mb-2">{date}</p>
        <h3 className="text-xl font-semibold mb-2 text-emerald-1200">{title}</h3>
        <p className="text-emerald-800 mb-8">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 font-medium hover:underline"
          >
            Learn more →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
