import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Country from "./Country";
import CountriesData from "./data";

function App() {
  const [keyword, setKeyword] = useState(null);
  const [countries, setCountries] = useState(CountriesData);

  function handleSumbit(event) {
    event.preventDefault();
    setCountries(countries.filter(country =>
      country.name.toLowerCase().startsWith(keyword.trim().toLowerCase())
    ));
  }

  function updateWord(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header bg-white h-14 shadow-sm">
        <h1 className="font-extrabold text-xl mx-11 absolute mt-2.5">
          Where in the world ?
        </h1>
      </header>
      <main className="mx-12 my-6">
        <div className="app-input flex flex-row justify-between">
          <form onSubmit={handleSumbit}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="search-icon text-gray-500 absolute left-16 top-32"
            />
            <input
              type="text"
              placeholder=" Search for a country..."
              name="search"
              className="h-11 mt-10 shadow-sm basis-1/2 w-96 rounded placeholder:text-sm placeholder:absolute placeholder:left-12 placeholder:bottom-3"
              onChange={updateWord}
            />
          </form>
          <form>
            <input
              type="text"
              placeholder="Filter by Region"
              className="w-full h-11 mt-10 shadow-sm basis-1/4 rounded placeholder:text-sm placeholder:absolute placeholder:left-4 placeholder:bottom-3 placeholder:text-gray-700"
            />
          </form>
        </div>
        <div className="app-results">
          <Country countries={countries} />
        </div>
      </main>
    </div>
  );
}

export default App;
