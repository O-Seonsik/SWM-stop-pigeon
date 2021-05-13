import ListItem from "./ListItem";
import "./SearchList.css";

function SearchList(props) {
  return (
    <div className="search-list">
      {props.placeList.map((place, index) => {
        return (
          <ListItem
            key={index}
            index={index}
            name={place.name}
            address={place.address}
            phone={place.phone}
            x={place.x}
            y={place.y}
          />
        );
      })}
    </div>
  );
}

export default SearchList;
