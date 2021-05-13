import Title from './Title';
import SearchBar from './SearchBar';
import FoldButton from "./FoldButton";
import './Header.css';

const Header = (props) => {
    return (
        <div className='search-header'>
            <Title/>
            <SearchBar setKeyword={props.setKeyword} isSearch={props.isSearch} setIsSearch={props.setIsSearch} />
            <FoldButton/>
        </div>
    )
}

export default Header;
