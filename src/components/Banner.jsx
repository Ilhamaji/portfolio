import React from "react";
import iconBanner from "../assets/banner.svg";
import { motion } from "framer-motion";

export default function Banner({ theme }) {
  return (
    <>
      <div className="block pt-10 w-4/5 mx-auto text-center">
        <motion.img src={iconBanner} className="w-[60%] mx-auto" />
        <motion.div className="ban-text text-3xl font-bold mx-auto mt-5 dark:text-white">
          Hi! I'm Ilham
        </motion.div>
        <div className="ban-text text-xl font-bold mx-auto text-neutral-400">
          Front-End Web Developer
        </div>
        <div className="lorem mt-1 leading-5 dark:text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
          laboriosam dolorem libero ea deserunt ad facilis debitis, repudiandae
          laborum iure eaque, sed omnis consequuntur nisi adipisci tenetur
          reprehenderit perspiciatis corrupti.
        </div>
        <button className="px-5 py-2 bg-[#6c63ff] rounded-md mt-4 text-white font-semibold">
          <svg
            className="w-6 h-6 text-gray-800 text-white inline mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z"
              clip-rule="evenodd"
            />
          </svg>
          Contact Me
        </button>
      </div>
    </>
  );
}
