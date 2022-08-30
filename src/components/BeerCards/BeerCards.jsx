import "./BeerCards.scss";
import MoreInfo from "../MoreInfo/MorInfo";

const BeerCards = (props) => {

    const { beerData } = props

    const selections = beerData.map((beers) => {

        return (
            <div className="individualCard" key={beers.id}>
                <p className="headingText">{beers.name}</p>
                <img className="image" src={beers.image_url} alt="type of beer" />
                <MoreInfo className="info" title={beers.name} text={beers.description} />
            </div>
        )
    })
    return (
        <div>{selections}</div>
        
    )
}

export default BeerCards;