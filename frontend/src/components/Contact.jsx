import { useState } from 'react';
import { sendContactMessage } from '../api.js';
import { containsAbusiveContent, MODERATION_MESSAGE } from '../contentFilter.js';
import Modal from './Modal.jsx';

export default function Contact({ email }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // { ok: boolean, message: string }
  const [sending, setSending] = useState(false);
  const [showModeration, setShowModeration] = useState(false);
  const [moderationMessage, setModerationMessage] = useState(MODERATION_MESSAGE);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check locally first — catches it instantly, no network round-trip needed.
    if (containsAbusiveContent(form.message)) {
      setModerationMessage(MODERATION_MESSAGE);
      setShowModeration(true);
      return;
    }

    setSending(true);
    setStatus(null);
    const result = await sendContactMessage(form);

    // The backend's AI check re-evaluates too (someone could skip this UI entirely,
    // or write something the local word-list doesn't catch), so show its verdict.
    if (result.flagged) {
      setModerationMessage(result.message || MODERATION_MESSAGE);
      setShowModeration(true);
      setSending(false);
      return;
    }

    setStatus(result);
    setSending(false);
    if (result.ok) setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section wrap">
      <p className="class-decl">
        <span className="kw">public class</span> <span className="name">Contact</span> {'{'}
      </p>
      <div className="section-body">
        <p className="about-text" style={{ marginBottom: 20 }}>
          Have a role, project, or just want to talk Java? Drop a message below,
          or reach me directly at <a href={`mailto:${email}`}>{email}</a>.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">name</label>
            <input id="name" name="name" required value={form.name} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="email">email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="message">message</label>
            <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} />
          </div>
          <button className="btn btn-primary" type="submit" disabled={sending}>
            {sending ? 'sending…' : 'send message'}
          </button>

          {status && (
            <p className={`form-status ${status.ok ? 'ok' : 'err'}`}>{status.message}</p>
          )}
        </form>
      </div>
      <p className="class-close">{'}'}</p>

      <Modal
        open={showModeration}
        title="Hold on"
        message={moderationMessage}
        onClose={() => setShowModeration(false)}
      />
    </section>
  );
}
