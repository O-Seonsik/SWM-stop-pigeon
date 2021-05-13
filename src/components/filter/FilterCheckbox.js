import "./FilterCheckbox.css"

function FilterCheckbox(props) {
  return (
    <div className="filter-checkbox">
      <input
        id={props.id}
        type="checkbox"
      />
      <label
        for={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export default FilterCheckbox;