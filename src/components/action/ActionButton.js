import './ActionButton.css'

function ActionButton(props) {
  return (
    <button
      className="action-button"
      onClick={props.onClickEvent}
    >
      <img
        className="action-icon"
        src={props.icon} />
      <div>
        <span
          className="action-name">
          {props.name}
        </span>
      </div>
    </button>
  );
}

export default ActionButton;