import ListItem from "./ListItem";
import "./SearchList.css";

/*
props = {
  placeList = [
    {
      name: string;
      address: string;
      phone: string;
    }, ...
  ]
}
 */

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
          />
        );
      })}
    </div>
  );
}

export default SearchList;
