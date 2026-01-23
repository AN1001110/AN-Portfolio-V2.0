import Rating from "@mui/material/Rating";
import * as motion from "motion/react-client";

export interface SkillsList {
  name: string;
  progress: number;
  delayNumber?: number;
}
export default function PortfolioSkillItem({
  name,
  progress,
  delayNumber = 1,
}: SkillsList) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delayNumber * 0.1 }}
      viewport={{ once: true }}
      className="text-muted-foreground dark:text-muted-foreground-dark flex items-center justify-between gap-4"
    >
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
    </motion.div>
  );
}
