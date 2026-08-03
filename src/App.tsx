import "./App.css";
import { ModuleForm } from "./ModuleForm.tsx";
import { Analytics } from "@vercel/analytics/react";

import { GpaPanel } from "./GpaPanel";
import { useLocalStorage } from "./useLocalStorage.ts";
import { ModulesPanel } from "./ModulesPanel/index.tsx";
import { gradeMapping } from "./helpers/gradeMapping";

export type Module = {
  id: string;
  name: string;
  credits: number;
  grade: keyof typeof gradeMapping;
};

export type Semester = {
  semester: { label: string; value: number };
  modules: Module[];
};

function App() {
  const [semesters, setSemesters] = useLocalStorage<Semester[]>("modules", []);

  return (
    <div className="px-4">
      <h1>Module GPA Calculator</h1>
      <ModuleForm semesters={semesters} setSemesters={setSemesters} />
      <GpaPanel semesters={semesters} />
      <ModulesPanel semesters={semesters} setSemesters={setSemesters} />
      <Analytics />
    </div>
  );
}

export default App;
