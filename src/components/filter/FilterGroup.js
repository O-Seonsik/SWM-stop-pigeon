import './FilterGroup.css'
import FilterItem from './FilterItem.js'


const FilterGroup = (props) => {
    const toggleMarker = (isOn) => {
      if(isOn){
          props.showMarkers();
      }else{
          props.hideMarkers();
      }
    }

    const toggleGrid = (isOn) => {
        if(isOn){
            props.showGrids();
        }else{
            props.hideGrids();
        }
    }
  return (
    <div id="filter-group">
      <FilterItem
        id="pigeon-marker-check"
        label="비둘기 분포 마커 표시"
        defaultChecked={true}
        onChangeEvent={toggleMarker}
        setIsMarker={props.setIsMarker}
      />
      <FilterItem
        id="grid-check"
        label="비둘기 분포 그리드 표시"
        defaultChecked={false}
        onChangeEvent={toggleGrid}
        setIsGrid={props.setIsGrid}
      />
    </div>
  );
}

export default FilterGroup;
