import SectionBlock from "../../blocks/sectionBlock/SectionBlock";
import Slider from "../../UI/slider/Slider";
import {useMediaQuery} from "react-responsive";

const SliderSection = ({cardsData}) => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const isMedium = useMediaQuery({
        query: "(min-width: 1100px)"
    });

    return(
        <SectionBlock
            sectionTitle={"Weekly - Top NFT"}
            titleColor={"#C5C5C5"}
            flexDirection={"column"}
            backgroundColor={"#F1F1F1"}
            padding={"0 0"}
        >
            <Slider cardsData={cardsData} slidesCount={isDesktop ? 5  : isMedium ? 3 : 1}/>
        </SectionBlock>
    )
}

export default SliderSection;