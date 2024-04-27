import React from "react";
import Navbar from "../_components/Navbar";
import Footer2 from "../_components/Footer2";

function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer2 />
      {modal}
    </div>
  );
}

export default layout;
