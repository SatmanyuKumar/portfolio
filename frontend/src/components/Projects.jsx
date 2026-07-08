export default function Projects({ projects }) {
  return (
    <section id="projects" className="section wrap">
      <p className="class-decl">
        <span className="kw">public class</span> <span className="name">Projects</span> <span className="kw">extends</span> Portfolio {'{'}
      </p>
      <div className="section-body">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3 className="project-title">
              {project.link && project.link !== '#' ? (
                <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>
              ) : (
                project.title
              )}
            </h3>
            <p className="project-desc">{project.description}</p>
            <ul className="project-highlights">
              {project.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <ul className="tag-list">
              {project.tech.map((t) => <li className="tag" key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <p className="class-close">{'}'}</p>
    </section>
  );
}
