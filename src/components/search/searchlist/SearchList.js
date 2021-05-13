import ListItem from "./ListItem";
import "./SearchList.css";
import SearchListEmptyImage from "data/images/search/illustrator_with_text.png";

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
  const showList = () => {
    if (props.placeList !== undefined) {
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
    } else {
      return (
        <div className="search-list-empty">
          <img src={SearchListEmptyImage} alt="" />
        </div>
      );
    }
  }

  return <div className="search-list-container">{showList()}</div>;
}

export default SearchList;
