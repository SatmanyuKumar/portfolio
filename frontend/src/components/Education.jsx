export default function Education({ education }) {
  return (
    <section id="education" className="section wrap">
      <p className="class-decl">
        <span className="kw">public class</span> <span className="name">Education</span> {'{'}
      </p>
      <div className="section-body">
        <ul className="edu-list">
          {education.map((edu) => (
            <li className="edu-item" key={edu.degree}>
              <div className="edu-row">
                <span className="edu-degree">{edu.degree}</span>
                <span className="edu-period">{edu.period}</span>
              </div>
              <div className="edu-school">{edu.school}</div>
              <div className="edu-detail">{edu.detail}</div>
            </li>
          ))}
        </ul>
      </div>
      <p className="class-close">{'}'}</p>
    </section>
  );
}
