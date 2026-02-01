import { useTranslations } from "next-intl";
import MotionSection from "../_components/MotionSection";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  return (
    <MotionSection className="col-span-1 lg:col-span-3">
      <form action="#" className="space-y-6" method="POST">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              className="dark:text-muted/80 text-muted-dark/80 block text-sm leading-6 font-medium"
              htmlFor="name"
            >
              {t("fullName.label")}
            </label>
            <div className="mt-2">
              <input
                className="bg-muted dark:bg-muted-dark bg-surface-dark text-card-foreground dark:text-card-foreground-dark placeholder:text-muted-dark/40 dark:placeholder:text-muted/40 focus:ring-primary dark:focus:ring-primary-dark block w-full rounded-lg border-0 px-4 py-3 shadow-sm ring-1 ring-transparent outline-0 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                id="name"
                name="name"
                placeholder={t("fullName.placeholder")}
                type="text"
              />
            </div>
          </div>
          <div>
            <label
              className="dark:text-muted/80 text-muted-dark/80 block text-sm leading-6 font-medium"
              htmlFor="email"
            >
              {t("email.label")}
            </label>
            <div className="mt-2">
              <input
                className="bg-muted dark:bg-muted-dark bg-surface-dark text-card-foreground dark:text-card-foreground-dark placeholder:text-muted-dark/40 dark:placeholder:text-muted/40 focus:ring-primary dark:focus:ring-primary-dark block w-full rounded-lg border-0 px-4 py-3 shadow-sm ring-1 ring-transparent outline-0 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                id="email"
                name="email"
                placeholder={t("email.placeholder")}
                type="email"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            className="dark:text-muted/80 text-muted-dark/80 block text-sm leading-6 font-medium"
            htmlFor="subject"
          >
            {t("subject.label")}
          </label>
          <div className="mt-2">
            <input
              className="bg-muted dark:bg-muted-dark bg-surface-dark text-card-foreground dark:text-card-foreground-dark placeholder:text-muted-dark/40 dark:placeholder:text-muted/40 focus:ring-primary dark:focus:ring-primary-dark block w-full rounded-lg border-0 px-4 py-3 shadow-sm ring-1 ring-transparent outline-0 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              id="subject"
              name="subject"
              placeholder={t("subject.placeholder")}
              type="text"
            />
          </div>
        </div>
        <div>
          <label
            className="dark:text-muted/80 text-muted-dark/80 block text-sm leading-6 font-medium"
            htmlFor="message"
          >
            {" "}
            {t("message.label")}
          </label>
          <div className="mt-2">
            <textarea
              className="bg-muted dark:bg-muted-dark bg-surface-dark text-card-foreground dark:text-card-foreground-dark placeholder:text-muted-dark/40 dark:placeholder:text-muted/40 focus:ring-primary dark:focus:ring-primary-dark block w-full rounded-lg border-0 px-4 py-3 shadow-sm ring-1 ring-transparent outline-0 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              id="message"
              name="message"
              placeholder={t("subject.placeholder")}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-start">
          <button
            className="dark:bg-primary-dark bg-primary text-text-dark flex h-12 max-w-120 min-w-30 cursor-pointer items-center justify-center overflow-hidden rounded-lg px-6 text-base leading-normal font-bold tracking-[0.015em] transition-transform hover:scale-105"
            type="submit"
          >
            <span className="truncate">{t("submit")}</span>
          </button>
        </div>
      </form>
    </MotionSection>
  );
}
