export default function Project({ name, meta, oneliner, problem, links }) {
  return (
    <div className="project">
      <div className="project-head">
        <h3>{name}</h3>
        <div className="project-meta">{meta}</div>
      </div>
      <p className="oneliner">{oneliner}</p>
      <p className="detail">{problem}</p>
      <div className="links">
        {links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
