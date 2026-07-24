import { useState } from "react";
import { GradeSelect } from "./GradeSelect";
import { ModuleSelect } from "./ModuleSelect";
import { moduleData } from "../helpers/moduleData";
import type { Module, Semester } from "../App";
import { SemesterSelect } from "./SemesterSelect";
import { semesterItems } from "@/helpers/semesterItems";

type ModuleFormProps = {
  semesters: Semester[];
  setSemesters: (semesters: Semester[]) => void;
};

export const ModuleForm: React.FC<ModuleFormProps> = ({
  semesters,
  setSemesters,
}) => {
  const [grade, setGrade] = useState("");
  const [moduleId, setModuleId] = useState("");
  const [semesterId, setSemesterId] = useState<number | "">("");

  const isComplete = grade !== "" && moduleId !== "" && semesterId !== "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const allModules = semesters.flatMap((semester) => semester.modules);

    if (allModules.find((module) => module.id === moduleId)) {
      alert("Module already added!");
      return;
    }

    setGrade("");
    setModuleId("");

    const selectedModule = moduleData.find((module) => module.id === moduleId);
    const selectedSemester = semesterItems.find(
      (semester) => semester.value === semesterId,
    );


    setSemesters((prevSemesters: Semester[]) => {
      const isExistingSem = prevSemesters.find((sem) => sem.semester.value === semesterId)

      if (isExistingSem) {
        return prevSemesters.map((sem) =>
          sem.semester.value === semesterId
            ? {
                ...sem,
                modules: [...sem.modules, { grade, ...selectedModule }],
              }
            : sem,
        );
      }

      return [
        ...prevSemesters,
        { semester: selectedSemester, modules: [{ grade, ...selectedModule }] },
      ];
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border p-4 rounded-md shadow-md"
    >
      <ModuleSelect value={moduleId} onValueChange={setModuleId} />
      <GradeSelect value={grade} onValueChange={setGrade} />
      <SemesterSelect value={semesterId} onValueChange={setSemesterId} />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        type="submit"
        disabled={!isComplete}
      >
        Add Module
      </button>
    </form>
  );
};
