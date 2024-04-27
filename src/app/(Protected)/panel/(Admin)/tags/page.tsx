import { GetTag } from "@/app/(Backend)/actions/tag/getTag";
import Header from "../../../_components/Header";
import { Form, Loop } from "./tagForm";

async function page() {
  const data = await GetTag();
  return (
    <>
      <Header title={"Tags"} />
      <main className="flex flex-col gap-4 p-4 md:gap-8 md:p-6">
        <section className="flex-1 h-full flex flex-col justify-between overflow-y-auto p-6">
          <div className="mb-8 flex">
            <Form />
          </div>
          <Loop data={data.tags} />
        </section>
      </main>
    </>
  );
}

export default page;
