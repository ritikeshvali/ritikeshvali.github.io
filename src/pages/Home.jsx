import Corner from "../components/Corner.jsx";
import TopBar from "../components/TopBar.jsx";
import Intro from "../components/Intro.jsx";
import Projects from "../components/Projects.jsx";
import Writing from "../components/Writing.jsx";
import { links } from "../data/links.js";

export default function Home() {
  return (
    <>
      <Corner />
      <div className="page">
        <TopBar />

        <header className="identity">
          <h1>Ritikesh Vali</h1>
          <div className="tag">swe @ microsoft · distributed systems · applied ai</div>
        </header>

        <Intro />
        <Projects />
        <Writing />

        <footer className="meta">
          <div className="social">
            <a href={links.github} target="_blank" rel="noopener">github</a> ·{" "}
            <a href={links.x} target="_blank" rel="noopener">x</a> ·{" "}
            <a href={links.linkedin} target="_blank" rel="noopener">linkedin</a>
          </div>
          <div className="archive">
            <a href="/v1/">the 2018 version of this site is still up</a>, out of respect.
          </div>
        </footer>
      </div>
    </>
  );
}
