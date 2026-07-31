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
  value: string | null;
  onValueChange: (value: string | null) => void;
  className?: string;
};

export const ModuleSelect: React.FC<ModuleSelectProps> = ({
  value,
  onValueChange,
  className,
}) => {
  return (
    <Select items={moduleItems} value={value} onValueChange={onValueChange}>
      <SelectTrigger className={className}>
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
