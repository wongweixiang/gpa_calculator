import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { moduleData } from "../helpers/moduleData";

const moduleItems = moduleData.map((module) => ({
  label: `${module.id}: ${module.name}`,
  value: module.id,
}));

type ModuleSelectProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export const ModuleSelect: React.FC<ModuleSelectProps> = ({
  value,
  onValueChange,
}) => {
  return (
    <Select items={moduleItems} value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full max-w-84">
        <SelectValue placeholder="Select a module" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Modules</SelectLabel>
          {moduleItems.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
