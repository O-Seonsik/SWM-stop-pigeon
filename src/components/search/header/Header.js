import Title from './Title';
import SearchBar from './SearchBar';
import FoldButton from "./FoldButton";
import './Header.css';

function Header(props) {
  return (
    <div className='search-header'>
      <Title />
      <SearchBar setKeyword={props.setKeyword} />
      <FoldButton />
    </div>
  )
}

export default Header;
