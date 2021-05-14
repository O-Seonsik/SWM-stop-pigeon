import Header from "./header/Header";
import SearchList from "./searchlist/SearchList";
import Footer from "./footer/Footer";
import "./SearchPanel.css";

const SearchPanel = (props) => {
  return (
    <div id="search-panel">
      <Header setKeyword={props.setKeyword} isSearch={props.isSearch} setIsSearch={props.setIsSearch}/>
      <SearchList setCenter={props.setCenter} placeList={props.searchResult} />
      <Footer />
    </div>
  );
}

export default SearchPanel;
