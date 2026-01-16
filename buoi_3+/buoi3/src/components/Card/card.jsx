import './card.css'
const Card = ({ title, content, name, time, attachments }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        <button className="menu-btn">⋯</button>
      </div>

      <p className="card-content">{content}</p>
      <div className="card-user">
        <span>{name}</span>
      </div>
      <div className="card-footer">
        <span className="attachment">📎 {attachments}</span>
        <span className="date">⏰ {time}</span>
      </div>
    </div>
  );
};
export default Card;
