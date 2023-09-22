import collection from "./collection.module.css";
import CollectionStatistic from "./collectionStatistic/CollectionStatistic";
import Avatar from "../avatar/Avatar";
import {useMediaQuery} from "react-responsive";

const Collection = ({collectionData}) => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });
    return (
        <div className={collection.collectionContainer}>
            <div className={collection.collectionInfo}>
                <Avatar avatarSrc={collectionData.userAvatar}
                        height={isDesktop ? "80px" : "50px"}
                        width={isDesktop ? "80px" : "50px"}
                />
                <div className={collection.collectionText}>
                    <div className={collection.collectionName}>{collectionData.collectionName}</div>
                    <div
                        className={collection.collectionCreator}>By {collectionData.collectionCreator}</div>
                </div>
            </div>
            <div className={collection.collectionStatistic}>
                {
                    isDesktop ?
                        <>
                            <CollectionStatistic statistic={collectionData.collectionVolume}>
                                <img src={collectionData.collectionCurrencyImg}
                                     className={collection.currencyImg}
                                     alt={"currencyImg"}/>
                            </CollectionStatistic>
                            <CollectionStatistic statistic={"+" + collectionData.collectionPriceUp + "%"}
                                                 fontColor={"#10C352"}/>
                            <CollectionStatistic statistic={collectionData.collectionFloorPrice}>
                                <img src={collectionData.collectionCurrencyImg}
                                     className={collection.currencyImg}
                                     alt={"currencyImg"}/>
                            </CollectionStatistic>
                            <CollectionStatistic statistic={collectionData.collectionOwnersCount}/>
                            <CollectionStatistic statistic={collectionData.collectionItemsCount}/>
                        </>
                        :
                        <>
                            <CollectionStatistic statistic={collectionData.collectionVolume}>
                                <img src={collectionData.collectionCurrencyImg}
                                     className={collection.currencyImg}
                                     alt={"currencyImg"}/>
                            </CollectionStatistic>
                            <CollectionStatistic statistic={"+" + collectionData.collectionPriceUp + "%"}
                                                 fontColor={"#10C352"}/>
                        </>
                }
            </div>
        </div>
    )
}

export default Collection;