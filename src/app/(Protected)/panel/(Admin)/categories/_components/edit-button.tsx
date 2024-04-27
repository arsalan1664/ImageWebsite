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
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { GetSection } from "@/app/(Backend)/actions/section/getSection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { EditCategory } from "@/app/(Backend)/actions/category/editCategory";

export function EditButton({
  id,
  title,
  meta_title,
  description,
  meta_description,
  section,
}: {
  id: string;
  title: string;
  meta_title: string;
  description: string;
  meta_description: string;
  section: string;
}) {
  const [state, dispatch] = useFormState(EditCategory, null);
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
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogDescription>
            Edit category, Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <form action={dispatch}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input defaultValue={id} name="id" className="hidden" />
              <Label className="text-right">Title</Label>
              <Input
                name="title"
                defaultValue={title}
                className="col-span-3"
                placeholder="Title"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                name="description"
                defaultValue={description}
                className="col-span-3"
                placeholder="Description"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Meta Title</Label>
              <Input
                name="meta-title"
                defaultValue={meta_title}
                className="col-span-3"
                placeholder="Meta Title"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Meta Desc.</Label>
              <Input
                name="meta-description"
                defaultValue={meta_description}
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
              <SelectItems sectionId={section} />
            </div>
          </div>
          <DialogFooter>
            <DynamicButton title="Save" />
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

function SelectItems({ sectionId }: { sectionId: string }) {
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
    <Select name="section" defaultValue={sectionId}>
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
