import "./ListItem.css";

const ListItem = (props) => {
  const moveMap = () => {
    console.log(props.name);
  }

  return (
    <div className="search-list-item">
      <div className="list-item-index">
        <div className="index-marker">
          <div className="index-number">{props.index + 1}</div>
        </div>
      </div>
      <div className="list-item-info">
        <div>
          <p>{props.name}</p>
          <p>{props.address}</p>
          <p>{props.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
