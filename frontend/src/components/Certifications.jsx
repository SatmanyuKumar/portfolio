export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="section wrap">
      <p className="class-decl">
        <span className="kw">public class</span> <span className="name">Certifications</span> {'{'}
      </p>
      <div className="section-body">
        <ul className="cert-list">
          {certifications.map((cert) => (
            <li className="cert-item" key={cert}>
              <span className="check">✓</span>
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="class-close">{'}'}</p>
    </section>
  );
}
