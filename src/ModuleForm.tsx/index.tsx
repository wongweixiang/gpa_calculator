import { GradeSelect } from "./GradeSelect";
import type { Semester } from "../App";
import { SemesterSelect } from "./SemesterSelect";
import { ModuleSelectWithSearch } from "./ModuleSelectWithSearch";

import { Controller } from "react-hook-form";
import { useModuleForm } from "./useModuleForm";

type ModuleFormProps = {
  semesters: Semester[];
  setSemesters: (sem: Semester[]) => void;
};

export type IFormInput = {
  moduleId: string;
  grade: string;
  semesterId: number;
};

export const ModuleForm: React.FC<ModuleFormProps> = ({
  semesters,
  setSemesters,
}) => {
  const { control, isComplete, handleSubmit } = useModuleForm({
    semesters,
    setSemesters,
    defaultValues: {
      moduleId: "",
      grade: "",
      semesterId: 1,
    }
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-4 border p-4 rounded-md shadow-md"
    >
      <Controller
        name="moduleId"
        control={control}
        render={({ field }) => (
          <ModuleSelectWithSearch
            {...field}
            onValueChange={field.onChange}
            className="col-span-2 w-full"
          />
        )}
      />

      <Controller
        name="grade"
        control={control}
        render={({ field }) => (
          <GradeSelect {...field} onValueChange={field.onChange} />
        )}
      />
      <Controller
        name="semesterId"
        control={control}
        render={({ field }) => (
          <SemesterSelect {...field} onValueChange={field.onChange} />
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
