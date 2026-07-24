import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { gradeMapping } from "../helpers/gradeMapping";

const gradeItems = Object.keys(gradeMapping).map((grade) => ({
  label: grade,
  value: grade,
}));

type GradeSelectProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export const GradeSelect: React.FC<GradeSelectProps> = ({
  value,
  onValueChange,
}) => {
  return (
    <Select items={gradeItems} value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-32">
        <SelectValue placeholder="Select grade" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {gradeItems.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
