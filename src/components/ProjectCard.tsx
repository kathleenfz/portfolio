import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  position?: string;
  image?: string;
  link?: string;
  watchLink?: string;
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
        <p className="text-emerald-800 mb-8">{description}</p>
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
