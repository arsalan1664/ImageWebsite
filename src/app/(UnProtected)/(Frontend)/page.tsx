import React from "react";
import HeroSection from "../_components/HeroSecion";
import Images from "../_components/Images";
import { GetPost } from "@/app/(Backend)/actions/post/getPost";

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
