"use client";
import React from "react";
import { motion } from "framer-motion";

function AnimateTable({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "backIn", duration: "0.50" }}
    >
      {children}
    </motion.div>
  );
}

export default AnimateTable;
