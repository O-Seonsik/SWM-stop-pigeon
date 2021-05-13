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
          <div className="info-name" onClick={moveMap}>{props.name}</div>
          <div className="info-address">{props.address}</div>
          <div className="info-phone">{props.phone}</div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
