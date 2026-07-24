import "./App.css";
import { X } from "lucide-react";
import { gradeColorMapping } from "./helpers/gradeMapping";
import { cn } from "./lib/utils";
import type { Module } from "./App";

export const ModuleCard = ({
  module,
  onRemove,
}: {
  module: Module;
  onRemove: () => void;
}) => {
  return (
    <div
      key={module.id}
      className="relative flex items-center justify-between rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md max-lg:p-6"
    >
      <button
        onClick={onRemove}
        className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Remove module"
      >
        <X className="h-4 w-4" />
      </button>

      <div className="text-left pr-10">
        <h2 className="font-semibold leading-tight">
          {module.id}: {module.name}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Credits: {module.credits}
        </p>
      </div>

      <div
        className={cn(
          "shrink-0 text-5xl font-bold tabular-nums pr-2",
          gradeColorMapping[module.grade],
        )}
      >
        {module.grade}
      </div>
    </div>
  );
};
