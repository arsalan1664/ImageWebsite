"use client";
import React, { useEffect, useState } from "react";
import {
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Calculator, Calendar, Layers3, Smile, Tag } from "lucide-react";
import { GetCategory } from "@/app/(Backend)/actions/category/getCategory";
import { useRouter } from "next/navigation";

function SearchDropDown({ query }: { query: string | null }) {
  const router = useRouter();
  const [categories, setCategories] = useState<any[] | null>(null);

  const handleAction = async () => {
    try {
      const { categories } = await GetCategory();
      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleAction();
  }, []);
  return (
    <CommandList
      className={
        query
          ? " absolute top-16 rounded-lg w-[90%] md:w-[93%] z-50 bg-background/90  text-left"
          : "hidden"
      }
    >
      <CommandEmpty className="text-center p-2 hidden">
        No results found.
      </CommandEmpty>
      <CommandGroup heading="Categories">
        {categories?.map((item) => (
          <CommandItem
            key={item.id}
            onSelect={() => router.push(`/c/${item.id}`)}
          >
            <Layers3 className="mr-2 h-4 w-4" />
            <span>{item.title}</span>
          </CommandItem>
        ))}
      </CommandGroup>
      {/* <CommandSeparator /> */}
      {/* <CommandGroup heading="Tags">
        <CommandItem>
          <Tag className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </CommandItem>
        <CommandItem>
          <Tag className="mr-2 h-4 w-4" />
          <span>Billing</span>
        </CommandItem>
        <CommandItem>
          <Tag className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </CommandItem>
      </CommandGroup> */}
    </CommandList>
  );
}

export default SearchDropDown;
