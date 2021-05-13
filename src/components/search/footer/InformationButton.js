import {useState} from 'react';
import "./InformationButton.css";

const InformationButton = () => {
  const [isInformationOn, setIsInformationOn] = useState(false);
  const information = "도움말이 들어갈 예정이에요!";

  const toggleInformation = () => {
    let informationBox = document.querySelector('#information-button-container .information-box');
    if (isInformationOn) {
      informationBox.classList.add("display-none");
    }
    else {
      informationBox.classList.remove("display-none");
    }
    setIsInformationOn(!isInformationOn);
  }
  
  return (
    <div id="information-button-container">
      <div className="information-box display-none">
        <div className="arrow-down"></div>
        {information}
      </div>
      <button className="information-button" onClick={ toggleInformation }>질문</button>
    </div>
  );
};

export default InformationButton;
