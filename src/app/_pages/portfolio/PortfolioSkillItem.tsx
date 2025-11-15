import Rating from "@mui/material/Rating";

export interface SkillsList {
  name: string;
  progress: number;
}
export default function PortfolioSkillItem({ name, progress }: SkillsList) {
  return (
    <div className="text-muted-foreground dark:text-muted-foreground-dark flex items-center justify-between gap-4">
      <span className="text-lg font-medium">{name}</span>
      <Rating
        className="flex items-center justify-between gap-2"
        value={progress}
        emptyIcon={
          <span className="dark:border-border-dark border-border h-3 w-3 rounded-full border"></span>
        }
        icon={
          <span className="dark:border-primary-dark border-primary bg-primary dark:bg-primary-dark h-3 w-3 rounded-full border"></span>
        }
        precision={1}
        readOnly
      />
    </div>
  );
}
