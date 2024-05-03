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
import { useFormStatus } from "react-dom";
import { Loader2, Pencil, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { EditPost } from "@/app/(Backend)/actions/post/editPost";
import { GetCategory } from "@/app/(Backend)/actions/category/getCategory";
import { GetTag } from "@/app/(Backend)/actions/tag/getTag";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";

export function EditButton({ data }: { data: any }) {
  const [state, dispatch] = useFormState(EditPost, null);
  const [selectedTagIds, setSelectedTagIds] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetTag();
        setItems(data.tags);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const ids: string[] = [];
    data.postTags.forEach((item: any) => {
      const id = item.tagId;
      ids.push(id);
    });
    setSelectedTagIds(ids);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Pencil size={16} className="mr-2" /> Edit{" "}
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Edit Post</DialogTitle>
          <DialogDescription>
            Edit Post, Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <form action={dispatch}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <input name="id" defaultValue={data?.id} className="hidden" />
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                required
                name="title"
                className="col-span-3"
                placeholder="Title"
                defaultValue={data?.title}
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
                defaultValue={data?.description}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Category</Label>
              <SelectCategory id={data.categoriesId} />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Image</Label>
              <Input name="image" type="file" className="col-span-3" />
            </div>
          </div>
          <div className="pl-7 mb-5">
            <Separator className="mt-5" />
            <Input className="hidden" name="tag" value={selectedTagIds} />
            <>
              <h3 className="text-sm font-medium mt-6">Select Tags</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Select the items you want to Edit to post.
              </p>
              <ScrollArea className="h-24">
                <div className="grid grid-cols-5 items-center gap-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-2 ">
                      <Checkbox
                        checked={selectedTagIds.includes(item.id)}
                        onCheckedChange={(checked) => {
                          const newSelectedTagIds = [...selectedTagIds];
                          if (checked) {
                            newSelectedTagIds.push(item.id);
                          } else {
                            const index = newSelectedTagIds.indexOf(item.id);
                            newSelectedTagIds.splice(index, 1);
                          }
                          setSelectedTagIds(newSelectedTagIds);
                        }}
                      />
                      <Label className="text-xs">{item.title}</Label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </>
          </div>
          <DialogFooter>
            <DynamicButton title="Edit Post" />
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

function SelectCategory({ id }: { id: string }) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetCategory();
        setCategory(data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Select name="category" defaultValue={id}>
      <SelectTrigger className="w-[270px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        {category?.map((item: { id: any; title: any }) => (
          <SelectItem key={item.id} value={item.id}>
            {item.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function SelectTag({ id }: { id: string }) {
  const [tag, setTag] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetTag();
        setTag(data.tags);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Select name="tag" defaultValue={id}>
      <SelectTrigger className="w-[270px]">
        <SelectValue placeholder="Select a tag" />
      </SelectTrigger>
      <SelectContent>
        {tag?.map((item: { id: any; title: any }) => (
          <SelectItem key={item.id} value={item.id}>
            {item.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
