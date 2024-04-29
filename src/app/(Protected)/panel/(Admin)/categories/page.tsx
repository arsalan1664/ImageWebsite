import Header from "@/app/(Protected)/_components/Header";
import { CategoryTable } from "./_components/category-table";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
///// the code is inserted because of prerender error occure during build process

function Categories() {
  return (
    <>
      <Header title={"Categories" || null} />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <CategoryTable />
      </main>
    </>
  );
}

export default Categories;
