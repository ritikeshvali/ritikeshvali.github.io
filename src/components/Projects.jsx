import Project from "./Project.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects">
      <div className="label">projects</div>
      {projects.map((p) => (
        <Project key={p.name} {...p} />
      ))}
    </section>
  );
}
