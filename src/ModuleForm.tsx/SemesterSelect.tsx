import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { semesterItems } from "../helpers/semesterItems";

type SemesterSelectProps = {
  value: number | null;
  onValueChange: (value: number | null) => void;
};

export const SemesterSelect: React.FC<SemesterSelectProps> = ({
  value,
  onValueChange,
}) => {
  return (
    <Select items={semesterItems} value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select semester" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {semesterItems.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
