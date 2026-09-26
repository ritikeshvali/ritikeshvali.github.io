import { notes, substackUrl } from "../data/notes.js";

export default function Writing() {
  return (
    <section id="writing" className="writing">
      <div className="label">writing</div>
      <p>
        A paper-reading notebook on inference, ML, RL, agents, retrieval, and
        systems, where I work out what I actually understood versus what I only
        nodded along to.
      </p>

      {notes.length > 0 && (
        <ul className="notes">
          {notes.map((n) => (
            <li key={n.url}>
              <a href={n.url} target="_blank" rel="noopener">{n.title}</a>
              <span className="note-date">{n.date}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="links">
        <a href={substackUrl} target="_blank" rel="noopener">read on substack</a>
      </div>
    </section>
  );
}
