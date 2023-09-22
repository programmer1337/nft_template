import card from "./card.module.css";
import useTimeout from "../../../../hooks/useTimeout";
import formatTime from "../../../../utils/formatTime";
import CardAnimation from "../cardAnimation/CardAnimation";
import {useInView} from "framer-motion";
import {useRef} from "react";

const Card = ({cardData, isLeft}) => {
    const {diffH, diffM, diffS} = useTimeout(cardData.cardBidUntil.getTime())
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <CardAnimation isInView={isInView} isLeft={isLeft}>
            <div ref={ref} className={card.cardContainer}>
                <div style={{position: "relative"}}>
                    <div className={card.cardTimer}>{formatTime(diffH, diffM, diffS)}</div>
                    <img
                        src={cardData.cardImage}
                        className={card.cardImage}
                        alt={"BidCard"}
                    />
                </div>
                <div className={card.cardDescription}>
                    <div className={card.cardTitle}>
                        {cardData.cardTitle}
                    </div>
                    <div className={card.cardFooter}>
                        <div>
                            <div className={card.cardBid}>
                                Current bid
                            </div>
                            <div className={card.cardPrice}>
                                <img src={cardData.currencyImg} className={card.currencyImg} alt={"currency"}></img>
                                {cardData.currentBid}
                            </div>
                        </div>
                        <button className={card.placeButton}>PLACE BID</button>
                    </div>
                </div>
            </div>
        </CardAnimation>
    )
}

export default Card;