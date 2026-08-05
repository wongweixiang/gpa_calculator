import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useModuleItems } from "./useModuleItems";


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
  const { moduleItems } = useModuleItems()

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
