import react, { useState } from 'react';
import Map from 'components/Map';
import SearchPanel from 'components/search/SearchPanel';
import FilterGroup from "../components/filter/FilterGroup";
import ActionGroup from "../components/action/ActionGroup";

const Main = () => {
    const [keyword, setKeyword] = useState();
    const [searchResult, setSearchResult] = useState();
    console.log(keyword);
    return (
        <div id="main">
            <SearchPanel setKeyword={setKeyword} searchResult={searchResult} />
            <Map keyword={keyword} setSearchResult={setSearchResult}/>
            <FilterGroup />
            <ActionGroup />
        </div>
    );
}

export default Main;
