import './ActionButton.css'

function ActionButton(props) {
  return (
    <button
      className="action-button"
      onClick={props.onClickEvent}
    >
      <img
        className="action-icon"
        src={props.icon} 
		alt=""/>
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