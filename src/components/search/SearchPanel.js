import Header from "./header/Header";
import SearchList from "./searchlist/SearchList";
import Footer from "./footer/Footer";
import "./SearchPanel.css";

const placeList = [
  {
    name: "비둘기공원",
    address: "구구구 비둘기로 99길",
    phone: "02-1234-5678",
  },
  {
    name: "비둘기공원",
    address: "구구구 비둘기로 99길",
    phone: "02-1234-5678",
  },
  {
    name: "비둘기공원",
    address: "구구구 비둘기로 99길",
    phone: "02-1234-5678",
  },
  {
    name: "비둘기공원",
    address: "구구구 비둘기로 99길",
    phone: "02-1234-5678",
  },
  {
    name: "비둘기공원",
    address: "구구구 비둘기로 99길",
    phone: "02-1234-5678",
  },
  {
    name: "비둘기공원",
    address: "구구구 비둘기로 99길",
    phone: "02-1234-5678",
  },
  {
    name: "비둘기공원",
    address: "구구구 비둘기로 99길",
    phone: "02-1234-5678",
  },
  {
    name: "비둘기공원",
    address: "구구구 비둘기로 99길",
    phone: "02-1234-5678",
  },
];

function SearchPanel() {
  return (
    <div className="search-panel">
      <Header />
      <SearchList placeList={placeList} />
      <Footer />
    </div>
  );
}

export default SearchPanel;
