export default function Modal({ open, title, message, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <p className="modal-title">{title}</p>
        <p className="modal-message">{message}</p>
        <button className="btn btn-primary" onClick={onClose}>okay</button>
      </div>
    </div>
  );
}
