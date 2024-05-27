import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faCode,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export default function Nav({ theme, themeHandler }) {
  return (
    <>
      <div className="z-[100] fixed flex w-4/5 h-16 left-[50%] translate-x-[-50%] top-[88%] rounded-lg px-5 justify-between bg-white/80 drop-shadow-sm backdrop-blur-sm dark:bg-neutral-600/50">
        <div className="grid grid-cols-5 w-full h-100 place-items-center dark:text-white">
          <div className="">
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div className="">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <div className="">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="">
            <button type="button" onClick={() => themeHandler()}>
              {theme === "dark" ? (
                <FontAwesomeIcon
                  icon={faMoon}
                  className="duration-500 text-[#6c63ff]"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faSun}
                  className="duration-500 text-yellow-500"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
