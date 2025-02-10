
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  image?: string;
  tags?: string[];
  link?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  date,
  image,
  tags,
  link,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg overflow-hidden card-hover",
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
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 font-medium hover:underline"
          >
            Learn more →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
