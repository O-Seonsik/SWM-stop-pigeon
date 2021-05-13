import React, { useRef, useState} from 'react';
import Map from 'components/Map';
import SearchPanel from 'components/search/SearchPanel';
import FilterGroup from "../components/filter/FilterGroup";
import ActionGroup from "../components/action/ActionGroup";

class Main extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            searchResult: [],
            is_searching: false,
        }
    }

    setKeyword = (new_keyword) => {
        if (this.state.is_searching) {
            // do nothing
        } else {
            this.setState({keyword: new_keyword, is_searching: true})
        }
    }

    setSearchResult = (new_result) => {
        if (this.state.is_searching) {
            this.setState({searchResult: new_result, is_searching: false})
        } else {
            // do nothing
        }
    }


    render() {
        return (
            <div id="main">
                <button>메인의 자식을 불러오자</button>
                <SearchPanel setKeyword={this.setKeyword} searchResult={this.state.searchResult} />
                <Map keyword={this.state.keyword} setSearchResult={this.setSearchResult}/>
                <FilterGroup />
                <ActionGroup />
            </div>
        );
    }
}

export default Main;
