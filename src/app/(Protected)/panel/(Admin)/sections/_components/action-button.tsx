"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal, MoreVertical, Pencil, Trash } from "lucide-react";
import { EditButton } from "./edit-button";
import { DeleteButton } from "./delete-button";
import { Button } from "@/components/ui/button";

export function ActionButton({
  id,
  section,
  description,
}: {
  id: string;
  section: String;
  description: String;
}) {
  const handleDelete = () => {
    alert(id);
  };
  return (
    // <Dialog>
    //   <DropdownMenu>
    //     <DropdownMenuTrigger className="border-none">
    //       <div className="h-8 w-8 p-0 flex items-center justify-center border-none">
    //         <MoreVertical className="h-4 w-4" />
    //       </div>
    //     </DropdownMenuTrigger>
    //     <DropdownMenuContent>
    //       <DialogTrigger asChild>
    //         <DropdownMenuItem
    //           onSelect={(e) => {
    //             e.preventDefault();
    //           }}
    //         >
    //           <span>Edit</span>
    //         </DropdownMenuItem>
    //       </DialogTrigger>
    //       <DialogTrigger asChild>
    //         <DropdownMenuItem
    //           onSelect={(e) => {
    //             e.preventDefault();
    //           }}
    //         >
    //           <span>Delete</span>
    //         </DropdownMenuItem>
    //       </DialogTrigger>
    //     </DropdownMenuContent>
    //   </DropdownMenu>
    //   <EditButton id={id} section={section} description={description} />
    //   <DeleteButton id={id} />
    // </Dialog>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        {/* <Edit id={id} section={section} description={description} /> */}
        <EditButton id={id} section={section} description={description} />
        <DropdownMenuSeparator />
        <DeleteButton id={id} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Edit() {
  return (
    <Dialog>
      <DialogTrigger>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Update item
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update form</DialogTitle>
          <DialogDescription>
            Here you can add fields to update your form
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function Delete() {
  return (
    <Dialog>
      <DialogTrigger>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Delete item
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
