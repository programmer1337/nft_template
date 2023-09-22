import banner from "./banner.module.css";
import HeroButton from "../UI/heroButton/HeroButton";
import PictureWithShadow from "../pictureWithShadow/PictureWithShadow";
import {useMediaQuery} from "react-responsive";

const Banner = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    return (
        <div className={banner.container}>
            <div className={banner.leftBlock}>
                <div className={banner.text}>
                    <div className={banner.title}>Create and Sell NFTs</div>
                    <div className={banner.description}>World’s Largest NFT Place</div>
                </div>
                <div className={banner.buttons}>
                    <HeroButton
                        buttonTitle={"Explore more"}
                        border={"2px solid #FFF"}
                        backgroundColor={"#FFF"}
                        fontColor={"#141416"}
                        padding={isDesktop ? "18px 30px" : "14px 8px"}
                    />
                    <HeroButton
                        buttonTitle={"Sell Artwork"}
                        border={"2px solid #FFF"}
                        backgroundColor={"none"}
                        fontColor={"#FFF"}
                        padding={isDesktop ? "18px 30px" : "14px 8px"}
                    />
                </div>
            </div>
            <div className={banner.rightBlock}>
                <PictureWithShadow
                    height={isDesktop ? "" : "30%"}
                    width={isDesktop ? "70%" : "60%"}
                    imgUrl={"https://s3-alpha-sig.figma.com/img/b82f/55d0/61c522d86567e3c5ea1f39ddf68ae4bc?Expires=1696204800&Signature=F12oKU4PMiJgSuDVRZXi7bkzrHbvlw5Sv7XLqbEZXIwrwUjJJbZhqenxuo1XLEkove971WPSRhD1PeXg7P49Gncr~0qTdsGCmY7bS5ec1HKAsDEyZb4cvx1lYcS22YCQfSnfFPhR-uEaXZalfMGFG88BP~JKTMF6u51X2pLHqEu30Bx~8plcxL4uebYj7GAaO2Szy5kf0OyP1tAs8jmLfzCC63jUUMbFbWsfss~JJEughMzLrUELVPq69xI1EPupXCTSGphCCYWQFLlhnZSphwsSqC1K3iPg4UttypvKcg-EsPuSswSQfxMYpg4iFCK2eYiucWjLOgomo-0p-BdCgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                    /*imgUrl={"https://virtus-img.cdnvideo.ru/images/details-photo/plain/20/203189079679626a9f5acaeb399d8a61.png@jpg"}*/
                />
            </div>
        </div>
    )
}

export default Banner;