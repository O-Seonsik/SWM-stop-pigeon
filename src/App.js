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
        <script src='./global.js'></script>
      </div>
  );
}

export default App;
