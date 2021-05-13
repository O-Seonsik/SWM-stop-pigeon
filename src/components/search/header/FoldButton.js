import { useState } from "react";
import "./FoldButton.css";

function FoldButton(props) {
  const [isExpanded, setIsExpanded] = useState(true);

  function expand() {
    const panel = document.getElementById('search-panel');
    panel.style.transform = `translateX(${isExpanded ? -400 : 0}px)`
    setIsExpanded(!isExpanded);
  }

  return (
    <button className="fold-button" onClick={expand}>
      {isExpanded ? "<" : ">"}
    </button>
  );
}

export default FoldButton;
