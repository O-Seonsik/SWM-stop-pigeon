import "./SearchBar.css";

function search() {
  let input = document.getElementById('input-search');
  console.log(input.value);
}

function SearchBar() {
  return (
    <div className="search-bar-wrap">
      <div className="input-box">
        <input type="text" id="input-search" />
        <button className="search-icon" onClick={search}>검색</button>
      </div>
    </div>
  );
}

export default SearchBar;
