import ListItem from "./ListItem";
import "./SearchList.css";
import SearchListEmptyImage from "data/images/search/illustrator_with_text.png";

const SearchList = (props) => {
  const showList = () => {
    if (props.placeList !== undefined && props.placeList.length !== 0) {
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
                setXY={props.setXY}
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
