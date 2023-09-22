import {useEffect, useState} from "react";

import Card from "./card/Card";

import slider from "./slider.module.css";

const Slider = ({cardsData, slidesCount}) => {
    const [slides, setSlides] = useState([]);
    const [slide, setSlide] = useState([0, slidesCount - 1]);
    const [currentSlides, setCurrentSlides] = useState([]);

    useEffect(() => {
        setSlides(cardsData.map(card =>
            <Card cardData={card} isLeft={false} key={card.cardId}/>
        ));
    }, [cardsData]);

    useEffect(() => {
        if (slide[0] > slide[1]) {
            let newSlidesFirstPart = slides.slice(slide[0], slides.length);
            let newSlidesSecondPart = slides.slice(0, slide[1] + 1);

            setCurrentSlides([...newSlidesFirstPart, ...newSlidesSecondPart])
        } else {
            setCurrentSlides(slides.slice(slide[0], slide[1] + 1))
        }
    }, [slides, slide]);

    const handleLeftClick = () => {
        const newSlides = currentSlides;

        let newLeftBorder = slide[0] - 1;
        let newRightBorder = slide[1] - 1;

        if (newLeftBorder < 0) {
            newLeftBorder = slides.length - 1;
        }

        if (newRightBorder < 0) {
            newRightBorder = slides.length - 1;
        }

        newSlides.pop();
        newSlides.unshift(slides[newLeftBorder]);

        setSlide([newLeftBorder, newRightBorder]);
        /*setCurrentSlides(newSlides);*/
    }
    const handleRightClick = () => {
        const newSlides = currentSlides;

        let newLeftBorder = slide[0] + 1;
        let newRightBorder = slide[1] + 1;

        if (newRightBorder > slides.length - 1) {
            newRightBorder = 0;
        }

        if (newLeftBorder > slides.length - 1) {
            newLeftBorder = 0;
        }

        newSlides.shift();
        newSlides.push(slides[newRightBorder]);

        setSlide([newLeftBorder, newRightBorder]);
        /*setCurrentSlides(newSlides);*/
    }

    return (
        <div className={slider.container}>
            <div className={slider.slideContainer}>
                {currentSlides}
            </div>
            <div className={slider.navigator}>
                <button
                    className={slider.navigatorButton}
                    onClick={() => handleLeftClick()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M11.2397 8.38975C10.8023 7.98596 10.1203 8.01323 9.71654 8.45067L6.23402 12.2234C5.85287 12.6363 5.85287 13.2727 6.23401 13.6856L9.71653 17.4584C10.1203 17.8958 10.8023 17.9231 11.2397 17.5193C11.6772 17.1155 11.7045 16.4336 11.3007 15.9961L9.48802 14.0324L19.9611 14.0324C20.5565 14.0324 21.0391 13.5498 21.0391 12.9545C21.0391 12.3592 20.5565 11.8766 19.9611 11.8766L9.48805 11.8766L11.3007 9.91295C11.7044 9.47551 11.6772 8.79355 11.2397 8.38975Z"
                              fill="#23262F"/>
                    </svg>
                </button>
                <div style={{
                    borderRadius: "2px",
                    background: "#E6E8EC",
                    width: "2px",
                    height: "26px",
                }}></div>
                <button
                    className={slider.navigatorButton}
                    onClick={() => handleRightClick()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7603 8.38975C16.1977 7.98596 16.8797 8.01323 17.2835 8.45067L20.766 12.2234C21.1471 12.6363 21.1471 13.2727 20.766 13.6856L17.2835 17.4584C16.8797 17.8958 16.1977 17.9231 15.7603 17.5193C15.3228 17.1155 15.2955 16.4336 15.6993 15.9961L17.512 14.0324L7.03886 14.0324C6.44354 14.0324 5.96094 13.5498 5.96094 12.9545C5.96094 12.3592 6.44354 11.8766 7.03886 11.8766L17.5119 11.8766L15.6993 9.91295C15.2956 9.47551 15.3228 8.79355 15.7603 8.38975Z"
                              fill="#23262F"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Slider;