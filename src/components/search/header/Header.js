import Title from './Title';
import SearchBar from './SearchBar';
import './Header.css';

function Header() {
  return (
    <div className='search-header'>
      <Title />
      <SearchBar />
    </div>
  )
}

export default Header;
