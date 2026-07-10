
  export default function Hero({ profile }) {
  const EMAIL = 'satmanyukumar123@gmail.com';
  const GITHUB = 'https://github.com/SatmanyuKumar';
  const LINKEDIN = 'https://www.linkedin.com/in/satmanyu-kumar-b2b622245';
  return (
    <header className="hero wrap">
      <div className="terminal">
        <div className="terminal-bar">
<span className="dot dot-red" />
<span className="dot dot-yellow" />
<span className="dot dot-green" />
<span className="terminal-title">~/portfolio</span>
        </div>
        <div className="terminal-body">
          <p className="prompt-line"><span className="sym">$</span> whoami</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">{profile.title}<span className="cursor" /></p>

          {/* <div className="hero-meta">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.phone}</span>
            <span>{profile.location}</span>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div> */}
   <div className="hero-meta">
  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
  <span>{profile.phone}</span>
  <span>{profile.location}</span>
  <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
  <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
</div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">view projects</a>
            <a className="btn btn-ghost" href="#contact">get in touch</a>
          </div>
        </div>
      </div>
    </header>
  );
}
