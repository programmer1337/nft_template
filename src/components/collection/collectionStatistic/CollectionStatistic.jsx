import collectionStatistic from "./collectionStatistic.module.css";

const CollectionStatistic = ({children, statistic, fontColor})=> {
    return(
        <div className={collectionStatistic.collectionStat} style={{color: fontColor}}>
            {children}
            {statistic}
        </div>
    )
}

export default CollectionStatistic;