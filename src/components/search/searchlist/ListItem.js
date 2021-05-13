import "./ListItem.css";

function ListItem(props) {
  return (
    <div className="search-list-item">
      <div className="list-item-index">{props.index + 1}</div>
      <div className="list-item-info">
        <div>
          <p>{props.name}</p>
          <p>{props.address}</p>
          <p>{props.phone}</p>
            <p>{props.x}</p>
            <p>{props.y}</p>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
