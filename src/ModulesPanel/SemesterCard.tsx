// @ts-nocheck

import { ModuleCard } from "./ModuleCard";
import { type Module, type Semester } from "@/App";

type SemesterCardProps = {
  semesterData: Semester;
  setSemesters: (sems: Semester[]) => void;
};

export const SemesterCard: React.FC<SemesterCardProps> = ({
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
            onEdit={(newGrade: string) =>
              setSemesters((prevSems: Semester[]) =>
                prevSems.map((sem) => {
                  const { semester, modules } = sem;

                  return {
                    semester,
                    modules: modules.map((mod) => mod.id !== module?.id ? mod : { ...mod, grade: newGrade }),
                  };
                }),
              )
            }
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
