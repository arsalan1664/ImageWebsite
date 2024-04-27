"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { Loader2, Trash } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DeleteSection } from "@/app/(Backend)/actions/section/deleteSection";
import { useEffect } from "react";
import { toast } from "sonner";

export function DeleteButton({ id }: { id: string }) {
  const [state, dispatch] = useFormState(DeleteSection, null);
  useEffect(() => {
    if (state?.error) {
      toast.error(`${state?.error}`);
    }
    if (state?.success) {
      toast.success(`${state?.success}`);
    }
    if (state?.info) {
      toast.info(`${state?.info}`);
    }
  }, [state]);

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Trash size={16} className="mr-2" /> Delete
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Are you sure you want to permanently
            delete this file from our servers?
          </DialogDescription>
        </DialogHeader>
        <form action={dispatch}>
          <div className="grid gap-4 py-4">
            <div className="hidden">
              <Input
                name="id"
                defaultValue={id}
                className="col-span-3"
                placeholder="Section Name"
              />
            </div>
          </div>
          <DialogFooter>
            <DynamicButton title="Delete Section" />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const DynamicButton = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="animate-spin h-5 w-5 mr-2" /> Loading
        </>
      ) : (
        title
      )}
    </Button>
  );
};
