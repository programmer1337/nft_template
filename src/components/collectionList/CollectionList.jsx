import Collection from "../collection/Collection";
import collectionList from "./collectionList.module.css";
import {useMediaQuery} from "react-responsive";

const CollectionList = ({collection}) => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    return (
        <div className={collectionList.list}>
            {
                isDesktop ?
                    <div className={collectionList.collectionContainer}>
                        <div className={collectionList.statTitle} style={{justifyContent: "flex-start"}}>Collection
                        </div>
                        <div className={collectionList.statContainer}>
                            <div className={collectionList.statTitle}>Volume</div>
                            <div className={collectionList.statTitle}>24h %</div>
                            <div className={collectionList.statTitle}>Floor Price</div>
                            <div className={collectionList.statTitle}>Owners</div>
                            <div className={collectionList.statTitle}>Items</div>
                        </div>
                    </div>
                    :
                    <div className={collectionList.collectionContainer}>
                        <div className={collectionList.statTitle} style={{justifyContent: "flex-start"}}>Collection
                        </div>
                        <div className={collectionList.statContainer}>
                            <div className={collectionList.statTitle}>Volume</div>
                        </div>
                    </div>
            }
            {
                collection.map(collectionItem =>
                    <Collection collectionData={collectionItem} key={collectionItem.collectionId}/>
                )
            }
        </div>
    )
}

export default CollectionList;