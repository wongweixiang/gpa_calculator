import type { FC } from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { moduleData } from "../helpers/moduleData";

const moduleItems = moduleData.map((module) => ({
  label: `${module.id}: ${module.name}`,
  value: module.id,
}));

type ModuleSelectProps = {
  value: string | null;
  onValueChange: (value: string | null) => void;
  className?: string;
};

export const ModuleSelectWithSearch: FC<ModuleSelectProps> = ({
  value,
  onValueChange,
  className,
}) => {
  return (
    <Combobox items={moduleItems} value={value} onValueChange={onValueChange}>
      <ComboboxInput placeholder="Select a module" className={className} />
      <ComboboxContent>
        <ComboboxEmpty>No modules found.</ComboboxEmpty>
        <ComboboxList>
          {({ label, value }) => (
            <ComboboxItem key={value} value={value}>
              {label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};
