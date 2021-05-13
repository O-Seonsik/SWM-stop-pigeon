import LogoWord from 'data/images/search/logo_word.png'
import './Title.css'

const Title = () => {
  return (
    <div className="search-title">
      <a className="logo" href=".">
        <img src={LogoWord} alt="logo-word" />
      </a>
    </div>
  );
}

export default Title;