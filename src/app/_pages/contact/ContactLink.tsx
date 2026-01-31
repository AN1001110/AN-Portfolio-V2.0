import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactNode } from "react";
export interface ContactLinkType {
  title: string;
  link: string;
  icon: any;
}
export default function ContactLink({
  title,
  link,
  icon,
}: ContactLinkType): ReactNode {
  return (
    <div className="ease flex items-center gap-4 border-b-0 transition-all duration-150 hover:scale-105">
      <div className="dark:bg-muted-dark bg-muted flex size-10 items-center justify-center rounded">
        <FontAwesomeIcon
          icon={icon}
          className={"text-primary dark:text-primary-dark size-5/10"}
        />
      </div>
      <Link href={link}>
        <p className="text-card-foreground dark:text-card-foreground-dark flex-1 truncate text-base leading-normal font-normal">
          {title}
        </p>
      </Link>
    </div>
  );
}
