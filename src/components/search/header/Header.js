import Title from './Title';
import SearchBar from './SearchBar';
import FoldButton from "./FoldButton";
import './Header.css';

const Header = () => {
  return (
    <div className='search-header'>
      <Title />
      <SearchBar setKeyword={props.setKeyword} />
      <FoldButton />
    </div>
  )
}

export default Header;
