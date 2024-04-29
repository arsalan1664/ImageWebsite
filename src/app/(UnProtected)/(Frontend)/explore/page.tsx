import { GetSection } from "@/app/(Backend)/actions/section/getSection";
import { Categories } from "../../_components/Carousel";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
///// the code is inserted because of prerender error occure during build process

export default async function Explore() {
  const data = await GetSection();
  return (
    <div className="max-w-7xl mx-auto pt-14 px-4 sm:px-6 lg:px-8">
      <div className="py-12">
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-foreground sm:text-4xl sm:leading-10">
            Explore photos
          </h2>
          <p className="mt-3 max-w-4xl mx-auto text-xl leading-7 text-muted-foreground sm:mt-4">
            Browse through our extensive collection of over a thousand
            high-resolution photos, categorized for easy exploration. These
            popular photo categories offer free downloads for all images.
          </p>
        </div>

        {data.sections.map((item: any) => (
          <div key={item.id} className=" my-20 mx-10 md:mx-16 ">
            <div className="flex flex-col text-lg leading-6 font-medium text-foreground ">
              <h3>{item.title}</h3>
              <h6 className="mt-1 max-w-4xl  text-sm leading-7 text-muted-foreground sm:mt-1">
                {item.description}
              </h6>
            </div>

            <div className="mt-6 ">
              <Categories data={item.categories} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
