import React from "react";

interface SkillProps {
  title: string;
  desc: string;
}
export default function HomeSkill({ title, desc }: SkillProps) {
  return (
    <div className="bg-muted dark:bg-muted-dark dark:hover:shadow-primary-shadow-dark/30 hover:shadow-primary-shadow/30 ring-primary/50 dark:ring-primary-dark/50 rounded-lg border border-transparent p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_15px_5px] hover:ring-2">
      <h4 className="mb-4 text-xl font-bold">{title}</h4>
      <p className="dark:text-muted-foreground-dark text-muted-foreground">
        {desc}
      </p>
    </div>
  );
}
