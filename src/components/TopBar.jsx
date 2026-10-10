import ThemeToggle from "./ThemeToggle.jsx";
import { GitHubIcon, XIcon, LinkedInIcon, SubstackIcon } from "./Icons.jsx";
import { links } from "../data/links.js";
import { substackUrl } from "../data/notes.js";

// Mobile top bar. Hidden on desktop, where Corner takes over.
// Icons only, right-aligned, no text nav.
export default function TopBar() {
  return (
    <div className="topbar">
      <a href={links.github} target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon /></a>
      <a href={links.x} target="_blank" rel="noopener" aria-label="X"><XIcon /></a>
      <a href={links.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
      <a href={substackUrl} target="_blank" rel="noopener" aria-label="Substack"><SubstackIcon /></a>
      <ThemeToggle />
    </div>
  );
}
