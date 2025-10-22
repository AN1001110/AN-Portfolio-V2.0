import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("home.heroSection");
  return (
    <section
      className="container mx-auto flex flex-col items-center gap-8 px-6 py-20 lg:flex-row lg:gap-12 lg:py-32"
      id="hero"
    >
      <div className="order-2 flex flex-col lg:order-1 lg:flex-2">
        <h2 className="` text-muted-foreground dark:text-muted-foreground-dark text-center text-4xl leading-tight font-bold md:text-5xl lg:text-start lg:text-6xl">
          {t("title")}
        </h2>
        <Typography className="text-secondary-light text-muted-foreground dark:text-muted-foreground-dark mx-auto mt-6 max-w-2xl text-lg md:text-xl lg:mx-0">
          {t("description")}
        </Typography>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:items-start lg:justify-start">
          <Link
            className="bg-primary dark:bg-primary-dark shadow-primary/20 text-primary-foreground dark:text-primary-foreground-dark min-w-5/10 transform rounded-full px-8 py-3 text-center font-bold text-nowrap shadow-lg transition-all duration-75 ease-linear hover:scale-105 hover:opacity-90 lg:w-6/10"
            href="/portfolio"
          >
            {t("cta.portfolio")}
          </Link>
          <Link
            className="border-primary dark:border-primary-dark text-primary dark:text-primary-dark hover:bg-primary/10 min-w-5/10 transform rounded-full border-2 bg-transparent px-8 py-3 text-center font-bold text-nowrap transition-all duration-75 ease-linear hover:scale-105 lg:w-6/10"
            href="/contact"
          >
            {t("cta.contact")}
          </Link>
        </div>
      </div>

      <div className="bg-accent/30 relative order-1 h-56 w-56 rounded-full bg-cover bg-center sm:h-64 sm:w-64 md:h-80 md:w-80 lg:order-2">
        <Image
          className="border-primary dark:border-primary-dark absolute inset-0 rounded-full border-4"
          fill
          src={"/an.png"}
          alt="AN Personal Image"
        />
      </div>
    </section>
  );
}
