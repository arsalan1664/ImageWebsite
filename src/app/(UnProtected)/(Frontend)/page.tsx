import React from "react";
import HeroSection from "../_components/HeroSecion";
import Images from "../_components/Images";
import { GetPost } from "@/app/(Backend)/actions/post/getPost";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
///// the code is inserted because of prerender error occure during build process

async function Home() {
  const images = await GetPost();
  return (
    <>
      <HeroSection />
      <Images images={images} />
    </>
  );
}

export default Home;
