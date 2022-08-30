import './App.scss';
import ExploreBeers from "./containers/ExploreBeers/ExploreBeers";
import { useState, useEffect } from "react";

const App = () => {

  const [beers, setBeers] = useState("");

  const getBeers = () => {

    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setBeers(data);
      })
  }

  useEffect(getBeers, []);


  return (
    <div>
      <header>
        <h1>Online Brewery</h1>
      </header>
      <div>
        {beers && <ExploreBeers beerData={beers} />}
      </div>
    </div>
  );
}


export default App;
