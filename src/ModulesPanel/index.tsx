import { SemesterCard } from "./SemesterCard";
import { type Semester } from "@/App";

type ModulesPanelType = {
  semesters: Semester[];
  setSemesters: (sems: Semester[]) => void;
};

export const ModulesPanel: React.FC<ModulesPanelType> = ({
  semesters,
  setSemesters,
}) => {
  if (semesters.length === 0)
    return (
      <h3 className="h-32 text-muted-foreground text-2xl flex items-center justify-center">
        Add some modules to get started!
      </h3>
    );

  const sortedSemesters = semesters.sort(
    (a, b) => a.semester.value - b.semester.value,
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {sortedSemesters.map((sem) => (
        <SemesterCard
          key={sem.semester.value}
          semesterData={sem}
          setSemesters={setSemesters}
        />
      ))}
    </div>
  );
};
