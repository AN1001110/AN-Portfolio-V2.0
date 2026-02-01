import { useTranslations } from "next-intl";

export default function ContactHome() {
  const t = useTranslations("contact");
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <div className="flex min-w-72 flex-col gap-3">
        <h1 className="text-primary dark:text-primary-dark text-4xl leading-tight font-bold tracking-[-0.033em] sm:text-5xl">
          {t("title")}
        </h1>
        <p className="text-card-foreground dark:text-card-foreground-dark text-base leading-normal font-normal">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
