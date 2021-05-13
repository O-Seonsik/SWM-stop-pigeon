import React, { useState } from 'react';
import "./SearchBar.css";

const SearchBar = (props) => {
  const search = () => {
      let input = document.getElementById('input-search');
      props.setKeyword(input.value)
  }
  
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      search();
    }
  }

  return (
    <div className="search-bar-wrap">
      <div className="input-box">
        <input
          type="text"
          id="input-search"
          placeholder="장소, 주소 검색"
          onKeyPress={onKeyPress}
        />
        <button className="search-icon" onClick={search}>
          검색
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
