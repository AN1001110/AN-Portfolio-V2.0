import { useTranslations } from "next-intl";
import Link from "next/link";
import MotionSection from "../../_components/MotionSection";

export default function HomeContact() {
  const t = useTranslations("home.contact");
  return (
    <MotionSection className="py-20">
      <div className="dark:text-muted-foreground-dark text-muted-foreground container mx-auto px-6 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-4xl">
          {t("title")}
        </h2>
        <p className="text-text-secondary-light mx-auto mt-4 max-w-xl">
          {t("description")}
        </p>
        <Link
          className="bg-primary dark:bg-primary-dark shadow-primary/20 text-background dark:text-background-dark hover: mt-8 inline-block transform rounded-full px-10 py-4 font-bold shadow-lg transition-all hover:scale-105 hover:opacity-90"
          href="/contact"
        >
          {t("cta_button")}
        </Link>
      </div>
    </MotionSection>
  );
}
