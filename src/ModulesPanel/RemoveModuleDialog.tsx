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
  const { id, name } = module;

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          size='icon-xs'
          variant='ghost'
          className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Remove module"
        >
          <X className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This will remove <b>{id}</b>: {name} from the dataset
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onRemove}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
