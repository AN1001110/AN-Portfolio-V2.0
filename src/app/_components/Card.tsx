import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  desc: string;
  imageUrl: string;
  link: string;
}

export default function Card({
  title,
  desc,
  imageUrl,
  link,
}: CardProps): React.ReactNode {
  return (
    <Link
      href={link}
      className="border-border bg-card dark:bg-card-dark dark:border-border-dark dark:bg-card-background-dark dark:shadow-card-foreground-dark/10 shadow-card-foreground/10 flex flex-col gap-4 rounded-lg border-2 transition-transform duration-300 hover:scale-105 hover:shadow-sm"
    >
      <div className="relative h-68 w-full overflow-hidden rounded-t-md select-none">
        <Image
          fill
          className="inset-0 object-cover"
          src={imageUrl}
          alt={`img for Card ${title}`}
        />
      </div>

      <div className="p-6">
        <h4 className="text-card-foreground dark:text-card-foreground-dark text-base font-bold md:text-xl">
          {title}
        </h4>
        <p className="text-muted-foreground dark:text-muted-foreground-dark mt-4 text-sm md:text-base">
          {desc}
        </p>
      </div>
    </Link>
  );
}
