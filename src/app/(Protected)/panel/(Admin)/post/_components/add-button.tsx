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
import { AddPost } from "@/app/(Backend)/actions/post/addPost";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { GetCategory } from "@/app/(Backend)/actions/category/getCategory";
import { GetTag } from "@/app/(Backend)/actions/tag/getTag";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

type itemsTypes = {
  id: string;
  title: string;
};

export function AddButton() {
  const [state, dispatch] = useFormState(AddPost, null);
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

  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
  const [items, setItems] = useState<itemsTypes[]>([]);
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"} variant={"secondary"}>
          <Plus className="mr-2 h-4 w-4" /> Add Items
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Add Post</DialogTitle>
          <DialogDescription>
            Add Post, Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <form action={dispatch}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                required
                name="title"
                className="col-span-3"
                placeholder="Title"
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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Category</Label>
              <SelectCategory />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Image</Label>
              <Input required name="image" type="file" className="col-span-3" />
            </div>
          </div>
          <div className="pl-7 mb-5">
            <Separator className="mt-5" />
            <Input className="hidden" name="tag" value={selectedTagIds} />
            <>
              <h3 className="text-sm font-medium mt-6">Select Tags</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Select the items you want to add to post.
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
            <DynamicButton title="Add Post" />
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

function SelectCategory() {
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
    <Select required name="category">
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
