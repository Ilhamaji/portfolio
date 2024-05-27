import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <div className="grid grid-cols-2 w-4/5 mx-auto mt-10">
        <button className="w-auto h-5 bg-neutral-200 text-center h-8 rounded-l-lg dark:bg-neutral-700 active:bg-white">
          Skills
        </button>
        <button className="w-auto h-5 bg-neutral-200 text-center h-8 rounded-r-lg dark:bg-neutral-700 active:bg-white">
          Tech
        </button>
      </div>
      <div className="grid grid-cols-3 w-4/5 mx-auto mt-2 gap-2">
        <div className="flex w-full h-full bg-neutral-200 rounded-md justify-center">
          item
        </div>
        <div className="flex w-full h-full bg-neutral-200 rounded-md justify-center">
          item
        </div>
        <div className="flex w-full h-full bg-neutral-200 rounded-md justify-center">
          item
        </div>
        <div className="flex w-full h-full bg-neutral-200 rounded-md justify-center">
          item
        </div>
        <div className="flex w-full h-full bg-neutral-200 rounded-md justify-center">
          item
        </div>
        <div className="flex w-full h-full bg-neutral-200 rounded-md justify-center">
          item
        </div>
      </div>
    </>
  );
}
