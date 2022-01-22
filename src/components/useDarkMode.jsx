import { useEffect, useState, useLayoutEffect } from "react";

export default () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("data-theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("data-theme", "dark");
    }
  };

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem("data-theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};
