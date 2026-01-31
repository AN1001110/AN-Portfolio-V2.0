export default function ContactHome() {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <div className="flex min-w-72 flex-col gap-3">
        <h1 className="text-primary dark:text-primary-dark text-4xl leading-tight font-bold tracking-[-0.033em] sm:text-5xl">
          تواصل معي
        </h1>
        <p className="text-card-foreground dark:text-card-foreground-dark text-base leading-normal font-normal">
          لا تتردد في التواصل. أنا دائماً متاح للحديث عن م[شاريع جديدة أو فرص
          إبداعية.
        </p>
      </div>
    </div>
  );
}
