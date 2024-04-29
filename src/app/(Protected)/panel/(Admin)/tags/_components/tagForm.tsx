"use client";
import { AddTag } from "@/app/(Backend)/actions/tag/addTag";
import { DeleteTag } from "@/app/(Backend)/actions/tag/deleteTag";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, X } from "lucide-react";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

export function Form() {
  const [state, dispatch] = useFormState(AddTag, null);
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
    <form className="flex" action={dispatch}>
      <Input
        id="tag"
        name="tag"
        type="text"
        placeholder="New tag name"
        className="flex-1 mr-2 rounded-full "
      />
      <DynamicButton title="Add Items" />
    </form>
  );
}

const DynamicButton = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button className="rounded-full" type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="animate-spin h-5 w-5 mr-2" /> Loading...
        </>
      ) : (
        title
      )}
    </Button>
  );
};

type data = {
  id: number;
  title: string;
  postTag?: any[];
}[];

export function Loop({ data }: { data: data }) {
  const [state, dispatch] = useFormState(DeleteTag, null);
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
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 ">
      {data?.map((tag) => (
        <Badge
          key={tag.id}
          className="cursor-pointer p-2 pl-4 relative group"
          variant="secondary"
        >
          {tag.title}
          <form action={dispatch}>
            <input
              className="hidden"
              name="id"
              id="id"
              value={tag.id}
              readOnly
            />
            <MyButton />
          </form>
        </Badge>
      ))}
    </div>
  );
}

const MyButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant={"destructive"}
      className={
        pending
          ? "h-4 p-0 rounded-full  absolute -top-3 right-0 "
          : "h-4 p-0 rounded-full  absolute -top-3 right-0  hidden group-hover:block"
      }
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin h-2 w-2 m-1" />
        </>
      ) : (
        <X className="h-3 w-4" />
      )}
    </Button>
  );
};
