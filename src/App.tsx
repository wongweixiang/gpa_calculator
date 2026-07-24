import "./App.css";
import { ModuleForm } from "./ModuleForm.tsx";
import { ModuleCard } from "./ModuleCard";
import { GpaPanel } from "./GpaPanel";
import { useLocalStorage } from "./useLocalStorage.ts";

export type Module = {
  id: string;
  name: string;
  credits: number;
  grade: string;
};

export type Semester = {
  semester: { label: string; value: number };
  modules: Module[];
};

function App() {
  const [semesters, setSemesters] = useLocalStorage("modules", []);
  console.log(semesters);

  return (
    <>
      <div className="px-4">
        <h1>Module GPA Calculator</h1>
        <ModuleForm semesters={semesters} setSemesters={setSemesters} />
        <GpaPanel semesters={semesters} />
        {/* <div className="card-container">
          {modules.length === 0 ? (
            <h3 className="h-32 text-muted-foreground text-2xl flex items-center justify-center">
              Add some modules to get started!
            </h3>
          ) : (
            modules.map((module) => (
              <ModuleCard
                module={module}
                onRemove={() =>
                  setModules(modules.filter((m) => m.id !== module.id))
                }
              />
            ))
          )}
        </div> */}
      </div>
    </>
  );
}

export default App;
