import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "./Icons.jsx";

export default function ThemeToggle() {
  // null until mounted so we can read the resolved theme without a flash
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const attr = root.getAttribute("data-theme");
    const sysDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(attr ? attr === "dark" : sysDark);
  }, []);

  function toggle() {
    const root = document.documentElement;
    const sysDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = root.getAttribute("data-theme") || (sysDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    setDark(next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  }

  return (
    <button
      className="icon-btn theme-btn"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title="Toggle theme"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
