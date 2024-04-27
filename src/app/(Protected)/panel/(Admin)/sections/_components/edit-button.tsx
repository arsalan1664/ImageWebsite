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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";
import { EditSection } from "@/app/(Backend)/actions/section/editSection";
import { useFormStatus } from "react-dom";
import { Loader2, Pencil } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useEffect } from "react";
import { toast } from "sonner";

export function EditButton({
  id,
  section,
  description,
}: {
  id: string;
  section: any;
  description: any;
}) {
  const [state, dispatch] = useFormState(EditSection, null);
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
          <Pencil size={16} className="mr-2" /> Edit
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Section</DialogTitle>
          <DialogDescription>
            Make changes to your section here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <form action={dispatch}>
          <div className="grid gap-4 py-4">
            <div className="hidden ">
              <Label htmlFor="id" className="text-right">
                Id
              </Label>
              <Input
                name="id"
                defaultValue={id}
                className="col-span-3"
                placeholder="Section Name"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="section" className="text-right">
                Section
              </Label>
              <Input
                required
                name="section"
                defaultValue={section}
                className="col-span-3"
                placeholder="Section Name"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                required
                name="description"
                defaultValue={description}
                className="col-span-3"
                placeholder="Section Name"
              />
            </div>
          </div>
          <DialogFooter>
            <DynamicButton title="Edit Section" />
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
