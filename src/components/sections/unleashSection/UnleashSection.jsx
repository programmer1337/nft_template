import unleashSection from "./unleashSection.module.css";
import Point from "./point/Point";
import HeroButton from "../../UI/heroButton/HeroButton";
import InfoBlock from "./infoBlock/InfoBlock";
import SectionBlock from "../../blocks/sectionBlock/SectionBlock";
import {useMediaQuery} from "react-responsive";

const UnleashSection = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    return (
        <SectionBlock flexDirection={isDesktop ? "row" : "column"} justifyContent={"center"}
                      height={isDesktop ? "" : "800px"}>
            <div className={unleashSection.content}>
                <div className={unleashSection.contentTitle}>
                    <p style={{color: "#C5C5C5"}}>Just Unleash -</p>
                    <p>Your Inner Collector</p>
                </div>
                {
                    isDesktop ?
                        <div className={unleashSection.contentDescription}>
                            <Point pointDescription={"Best Seller All Around World"}/>
                            <Point pointDescription={"$2M+ Transactions Every Day"}/>
                            <Point pointDescription={"Secure Transactions"}/>
                            <Point pointDescription={"Exclusive Collections From Sellers"}/>
                            <Point pointDescription={"Easy Buying and Selling"}/>
                            <Point pointDescription={"Join Our Community"}/>
                        </div>
                        :
                        <div className={unleashSection.heroHeader}>
                            <InfoBlock/>
                        </div>
                }
                <div style={isDesktop ? {} : {display: "flex", justifyContent: "center"}}>
                    <HeroButton
                        buttonTitle={"Explore more"}
                        border={"none"}
                        backgroundColor={"#000"}
                        fontColor={"#FFF"}
                        padding={"18px 30px"}
                    />
                </div>
            </div>
            {
                isDesktop ?
                    <div className={unleashSection.heroHeader}>
                        <InfoBlock/>
                    </div> : ""
            }
        </SectionBlock>
    )
}

export default UnleashSection;