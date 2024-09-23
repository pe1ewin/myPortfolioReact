import { useState } from "react"
import './ImageSlider.css'
import { Image } from "@chakra-ui/react"
import LeftArrow from "../images/left-arrow.png"
import RightArrow from "../images/right-arrow.png"
const ImageSlider = ({ ImageUrls }) => {
    function prevImage() {
        SetIndex(Index => {
            if (Index === 0) return ImageUrls.length - 1
            return Index - 1
        })
    }
    function nextImage() {
        SetIndex(Index => {
            if (Index === ImageUrls.length - 1) return 0
            return Index + 1
        })
    }
    const [Index, SetIndex] = useState(0)
    return (
    <div className="SliderBlock">
        <img className="imageSlider" src={ImageUrls[Index]} />
        <button onClick={prevImage} style={{left: "0"}} className="imageSliderButton"><Image alt="left arrow" src={LeftArrow}/></button>
        <button onClick={nextImage} style={{right: "0"}} className="imageSliderButton"><Image alt="right arrow" src={RightArrow}/></button>
    </div>
    );
}

export default ImageSlider;