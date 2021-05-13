import './FilterGroup.css'
import FilterCheckbox from './FilterCheckbox.js'

function FilterGroup() {
  return (
    <div id="filter-group">
      <FilterCheckbox
        id="pigeon-marker-check"
        label="마커"
      />
      <FilterCheckbox
        id="grid-check"
        label="그리드"
      />
    </div>
  );
}

export default FilterGroup;