import React from 'react';
import cancel from 'data/images/search/cancel.png';
import "./SearchBar.css";

const SearchBar = (props) => {
  const search = () => {
    if(props.isSearch){
        // do nothing
    }else{
        let input = document.getElementById('input-search');
        props.setKeyword(input.value)
        props.setIsSearch(true);
    }
  }

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      search();
    }
  }

  function cancelClick() {
    var input = document.getElementById('input-search');
    input.value = '';
  }

  return (
    <div className="search-bar-wrap">
      <div className="input-box">
        <button className="search-icon" onClick={search} />
        <input
          type="text"
          id="input-search"
          placeholder="장소, 주소 검색"
          onKeyPress={onKeyPress}
        />
        <button className="search-cancel">
          <img src={cancel} onClick={cancelClick} alt=""/>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
