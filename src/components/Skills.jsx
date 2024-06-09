import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Html from "../assets/img/html.png";
import Css from "../assets/img/css-3.png";
import Js from "../assets/img/js.png";
import Php from "../assets/img/php.png";
import Sql from "../assets/img/sql.png";
import Rc from "../assets/img/react.png";

export default function Skills() {
  const [tab, setTab] = useState(1);
  const skills = useRef(null);
  const isInView = useInView(skills);

  return (
    <>
      <div className="flex w-auto h-10 bg-neutral-200 rounded-lg mx-10 mt-10">
        <button
          ref={skills}
          onClick={() => setTab(1)}
          className={
            tab === 1
              ? "w-full relative flex before:bg-white before:w-[100%] before:left-1 before:h-8 before:my-1 before:flex before:absolute before:rounded-lg before:transition before:ease-in-out before:duration-500"
              : "w-full relative flex before:transition before:ease-in-out before:duration-500"
          }
        >
          <div className="flex relative m-auto">Skills</div>
        </button>
        <button
          onClick={() => setTab(2)}
          className={
            tab === 2
              ? "w-full relative flex before:bg-white before:w-[100%] before:h-8 before:my-1 before:flex before:absolute before:rounded-lg before:transition before:ease-in-out before:duration-500"
              : "w-full relative flex before:transition before:ease-in-out before:duration-500"
          }
        >
          <div className="flex relative m-auto">Library</div>
        </button>
        <button
          onClick={() => setTab(3)}
          className={
            tab === 3
              ? "w-full relative flex before:bg-white before:w-[100%] before:right-1 before:h-8 before:my-1 before:flex before:absolute before:rounded-lg before:transition before:ease-in-out before:duration-500"
              : "w-full relative flex before:transition before:ease-in-out before:duration-500"
          }
        >
          <div className="flex relative m-auto">Tools</div>
        </button>
      </div>
      <div className="flex mx-10 mt-2">
        <div className="grid w-full bg-neutral-200 p-5 rounded-lg">
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
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white duration-1000"
                    : "opacity-0 flex h-20 w-full rounded-lg bg-white"
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
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white duration-[1500ms]"
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
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white duration-[2000ms]"
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
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white duration-1000"
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
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white duration-[1500ms]"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Sql} alt="" />
                  <p className="text-center text-sm">SQL</p>
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
                    ? "opacity-1 flex h-20 w-full rounded-lg bg-white duration-1000"
                    : ""
                }
              >
                <div className="m-auto block">
                  <img className="w-10 h-10 m-auto" src={Rc} alt="" />
                  <p className="text-center text-sm">React JS</p>
                </div>
              </motion.div>
            </div>
          ) : (
            "Tech"
          )}
        </div>
      </div>
    </>
  );
}
