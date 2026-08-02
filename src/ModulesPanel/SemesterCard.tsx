// @ts-nocheck

import { ModuleCard } from "./ModuleCard";
import { type Semester, type Module } from "@/App";

type SemesterCardType = {
  semesterData: Semester;
  setSemesters: (sems: Semester[]) => void;
};

export const SemesterCard: React.FC<SemesterCardType> = ({
  semesterData,
  setSemesters,
}) => {
  const {
    semester: { label },
    modules,
  } = semesterData;

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md max-lg:p-6">
      <div>{label}</div>
      {modules.map((module) => {
        return (
          <ModuleCard
            key={module.id}
            module={module}
            onRemove={() =>
              setSemesters((prevSems: Semester[]) =>
                prevSems.map((sem) => {
                  const { semester, modules } = sem;

                  return {
                    semester,
                    modules: modules.filter((mod) => mod.id !== module?.id),
                  };
                }),
              )
            }
          />
        );
      })}
    </div>
  );
};
