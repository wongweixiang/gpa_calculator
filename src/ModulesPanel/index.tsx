import { ModuleCard } from "./ModuleCard"
import { type Semester } from "@/App"

type ModulesPanelType = {
    modules: Semester[]
}

export const ModulesPanel: React.FC<ModulesPanelType> = ({ modules }) => {
    return <div className="card-container">
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
        </div>
}