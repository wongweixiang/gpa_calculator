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
import { X } from "lucide-react";

type RemoveModuleDialogProps = {
  module: Module;
  onRemove: () => void;
};

export const RemoveModuleDialog: React.FC<RemoveModuleDialogProps> = ({
  module,
  onRemove,
}) => {
  const { id } = module;

  return (
    <Dialog>
      <DialogTrigger>
        <button
          className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Remove module"
        >
          <X className="h-4 w-4" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This will remove <b>{id}</b> from the dataset
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onRemove}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
