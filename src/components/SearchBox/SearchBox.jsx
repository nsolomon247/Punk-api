import "./SearchBox.scss";

const SearchBox = (props) => {

const { searchTerm, handleInput } = props;

    return(
        <div className="side-selections">
            <form className="search-box">
                <input type="text" placeholder="Search here" value={searchTerm} onInput={handleInput} className="search-box__input" />
            </form>
        </div>    
    )
}

export default SearchBox;