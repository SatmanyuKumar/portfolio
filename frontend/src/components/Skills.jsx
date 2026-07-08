export default function Skills({ skills }) {
  return (
    <section id="skills" className="section wrap">
      <p className="class-decl">
        <span className="kw">public class</span> <span className="name">Skills</span> {'{'}
      </p>
      <div className="section-body skills-grid">
        {Object.entries(skills).map(([group, items]) => (
          <div className="skill-group" key={group}>
            <h3>{group}</h3>
            <ul className="tag-list">
              {items.map((item) => (
                <li className="tag" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="class-close">{'}'}</p>
    </section>
  );
}
