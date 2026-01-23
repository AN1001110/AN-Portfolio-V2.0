import { type SkillsList } from "@/src/app/_pages/portfolio/PortfolioSkillItem";
import PortfolioSkillsItem from "@/src/app/_pages/portfolio/PortfolioSkillItem";
import MotionSection from "../../_components/MotionSection";
export interface SkillsCard {
  title: string;
  skillsList: SkillsList[];
}

export default function PortfolioSkillsCard({ title, skillsList }: SkillsCard) {
  return (
    <MotionSection className="bg-surface-color border-border dark:border-border-dark rounded-xl border p-6 sm:p-8">
      <h3 className="dark:text-primary-dark text-primary mb-6 text-2xl font-semibold">
        {title}
      </h3>
      {skillsList.map((item: SkillsList, i: number) => (
        <PortfolioSkillsItem
          key={item.name}
          name={item.name}
          progress={item.progress}
          delayNumber={i}
        />
      ))}
    </MotionSection>
  );
}
