import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  desc: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({
  title,
  desc,
  imageUrl,
  link,
}: ProjectProps): React.ReactNode {
  return (
    <Link href={link}>
      <div className="border-border bg-card dark:bg-card-dark dark:border-border-dark dark:bg-card-background-dark dark:shadow-card-foreground-dark/10 shadow-card-foreground/10 flex flex-col gap-4 rounded-lg border transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="relative h-68 w-full overflow-hidden rounded-t-md select-none">
          <Image
            fill
            className="inset-0 object-cover"
            src={imageUrl}
            alt={`img for project ${title}`}
          />
        </div>

        <div className="p-6">
          <h4 className="text-card-foreground dark:text-card-foreground-dark text-md font-bold md:text-xl">
            {title}
          </h4>
          <p className="md:text-md text-muted-foreground dark:text-muted-foreground-dark mt-4 text-sm">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
}
