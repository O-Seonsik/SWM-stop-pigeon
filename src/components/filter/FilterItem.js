import "./FilterItem.css"
import { useState } from 'react';

function FilterItem(props) {
  const [toggle, setToggle] = useState(props.defaultChecked);

  function onChangeEvent() {
    props.onChangeEvent(!toggle);
    setToggle(!toggle);
  }

  return (
    <div className="filter-item">
      <div>
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.defaultChecked}
          onChange={onChangeEvent}
        />
        <label
          htmlFor={props.id}>
          {props.label}
        </label>
      </div>
    </div>
  );
}

export default FilterItem;