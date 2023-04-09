import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";

const App = () => {
  const [searchItem, setSearchItem] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      return setItems(response.data);
    };
    getData();
  }, []);

  const onInputChange = (event) => {
    const searchItemString = event.target.value.toLowerCase();
    setSearchItem(searchItemString);
  };

  const filteredItem = items.filter((item) => {
    return item.name.toLowerCase().includes(searchItem);
  });

  return (
    <div className="App">
      <SearchBar onInputChange={onInputChange} text={searchItem} />
      <CardList filteredItem={filteredItem} />
    </div>
  );
};

export default App;
