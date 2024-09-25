"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDiv() {
  return (
    <motion.div
      className="bg-gray-200 rounded-full my-16 h-16 w-1 sm:block "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    ></motion.div>
  );
}
