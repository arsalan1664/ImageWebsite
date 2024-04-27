"use client";
import React from "react";
import { motion } from "framer-motion";

function EaseIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeIn", duration: "0.70" }}
    >
      {children}
    </motion.div>
  );
}

export default EaseIn;
