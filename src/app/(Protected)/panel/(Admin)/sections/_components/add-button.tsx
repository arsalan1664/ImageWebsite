"use client";
import { Loader2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
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
import { AddSection } from "@/app/(Backend)/actions/section/addSection";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function AddButton() {
  const [state, dispatch] = useFormState(AddSection, null);

  useEffect(() => {
    if (state?.error) {
      toast.error(`${state?.message}`);
    }
    if (state?.success) {
      toast.success(`${state?.success}`);
    }
    if (state?.info) {
      toast.info(`${state?.info}`);
    }
    if (state?.message) {
      state.message.forEach((i: any) => {
        toast.info(`${i}`);
      });
    }
  }, [state]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={"sm"}
          variant={"secondary"}
          className="w-14 h-14 fixed bottom-10 right-12 rounded-full "
        >
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Section</DialogTitle>
          <DialogDescription>
            Add section, Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <form action={dispatch}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Section
              </Label>
              <Input
                required
                name="section"
                className="col-span-3"
                placeholder="Section Name"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                required
                name="description"
                className="col-span-3"
                placeholder="Description"
              />
            </div>
          </div>
          <DialogFooter>
            <DynamicButton title="Add Section" />
          </DialogFooter>
        </form>
      </DialogContent>{" "}
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
