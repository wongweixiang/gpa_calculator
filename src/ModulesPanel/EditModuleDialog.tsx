import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import type { Module } from "../App";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { GradeSelect } from "@/ModuleForm.tsx/GradeSelect";
import { useState } from "react";

type EditModuleDialogProps = {
  module: Module;
  onEdit: (newGrade: string) => void;
};

export const EditModuleDialog: React.FC<EditModuleDialogProps> = ({
  module,
  onEdit,
}) => {
  const { id, grade, name } = module;

  const [isOpen, setIsOpen] = useState(false)
  const [newGrade, setNewGrade] = useState<string | null>(grade)

  const handleConfirm = () => {
    onEdit(newGrade as string);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button
          size='icon-xs'
          variant='ghost'
          className="absolute right-12 top-4 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Edit module"
        >
          <Edit className="size-5 md:size-4"/>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>
            Select a new grade for <b>{id}</b>: {name}
          </DialogDescription>
          <GradeSelect value={newGrade} onValueChange={setNewGrade} />
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
