// @ts-nocheck

import { moduleData } from "../helpers/moduleData";
import type { Semester } from "../App";
import { semesterItems } from "@/helpers/semesterItems";

import { useForm, } from "react-hook-form";
import type { IFormInput } from ".";

type UseModuleFormProps = {
  semesters: Semester[];
  setSemesters: (sem: Semester[]) => void;
  defaultValues: IFormInput
};

export const useModuleForm = ({
  semesters,
  setSemesters,
  defaultValues,
}: UseModuleFormProps) => {
  const { handleSubmit, control, watch, reset } = useForm<IFormInput>({
    defaultValues
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

  return { control, isComplete, handleSubmit: handleSubmit(onSubmit) };
};
