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
        label="비둘기 분포 마커 표시"
        defaultChecked={true}
        onChangeEvent={toggleMarker}
      />
      <FilterItem
        id="grid-check"
        label="비둘기 분포 그리드 표시"
        defaultChecked={false}
        onChangeEvent={toggleGrid}
      />
    </div>
  );
}

export default FilterGroup;