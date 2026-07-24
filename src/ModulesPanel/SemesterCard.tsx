import { ModuleCard } from "./ModuleCard"
import { type Semester, type Module } from "@/App"

type ModulesPanelType = {
    semester: Module[]
}

export const ModulesPanel: React.FC<ModulesPanelType> = ({ semester }) => {
    return <div className="card-container">
          {
            semester.map((module) => (
              <ModuleCard
                module={module}
                onRemove={() =>
                  setModules(modules.filter((m) => m.id !== module.id))
                }
              />
            ))
          }
        </div>
}