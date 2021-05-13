import React, { useState} from 'react';
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
            moveCenter: false,
            x: 37.503825,
            y: 127.044652,
        }
    }

    setXY = (newX, newY) => {
        this.setState({x: newX, y: newY});
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
        console.log(this.state);
        return (
            <div id="main">
                <SearchPanel setXY={this.setXY} setKeyword={this.setKeyword} searchResult={this.state.searchResult} />
                <Map x={this.state.x} y={this.state.y} keyword={this.state.keyword} setSearchResult={this.setSearchResult}/>
                <FilterGroup />
                <ActionGroup />
            </div>
        );
    }
}

export default Main;
