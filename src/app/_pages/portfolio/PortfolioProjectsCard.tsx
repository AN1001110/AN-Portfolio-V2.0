import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import * as motion from "motion/react-client";

export interface ProjectCard {
  title: string;
  desc: string;
  links: { git: string; live: string };
  tools: string[];
  img: string;
}

export default function PortfolioProjectsCard({
  title,
  desc,
  links,
  tools,
  img,
}: ProjectCard) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card dark:bg-card-dark group dark:ring-border-dark ring-border relative overflow-hidden rounded-lg ring-1 hover:ring-2"
    >
      <div className="relative">
        <div className="flex h-56 w-full items-center justify-center bg-gray-300 dark:bg-gray-700">
          <Image
            fill
            className="absolute object-cover"
            src={`/projects/${img}.png`}
            alt={title}
          />
        </div>
        <div className="bg-opacity-0 bg-background/50 dark:bg-muted-dark/50 absolute inset-0 flex items-center justify-center space-x-4 space-x-reverse opacity-0 transition-all duration-300 group-hover:opacity-100">
          <Link
            className="text-md rounded-md px-4 py-2 font-extrabold"
            href={links?.live}
          >
            <EyeIcon className="dark:text-primary-dark text-primary size-8" />
          </Link>
          <Link
            className="text-md rounded-md px-4 py-2 font-extrabold"
            href={links?.git}
          >
            <CodeBracketIcon className="dark:text-primary-dark text-primary size-8 font-extrabold" />
          </Link>
        </div>
      </div>
      <div className="px-6 py-4">
        <h3 className="dark:text-muted text-muted-dark dark:text-text-dark mb-2 text-xl font-bold">
          {title}
        </h3>
        <p className="text-muted-foreground dark:text-muted-foreground-dark mb-4 text-sm">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-muted-dark dark:text-muted bg-card-foreground-dark/50 dark:bg-card-foreground/50 rounded-full px-2.5 py-1 text-xs font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
