import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Html from "../assets/img/html.webp";
import Css from "../assets/img/css-3.webp";
import Js from "../assets/img/js.webp";
import Php from "../assets/img/php.png";
import Sql from "../assets/img/sql.png";
import Rc from "../assets/img/react.svg";
import Java from "../assets/img/java.png";
import Tw from "../assets/img/tailwindcss.webp";
import Fb from "../assets/img/flowbite.svg";
import Fm from "../assets/img/framer-motion.webp";
import Fireb from "../assets/img/firebase-icon.svg";
import Vsc from "../assets/img/vscode.webp";
import Git from "../assets/img/git.webp";
import GitHub from "../assets/img/github.webp";
import Npm from "../assets/img/npm.webp";
import Vite from "../assets/img/vite.svg";
import Figma from "../assets/img/figma.webp";
import Netlify from "../assets/img/netlify-icon.svg";

export default function Skills() {
  const [tab, setTab] = useState(1);
  const skills = useRef(null);
  const isInView = useInView(skills);

  return (
    <>
      <div className="title mt-5 text-center text-3xl font-bold dark:text-white">
        Skills
      </div>
      <div className="flex w-auto h-10 bg-neutral-200 dark:bg-neutral-600 dark:text-white rounded-lg mx-10 mt-1">
        <button
          ref={skills}
          onClick={() => setTab(1)}
          className={
            tab === 1
              ? "w-full relative flex before:bg-white before:w-[100%] before:left-1 before:h-8 before:my-1 before:flex before:absolute before:rounded-lg before:transition before:ease-in-out before:duration-500 dark:before:bg-[#6c63ff]"
              : "w-full relative flex before:transition before:ease-in-out before:duration-500"
          }
        >
          <div className="flex relative m-auto">Skills</div>
        </button>
        <button
          onClick={() => setTab(2)}
          className={
            tab === 2
              ? "w-full relative flex before:bg-white before:w-[100%] before:h-8 before:my-1 before:flex before:absolute before:rounded-lg before:transition before:ease-in-out before:duration-500 dark:before:bg-[#6c63ff]"
              : "w-full relative flex before:transition before:ease-in-out before:duration-500"
          }
        >
          <div className="flex relative m-auto">Library</div>
        </button>
        <button
          onClick={() => setTab(3)}
          className={
            tab === 3
              ? "w-full relative flex before:bg-white before:w-[100%] before:right-1 before:h-8 before:my-1 before:flex before:absolute before:rounded-lg before:transition before:ease-in-out before:duration-500 dark:before:bg-[#6c63ff]"
              : "w-full relative flex before:transition before:ease-in-out before:duration-500"
          }
        >
          <div className="flex relative m-auto">Tools</div>
        </button>
      </div>
      <div className="flex mx-10 mt-2">
        <div className="grid w-full bg-neutral-200 dark:bg-neutral-600 p-5 rounded-lg">
          {tab === 1 ? (
            <motion.div
              animate={{
                opacity: [0, 1],
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
              }}
              className="grid grid-cols-3 md:grid-cols-3 place-content-around gap-4"
            >
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-1000"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Html} alt="" />
                  <p className="text-center text-sm">HTML 5</p>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.75,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-[1500ms]"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Css} alt="" />
                  <p className="text-center text-sm">CSS 3</p>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-[2000ms]"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Js} alt="" />
                  <p className="text-center text-sm">JavaScript</p>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-1000"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Php} alt="" />
                  <p className="text-center text-sm">PHP</p>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.75,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-[1500ms]"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Sql} alt="" />
                  <p className="text-center text-sm">SQL</p>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.75,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-[2000ms]"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Java} alt="" />
                  <p className="text-center text-sm">Java</p>
                </div>
              </motion.div>
            </motion.div>
          ) : tab === 2 ? (
            <div className="grid grid-cols-3 md:grid-cols-3 place-content-around gap-4">
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-1000"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Rc} alt="" />
                  <p className="text-center text-sm">React JS</p>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-[1500ms]"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Tw} alt="" />
                  <p className="text-center text-sm">TailwindCSS</p>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-[2000ms]"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Fb} alt="" />
                  <p className="text-center text-sm">Flowbite</p>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-[1000ms]"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Fm} alt="" />
                  <p className="text-center text-sm">Framer</p>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-[1500ms]"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Fireb} alt="" />
                  <p className="text-center text-sm">Firebase</p>
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="grid grid-cols-3 md:grid-cols-3 place-content-around gap-4">
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-1000"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Vsc} alt="" />
                  <p className="text-center text-sm">VS Code</p>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-[1500ms]"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Figma} alt="" />
                  <p className="text-center text-sm">Figma</p>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-[2000ms]"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Vite} alt="" />
                  <p className="text-center text-sm">Vite</p>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-1000"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Git} alt="" />
                  <p className="text-center text-sm">Git</p>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-[1500ms]"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={GitHub} alt="" />
                  <p className="text-center text-sm">GitHub</p>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className={
                  isInView
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white dark:bg-neutral-500 dark:text-white duration-[2000ms]"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Npm} alt="" />
                  <p className="text-center text-sm">NPM</p>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
