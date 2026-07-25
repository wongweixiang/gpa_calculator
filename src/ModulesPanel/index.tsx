import { SemesterCard } from "./SemesterCard";
import { type Semester } from "@/App";

type ModulesPanelType = {
  semesters: Semester[];
};

export const ModulesPanel: React.FC<ModulesPanelType> = ({ semesters }) => {
  const sortedSemesters = semesters.sort(
    (a, b) => a.semester.value - b.semester.value,
  );

  return (
    <div className="card-container">
      {sortedSemesters.length === 0 ? (
        <h3 className="h-32 text-muted-foreground text-2xl flex items-center justify-center">
          Add some modules to get started!
        </h3>
      ) : (
        sortedSemesters.map((sem) => <SemesterCard semesterData={sem} />)
      )}
    </div>
  );
};
