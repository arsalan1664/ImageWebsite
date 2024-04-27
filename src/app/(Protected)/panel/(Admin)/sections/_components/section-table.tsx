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
import { GetSection } from "@/app/(Backend)/actions/section/getSection";

export async function SectionTable() {
  const data = await GetSection();
  let Idcounter = 1;
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[90px]">Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-center">Number of Categories</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.sections?.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell>{Idcounter++}</TableCell>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell className="text-muted-foreground">
                {item.description}
              </TableCell>
              <TableCell className="text-center">
                {item.categories.length}
              </TableCell>
              <TableCell className="text-right">
                <div className="text-right flex items-center justify-center gap-4">
                  <ActionButton
                    id={item.id}
                    section={item.title}
                    description={item.description}
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
