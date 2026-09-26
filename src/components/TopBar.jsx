import ThemeToggle from "./ThemeToggle.jsx";
import { links } from "../data/links.js";

// Mobile top bar. Hidden on desktop, where Corner takes over.
export default function TopBar() {
  return (
    <div className="topbar">
      <nav className="nav">
        <a href="#projects">projects</a>
        <a href="#writing">writing</a>
        <a href={links.github} target="_blank" rel="noopener">github</a>
      </nav>
      <ThemeToggle />
    </div>
  );
}
