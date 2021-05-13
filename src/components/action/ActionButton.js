import './ActionButton.css'

function ActionButton(props) {
  return (
    <button className="action-button">
      <img
        className="action-icon"
        src={props.icon} />
      <span
        className="action-name">
        {props.name}
      </span>
    </button>
  );
}

export default ActionButton;