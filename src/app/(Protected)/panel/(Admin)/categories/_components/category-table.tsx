import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ActionButton } from "./action-button";
import { AddButton } from "./add-button";
import Image from "next/image";
import { GetCategory } from "@/app/(Backend)/actions/category/getCategory";

export async function CategoryTable() {
  const data = await GetCategory();
  let idCounter = 1;

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[90px]">Id</TableHead>
            <TableHead className="w-[150px]">Cover Image</TableHead>
            <TableHead className="w-[150px]">Title</TableHead>
            <TableHead>Descriptions</TableHead>
            <TableHead className="text-center">Section</TableHead>
            <TableHead className="text-center">Number of Posts</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.categories?.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell>{idCounter++}</TableCell>
              <TableCell>
                <Image
                  width={80}
                  height={40}
                  src={item.imageUrl}
                  alt="cover image"
                  className="drop-shadow-lg"
                />
              </TableCell>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.description}</TableCell>

              <TableCell className="text-center">
                {item.section?.title || "--"}
              </TableCell>

              <TableCell className="text-center">
                {item.posts?.length}
              </TableCell>

              <TableCell className="text-right">
                <div className="text-right flex items-center justify-center gap-4">
                  <ActionButton
                    id={item.id}
                    title={item.title}
                    meta_title={item.metaTitle}
                    description={item.description}
                    meta_description={item.metaDescription}
                    section={item.section?.id || ""}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddButton />
    </>
  );
}
