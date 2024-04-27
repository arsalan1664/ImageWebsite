import React, { Suspense } from "react";
import { db } from "@/lib/db";
import Modal from "../../_component/Modal";

async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  return <Modal id={id}></Modal>;
}

export default page;
