import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
export default function Footer(): React.ReactNode {
  const t = useTranslations("footer");

  const links = ["home", "about", "contact", "portfolio"];
  const socialLinks = [
    { link: "https://wa.me/201128167551", icon: "/whatsapp.svg" },
    { link: "https://www.linkedin.com/in/an0x1/", icon: "/linkedin.svg" },
    { link: "https://github.com/AN1001110/", icon: "/github.svg" },
  ];

  return (
    <footer className="bg-background dark:bg-background-dark dark:text-muted-foreground-dark text-muted-foreground border-primary/20 relative overflow-hidden border-t pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-right lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h5 className="text-highlight-gold mb-4 text-lg font-bold">
              {t("about.title")}
            </h5>
            <p className="text-text-secondary-light text-sm">
              {t("about.description")}
            </p>
          </div>
          <div>
            <h5 className="text-primary dark:text-primary-dark mb-4 text-lg font-bold">
              {t("links.title")}
            </h5>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    className="text-text-secondary-light hover:text-primary dark:hover:text-primary-dark transition-colors"
                    href={`/${link}`}
                  >
                    {t(`links.${link}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-primary dark:text-primary-dark mb-4 text-lg font-bold">
              {t("contact.title")}
            </h5>
            <ul className="text-text-secondary-light font-english space-y-2">
              <li>
                <Link
                  className="hover:text-primary dark:hover:text-primary-dark ] transition-colors"
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
          <div className="flex flex-col items-center md:items-end lg:col-start-4">
            <h5 className="text-primary dark:text-primary-dark mb-4 text-lg font-bold">
              {t("follow.title")}
            </h5>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <Link key={link.icon} href={link.link}></Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-text-secondary-light font-english text-sm">
            © {`${new Date().getFullYear()} ${t("copyright")}`}
          </p>
        </div>
      </div>
    </footer>
  );
}
