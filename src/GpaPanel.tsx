import type { Semester } from "./App";
import { gradeMapping } from "./helpers/gradeMapping";

export const GpaPanel: React.FC<{
  semesters: Semester[];
}> = ({ semesters }) => {
  const allModules = semesters.flatMap((semester) => semester.modules);

  console.log(semesters, allModules);

  const { totalGradePoints, totalCredits } = allModules.reduce(
    (acc, module) => {
      const { totalGradePoints, totalCredits } = acc;

      const gradePoint = gradeMapping[module.grade];
      return {
        totalGradePoints: totalGradePoints + gradePoint * module.credits,
        totalCredits: totalCredits + module.credits,
      };
    },
    { totalGradePoints: 0, totalCredits: 0 },
  );

  const gpa =
    totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : "N/A";

  return (
    <h2 className="h-12 flex items-center justify-center text-2xl font-bold">
      Computed GPA: {gpa}
    </h2>
  );
};
