import Header from "@/app/(Protected)/_components/Header";
import { SectionTable } from "./_components/section-table";

function Categories() {
  return (
    <>
      <Header title={"Section"} />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <SectionTable />
      </main>
    </>
  );
}

export default Categories;
