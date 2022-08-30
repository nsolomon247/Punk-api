import "./MoreInfo.scss"
import whiteCross from "../../assets/images/white-cross.png";
import { useState } from "react";

const MoreInfo = (props) => {

const { title, text } = props;

const [showText, setShowText] = useState(false);

const handleClick = () => {
    setShowText(!showText);
}

const buttonJSX = (
    <div className="buttonPosition" onClick={handleClick}>
        <button className="button">Find out more</button>
    </div>
)

const textJSX = (
    <div className="random">
        <img src={whiteCross} className="cross" onClick={handleClick} alt="Close text"/>
        <h3 className="heading">{title}</h3>
        {text.split(".").map((sentence, index) => (
            <p className="sentences" key={title + index}>{sentence + "."}</p>
        ))}
    </div>
)


    return <>{showText ? textJSX : buttonJSX}</>

}

export default MoreInfo;