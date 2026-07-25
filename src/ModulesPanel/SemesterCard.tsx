import { ModuleCard } from "./ModuleCard";
import { type Semester } from "@/App";

type SemesterCardType = {
  semesterData: Semester;
};

export const SemesterCard: React.FC<SemesterCardType> = ({ semesterData }) => {
  const {
    semester: { label },
    modules,
  } = semesterData;

  return (
    <div className="card-container">
      <div>{label}</div>
      {modules.map((module) => (
        <ModuleCard
          module={module}
          onRemove={
            () => {}
            // setModules(modules.filter((m) => m.id !== module.id))
          }
        />
      ))}
    </div>
  );
};
