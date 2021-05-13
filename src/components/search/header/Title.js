import LogoWord from 'data/images/search/logo_word.svg'
import './Title.css'

function Title() {
  return (
    <div className="search-title">
      <div className="logo">
        <img src={LogoWord} alt="logo-word" />
      </div>
    </div>
  );
}

export default Title;