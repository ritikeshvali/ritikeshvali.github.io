import Corner from "../components/Corner.jsx";
import TopBar from "../components/TopBar.jsx";
import Intro from "../components/Intro.jsx";
import Projects from "../components/Projects.jsx";
import Writing from "../components/Writing.jsx";
import { GitHubIcon, XIcon, LinkedInIcon, SubstackIcon } from "../components/Icons.jsx";
import { links } from "../data/links.js";
import { substackUrl } from "../data/notes.js";

export default function Home() {
  return (
    <>
      <Corner />
      <div className="page">
        <TopBar />

        <header className="identity">
          <img className="avatar" src="/ritikesh.jpg" alt="Ritikesh Vali" />
          <div className="identity-text">
            <h1>Ritikesh Vali</h1>
            <div className="tag">
              I build things, and I&rsquo;m drawn to the question of
              what&rsquo;s worth building.
            </div>
          </div>
        </header>

        <Intro />
        <Projects />
        <Writing />

        <footer className="meta">
          <div className="social">
            <a href={links.github} target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon /></a>
            <a href={links.x} target="_blank" rel="noopener" aria-label="X"><XIcon /></a>
            <a href={links.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href={substackUrl} target="_blank" rel="noopener" aria-label="Substack"><SubstackIcon /></a>
          </div>
          <div className="archive">
            <a href="/v1/">The 2018 version of this site is still up</a>, out of respect.
          </div>
        </footer>
      </div>
    </>
  );
}
