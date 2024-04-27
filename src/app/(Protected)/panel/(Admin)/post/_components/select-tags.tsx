import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";

function SelectTag() {
  const items = [
    {
      id: "recents",
      title: "Recents",
    },
    {
      id: "home",
      title: "Home",
    },
    {
      id: "applications",
      title: "Applications",
    },
    {
      id: "desktop",
      title: "Desktop",
    },
    {
      id: "downloads",
      title: "Downloads",
    },
    {
      id: "documents",
      title: "Documents",
    },
    {
      id: "recents",
      title: "Recents",
    },
    {
      id: "home",
      title: "Home",
    },
    {
      id: "applications",
      title: "Applications",
    },
    {
      id: "desktop",
      title: "Desktop",
    },
    {
      id: "downloads",
      title: "Downloads",
    },
    {
      id: "documents",
      title: "Documents",
    },
    {
      id: "recents",
      title: "Recents",
    },
    {
      id: "home",
      title: "Home",
    },
    {
      id: "applications",
      title: "Applications",
    },
    {
      id: "desktop",
      title: "Desktop",
    },
    {
      id: "downloads",
      title: "Downloads",
    },
    {
      id: "documents",
      title: "Documents",
    },
    {
      id: "recents",
      title: "Recents",
    },
    {
      id: "home",
      title: "Home",
    },
    {
      id: "applications",
      title: "Applications",
    },
    {
      id: "desktop",
      title: "Desktop",
    },
    {
      id: "downloads",
      title: "Downloads",
    },
    {
      id: "documents",
      title: "Documents",
    },
    {
      id: "recents",
      title: "Recents",
    },
    {
      id: "home",
      title: "Home",
    },
    {
      id: "applications",
      title: "Applications",
    },
    {
      id: "desktop",
      title: "Desktop",
    },
    {
      id: "downloads",
      title: "Downloads",
    },
    {
      id: "documents",
      title: "Documents",
    },
    {
      id: "recents",
      title: "Recents",
    },
    {
      id: "home",
      title: "Home",
    },
    {
      id: "applications",
      title: "Applications",
    },
    {
      id: "desktop",
      title: "Desktop",
    },
    {
      id: "downloads",
      title: "Downloads",
    },
    {
      id: "documents",
      title: "Documents",
    },
  ] as const;

  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);

  return (
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
                onCheckedChange={(checked: any) => {
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
  );
}

export default SelectTag;
