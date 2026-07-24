const useModuleForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
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
      const existingSemester = prevSemesters.find(
        (sem) => sem.semester.value === semesterId,
      );

      const existingSemesterModules = existingSemester?.modules || [];

      return [
        ...prevSemesters.filter((sem) => sem.semester.value !== semesterId),
        {
          semester: selectedSemester,
          modules: [...existingSemesterModules, { grade, ...selectedModule }],
        },
      ];
    });
  };

  return {
    handleSubmit,
  };
};
