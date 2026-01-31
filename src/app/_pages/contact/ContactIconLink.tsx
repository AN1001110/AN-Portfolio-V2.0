import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
export interface ContactIconLinkType {
  link: string;
  icon: any;
}
export default function ContactIconLink({ icon, link }: ContactIconLinkType) {
  return (
    <Link
      href={link}
      className="hover:text-primary dark:hover:text-primary-dark dark:bg-muted-dark bg-muted ease mb-4 flex size-12 cursor-pointer items-center justify-center rounded p-2 transition-all duration-150 hover:scale-110 md:size-12 md:p-1.5"
    >
      <FontAwesomeIcon
        className="dark:text-primary-dark text-primary h-full w-full"
        icon={icon}
      />
    </Link>
  );
}
