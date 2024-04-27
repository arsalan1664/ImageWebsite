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
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AddCategory } from "@/app/(Backend)/actions/category/addCategory";
import { GetSection } from "@/app/(Backend)/actions/section/getSection";

export function AddButton() {
  const [state, dispatch] = useFormState(AddCategory, null);
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
      <DialogTrigger asChild>
        <Button
          size={"sm"}
          variant={"secondary"}
          className="w-14 h-14 fixed bottom-10 right-12 rounded-full "
        >
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>
            Add category, Click Add Category when you are done.
          </DialogDescription>
        </DialogHeader>
        <form action={dispatch}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Title</Label>
              <Input name="title" className="col-span-3" placeholder="Title" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                name="description"
                className="col-span-3"
                placeholder="Description"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Meta Title</Label>
              <Input
                name="meta-title"
                className="col-span-3"
                placeholder="Meta Title"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Meta Desc.</Label>
              <Input
                name="meta-description"
                className="col-span-3"
                placeholder="Meta Description"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Image
              </Label>
              <Input
                name="cover-image"
                className="col-span-3"
                placeholder="Cover Image"
                type="file"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Section
              </Label>
              <SelectItems />
            </div>
          </div>
          <DialogFooter>
            <DynamicButton title="Add Category" />
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

function SelectItems() {
  const [section, setSection] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetSection();
        setSection(data.sections);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Select name="section">
      <SelectTrigger className="w-[270px]">
        <SelectValue placeholder="Select a section" />
      </SelectTrigger>
      <SelectContent>
        {section?.map((item: { id: any; title: any }) => (
          <SelectItem key={item.id} value={item.id}>
            {item.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
