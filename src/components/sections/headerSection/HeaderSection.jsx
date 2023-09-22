import headerSection from "./headerSection.module.css";
import HeroButton from "../../UI/heroButton/HeroButton";
import SiteStatistic from "./siteStatistic/SiteStatistic";
import PictureWithShadow from "../../pictureWithShadow/PictureWithShadow";
import ContentBlock from "../../blocks/contentBlock/ContentBlock";
import SectionBlock from "../../blocks/sectionBlock/SectionBlock";
import {useMediaQuery} from "react-responsive";

const HeaderSection = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    return (
        <SectionBlock justifyContent={isDesktop ? "center" : "flex-start"} flexDirection={isDesktop ? "row" : "column"}>
            <div className={headerSection.heroText}>
                <ContentBlock
                    contentTitle={"Discover And Create NFTs"}
                    contentDescription={`Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a $20 bonus.`}
                    boldWords={["a", "$20", "bonus."]}
                    titleFontSize={isDesktop ? "75px" : "58px"}
                    descriptionFontSize={isDesktop ? "18px" : "14px"}
                >
                    <div style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        margin: isDesktop ? "45px 0" : "20px 0",
                    }}>
                        <HeroButton
                            buttonTitle={"Explore more"}
                            border={"none"}
                            backgroundColor={"#000"}
                            fontColor={"#FFF"}
                            padding={"16px 30px"}
                        />
                        <HeroButton
                            buttonTitle={"Create NFT"}
                            border={"2px solid #000"}
                            backgroundColor={"#f7f7f7"}
                            fontColor={"#000"}
                            padding={"16px 30px"}
                        />
                    </div>
                    <div className={headerSection.features}>
                        <SiteStatistic count={"430K+"} statisticTitle={"Art Works"}/>
                        <SiteStatistic count={"159K+"} statisticTitle={"Creators"}/>
                        <SiteStatistic count={"87K+"} statisticTitle={"Collections"}/>
                    </div>
                </ContentBlock>
            </div>
            <div className={headerSection.heroHeader}>
                <div className={headerSection.firstImage}>
                    <PictureWithShadow
                        height={isDesktop ? "70%" : "65%"}
                        width={isDesktop ? "85%" : "85%"}
                        imgUrl={"https://s3-alpha-sig.figma.com/img/b82f/55d0/61c522d86567e3c5ea1f39ddf68ae4bc?Expires=1696204800&Signature=F12oKU4PMiJgSuDVRZXi7bkzrHbvlw5Sv7XLqbEZXIwrwUjJJbZhqenxuo1XLEkove971WPSRhD1PeXg7P49Gncr~0qTdsGCmY7bS5ec1HKAsDEyZb4cvx1lYcS22YCQfSnfFPhR-uEaXZalfMGFG88BP~JKTMF6u51X2pLHqEu30Bx~8plcxL4uebYj7GAaO2Szy5kf0OyP1tAs8jmLfzCC63jUUMbFbWsfss~JJEughMzLrUELVPq69xI1EPupXCTSGphCCYWQFLlhnZSphwsSqC1K3iPg4UttypvKcg-EsPuSswSQfxMYpg4iFCK2eYiucWjLOgomo-0p-BdCgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                        />
                </div>
                <div className={headerSection.secondImage}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width={isDesktop ? "45%" : "55%"}
                         height={isDesktop ? "25%" : "55%"} viewBox="0 0 131 136"
                         fill="none">
                        <path
                            d="M15.6507 43.2949C32.4339 30.7255 51.9743 23.0115 72.683 28.6293C91.3749 33.7001 103.143 49.6308 90.5396 69.3323C84.5735 78.6586 71.8706 85.1866 61.8852 79.874C50.7606 73.9554 59.5288 59.017 66.6505 54.7089C83.2839 44.6468 106.696 49.3237 118.212 68.8676C131.849 92.0121 108.785 103.532 108.769 103.344"
                            stroke="black" strokeWidth="3.37884" strokeMiterlimit="1.5" strokeLinecap="round"
                            strokeLinejoin="round"/>
                        <path
                            d="M19.2682 18.3822C19.8774 20.8066 19.5256 23.2337 19.2862 25.6772C18.5006 33.7008 15.3552 42.0309 9.71151 47.2933C17.1379 44.0371 27.7921 42.619 34.5374 48.3347"
                            stroke="black" strokeWidth="3.37884" strokeMiterlimit="1.5" strokeLinecap="round"
                            strokeLinejoin="round"/>
                    </svg>
                    <PictureWithShadow
                        height={isDesktop ? "70%" : "75%"}
                        width={isDesktop ? "95%" : "95%"}
                        imgUrl={"https://s3-alpha-sig.figma.com/img/9d7a/06f8/6030c6cb0e25f5fc7861fb298e0fd44a?Expires=1696204800&Signature=aRug8k0uenHnhlv1P2YrFKQSEdgXMwfWoMfsg8gC1SuupRdgnvdkeu9vL87Pz9~0PRSd9DUzXEZVN4qVoa97xxNx7bfHMbLnqjDTPIcpRJTVAal5BIiJCKiGFFMetxYaSK~0EPu9BjpyEffqsp42pfH3-yTJWQkdLOSkGAMD4pSo72op8jM1xeBEMxyOLUZkp0W4V0rtsr4gSlld2sAeb9OwLTa8QrTHeyrKeWSsNSH~w5O3uwj-0fkHSGPpPOH84h9pil-R3pZSEH8knBFnIbiyj3uychJxrh8~XMv2YcO7Ja5wB37DcUp3PykhAgnZq9tEpMc1KmYYWFpFIePxiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                        /*imgUrl={"https://virtus-img.cdnvideo.ru/images/details-photo/plain/20/203189079679626a9f5acaeb399d8a61.png@jpg"}*/
                        />
                </div>
            </div>
        </SectionBlock>
    )
}

export default HeaderSection;