import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function Footer(): React.ReactNode {
  const t = useTranslations("footer");

  const links = ["home", "about", "contact", "portfolio"];
  const socialLinks = [
    { link: "https://www.linkedin.com/in/an0x1/", icon: faLinkedinIn },
    { link: "https://github.com/AN1001110/", icon: faGithub },
    { link: "https://wa.me/201128167551", icon: faWhatsapp },
  ];

  return (
    <footer className="bg-background dark:bg-background-dark dark:text-muted-foreground-dark text-muted-foreground border-primary/20 relative overflow-hidden border-t pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-right lg:grid-cols-4">
          <div className="flex flex-col justify-center md:items-center lg:col-span-1 lg:items-start">
            <h5 className="text-secondary dark:text-secondary-dark mb-4 text-lg font-bold">
              {t("about.title")}
            </h5>
            <p className="text-sm">{t("about.description")}</p>
          </div>
          <div className="flex flex-col justify-center md:items-center lg:items-start">
            <h5 className="text-primary dark:text-primary-dark mb-4 text-lg font-bold">
              {t("links.title")}
            </h5>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    className="hover:text-primary dark:hover:text-primary-dark transition-colors"
                    href={`/${link}`}
                  >
                    {t(`links.${link}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center md:items-center lg:items-start">
            <h5 className="text-primary dark:text-primary-dark mb-4 text-lg font-bold md:items-end">
              {t("contact.title")}
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  className="hover:text-primary dark:hover:text-primary-dark transition-colors"
                  href="mailto:AbdulrahmanNashat0x1@gmail.com"
                >
                  {t("contact.email")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary dark:hover:text-primary-dark transition-colors"
                  href="https://wa.me/201128167551"
                >
                  {t("contact.phone")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:items-center lg:col-start-4 lg:items-end">
            <h5 className="text-primary dark:text-primary-dark mb-5 text-lg font-bold">
              {t("follow.title")}
            </h5>
            <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:justify-end">
              {socialLinks.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary dark:hover:text-primary-dark mb-4 flex h-5 w-5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 md:h-6 md:w-6"
                >
                  <FontAwesomeIcon className="h-full w-full" icon={link.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm">
            © {`${new Date().getFullYear()} ${t("copyright")}`}
          </p>
        </div>
      </div>
    </footer>
  );
}
