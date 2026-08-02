// @ts-nocheck

import { GradeSelect } from "./GradeSelect";
import { moduleData } from "../helpers/moduleData";
import type { Semester } from "../App";
import { SemesterSelect } from "./SemesterSelect";
import { semesterItems } from "@/helpers/semesterItems";
import { ModuleSelectWithSearch } from "./ModuleSelectWithSearch";

import { Controller, useForm } from "react-hook-form";

type ModuleFormProps = {
  semesters: Semester[];
  setSemesters: (sem: Semester[]) => void;
};

type IFormInput = {
  moduleId: string;
  grade: string;
  semesterId: number;
};

export const ModuleForm: React.FC<ModuleFormProps> = ({
  semesters,
  setSemesters,
}) => {
  const { handleSubmit, control, watch, reset } = useForm<IFormInput>({
    defaultValues: {
      moduleId: "",
      grade: "",
      semesterId: 1,
    },
  });

  const isComplete = watch("grade") !== "" && watch("moduleId") !== "";

  const onSubmit = (data: IFormInput) => {
    const { moduleId, grade, semesterId } = data;

    const allModules = semesters.flatMap((semester) => semester.modules);

    if (allModules.find((module) => module.id === moduleId)) {
      alert("Module already added!");
      return;
    }

    const selectedModule = moduleData.find((module) => module.id === moduleId);
    const selectedSemester = semesterItems.find(
      (semester) => semester.value === semesterId,
    );

    console.log({ selectedModule, selectedSemester });

    setSemesters((prevSemesters: Semester[]) => {
      const isExistingSem = prevSemesters.find(
        (sem) => sem.semester.value === semesterId,
      );

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

    reset({ moduleId: "", grade: "", semesterId: 1 });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-4 border p-4 rounded-md shadow-md"
    >
      <Controller
        name="moduleId"
        control={control}
        render={({ field }) => (
          <ModuleSelectWithSearch
            {...field}
            value={field.value}
            onValueChange={field.onChange}
            className="col-span-2 w-full"
          />
        )}
      />

      <Controller
        name="grade"
        control={control}
        render={({ field }) => (
          <GradeSelect
            {...field}
            value={field.value}
            onValueChange={field.onChange}
          />
        )}
      />
      <Controller
        name="semesterId"
        control={control}
        render={({ field }) => (
          <SemesterSelect
            {...field}
            value={field.value}
            onValueChange={field.onChange}
          />
        )}
      />
      <button
        className="col-span-2 bg-blue-500 disabled:bg-gray-700 text-white px-4 py-2 rounded"
        type="submit"
        disabled={!isComplete}
      >
        Add Module
      </button>
    </form>
  );
};
