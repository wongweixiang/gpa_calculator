// @ts-nocheck

import type { Semester } from "../App";
import { semesterItems } from "@/helpers/semesterItems";

import { useForm } from "react-hook-form";
import type { IFormInput } from ".";
import { useModuleItems } from "./useModuleItems";

type UseModuleFormProps = {
  semesters: Semester[];
  setSemesters: (sem: Semester[]) => void;
  defaultValues: IFormInput;
};

export const useModuleForm = ({
  semesters,
  setSemesters,
  defaultValues,
}: UseModuleFormProps) => {
  const { handleSubmit, control, watch, reset } = useForm<IFormInput>({
    defaultValues,
  });

  const { moduleList } = useModuleItems();

  const isComplete = watch("grade") !== "" && watch("moduleId") !== "";

  const onSubmit = (data: IFormInput) => {
    const { moduleId, grade, semesterId } = data;

    const allModules = semesters.flatMap((semester) => semester.modules);

    if (allModules.find((module) => module.id === moduleId)) {
      alert("Module already added!");
      return;
    }

    const selectedModule = moduleList.find((module) => module.id === moduleId);
    console.log({ selectedModule, moduleList });

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

    reset({ moduleId: "", grade: "", semesterId });
  };

  return { control, isComplete, handleSubmit: handleSubmit(onSubmit) };
};
