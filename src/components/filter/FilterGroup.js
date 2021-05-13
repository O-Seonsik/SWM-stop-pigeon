import './FilterGroup.css'
import FilterItem from './FilterItem.js'

function toggleMarker(isOn) {
  console.log(`toggle marker: ${isOn}`);
}

function toggleGrid(isOn) {
  console.log(`toggle grid: ${isOn}`);
}

function FilterGroup() {
  return (
    <div id="filter-group">
      <FilterItem
        id="pigeon-marker-check"
        label="마커"
        defaultChecked={true}
        onChangeEvent={toggleMarker}
      />
      <FilterItem
        id="grid-check"
        label="그리드"
        defaultChecked={false}
        onChangeEvent={toggleGrid}
      />
    </div>
  );
}

export default FilterGroup;