import { ReactNode } from "react";
import MotionSection from "../../_components/MotionSection";
import ContactLink, { ContactLinkType } from "./ContactLink";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import ContactIconLink, { ContactIconLinkType } from "./ContactIconLink";

const contactLinks: ContactLinkType[] = [
  {
    title: "+201128167551",
    link: "https://wa.me/201128167551",
    icon: faPhone,
  },
  {
    title: "contact@anedge.link",
    link: "mailto:contact@anedge.link",
    icon: faEnvelope,
  },
];
const socialLinks: ContactIconLinkType[] = [
  { link: "https://www.linkedin.com/in/an0x1/", icon: faLinkedinIn },
  { link: "https://github.com/an0x1/", icon: faGithub },
  { link: "https://wa.me/201128167551", icon: faWhatsapp },
];
export default function ContactLinks(): ReactNode {
  return (
    <div className="col-span-1 flex flex-col gap-10 lg:col-span-2">
      <MotionSection className="flex flex-col gap-6">
        {contactLinks.map((link) => (
          <ContactLink key={link.link} {...link} />
        ))}
      </MotionSection>
      <div className="dark:bg-muted-dark bg-muted-dark h-0.5 w-full"></div>
      <MotionSection className="flex gap-6">
        {socialLinks.map((link) => (
          <ContactIconLink key={link.link} {...link} />
        ))}
      </MotionSection>
    </div>
  );
}
