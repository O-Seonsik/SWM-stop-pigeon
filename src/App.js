import './App.css';
import Map from "./components/Map";
import FilterGroup from "./components/filter/FilterGroup"
import ActionGroup from "./components/action/ActionGroup"

function App() {
  return (
      <div className="main_wrapper">
        <Map/>
        <FilterGroup />
        <ActionGroup />
      </div>
  );
}

export default App;
