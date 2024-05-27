import React from "react";
import iconBanner from "../assets/banner.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon icon={faComment} /> Contact Me
        </button>
      </div>
    </>
  );
}
