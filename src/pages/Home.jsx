import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Skills from "../components/Skills";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="w-screen bg-neutral-100 dark:bg-neutral-900">
        <Nav theme={theme} themeHandler={themeHandler} />
        <Banner theme={theme} />
        <Skills />
        <div className="h-96"></div>
      </div>
    </>
  );
}
