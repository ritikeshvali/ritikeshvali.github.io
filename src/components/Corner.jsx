import ThemeToggle from "./ThemeToggle.jsx";
import { GitHubIcon, XIcon, LinkedInIcon, SubstackIcon } from "./Icons.jsx";
import { links } from "../data/links.js";
import { substackUrl } from "../data/notes.js";

// Fixed top-right chrome. Shown on desktop only (hidden < 60rem via CSS);
// on mobile the TopBar takes over. Icons only, no text nav.
export default function Corner() {
  return (
    <div className="corner">
      <a href={links.github} target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon /></a>
      <a href={links.x} target="_blank" rel="noopener" aria-label="X"><XIcon /></a>
      <a href={links.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
      <a href={substackUrl} target="_blank" rel="noopener" aria-label="Substack"><SubstackIcon /></a>
      <ThemeToggle />
    </div>
  );
}
