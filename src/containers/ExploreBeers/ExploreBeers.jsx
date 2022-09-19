import "./ExploreBeers.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import BeerCards from "../../components/BeerCards/BeerCards";
import { useState } from "react";

const ExploreBeers = (props) => {

    const { beerData } = props;
    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (event) => {
        const cleanInput = event.target.value;
        setSearchTerm(cleanInput);
    }
    

    const [isChecked, setIsChecked] = useState(false);

    const handleOnClickOne = () => {
        setIsChecked(!isChecked);
    }

    const [isCheckedTwo, setIsCheckedTwo] = useState(false);
    const handleOnClickTwo = () => {
        setIsCheckedTwo(!isCheckedTwo);
    }

    const [isCheckedThree, setIsCheckedThree] = useState(false);
    const handleOnClickThree = () => {
        setIsCheckedThree(!isCheckedThree);
    }

    const filteredBeers = beerData.filter((beer) => {
        const beerNameLower = beer.name.toLowerCase();
        const search = searchTerm.toLowerCase();
        return beerNameLower.includes(search) && beer.image_url;
    })

    const highAlcohol = beerData.filter((beer) => {
        const beerNameLower = beer.name.toLowerCase();
        const search = searchTerm.toLowerCase();
        return beerNameLower.includes(search) && beer.abv > 6 && beer.image_url;
    })

    const classicAlcohol = beerData.filter((beer) => {
        const beerNameLower = beer.name.toLowerCase();
        const search = searchTerm.toLowerCase();
        const classic = Number(beer.first_brewed.slice(3, 7))
        return beerNameLower.includes(search) && classic < 2010 && beer.image_url;
    })

    const alcoholPH = beerData.filter((beer) => {
        const beerNameLower = beer.name.toLowerCase();
        const search = searchTerm.toLowerCase();
        const acidity = beer.ph < 4;
        return beerNameLower.includes(search) && acidity && beer.image_url;
    })

    // const highAndClassic = beerData.filter((beer) => {
    //     const beerNameLower = beer.name.toLowerCase();
    //     const search = searchTerm.toLowerCase();
    //     const highABV = beer.abv;
    //     const classic = Number(beer.first_brewed.slice(3, 7));
    //     return beerNameLower.includes(search) && classic < 2010 && highABV > 6 && beer.image_url;
    //     })

    // const classicAndPH = beerData.filter((beer) => {
    //     const beerNameLower = beer.name.toLowerCase();
    //     const search = searchTerm.toLowerCase();
    //     const classic = Number(beer.first_brewed.slice(3, 7));
    //     const acidity = beer.ph < 4;
    //     return beerNameLower.includes(search) && classic < 2010 && acidity && beer.image_url;
    //     })

    // const highAndPH = beerData.filter((beer) => {
    //     const beerNameLower = beer.name.toLowerCase();
    //     const search = searchTerm.toLowerCase();
    //     const highABV = beer.abv;
    //     const acidity = beer.ph < 4;
    //     return beerNameLower.includes(search) && acidity && highABV > 6 && beer.image_url;
    //     })


    return (
        <section className="main">
            <div className="side-nav">
                <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
                <div className="checkbox-text">
                    High ABV (&gt;6%)  <input type="checkbox" className="checkbox" onClick={handleOnClickOne} />
                </div>
                <div className="checkbox-text">
                    Classic Range  <input type="checkbox" className="checkbox" onClick={handleOnClickTwo}></input>
                </div>
                <div className="checkbox-text">
                    High Acidity (pH less than 4)  <input type="checkbox" className="checkbox" onClick={handleOnClickThree}></input>
                </div>
            </div>
            <div className="cards">
                {isChecked ? <BeerCards beerData={highAlcohol} /> : isCheckedTwo ? <BeerCards beerData={classicAlcohol} /> : isCheckedThree ? <BeerCards beerData={alcoholPH} /> : <BeerCards beerData={filteredBeers} />}
            </div>
        </section>
    )
}

export default ExploreBeers;