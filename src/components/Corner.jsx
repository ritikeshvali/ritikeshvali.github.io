import ThemeToggle from "./ThemeToggle.jsx";
import { links } from "../data/links.js";

// Fixed top-right chrome. Shown on desktop only (hidden < 60rem via CSS);
// on mobile the TopBar takes over.
export default function Corner() {
  return (
    <div className="corner">
      <nav className="cnav">
        <a href="#projects">projects</a>
        <a href="#writing">writing</a>
      </nav>
      <div className="csoc">
        <a href={links.github} target="_blank" rel="noopener">github</a>
        <a href={links.x} target="_blank" rel="noopener">x</a>
        <a href={links.linkedin} target="_blank" rel="noopener">linkedin</a>
      </div>
      <ThemeToggle />
    </div>
  );
}
