import siteStatistic from "./siteStatistic.module.css";
const SiteStatistic = ({count, statisticTitle}) => {
    return (
        <div className={siteStatistic.container}>
            <div className={siteStatistic.count}>
                {count}
            </div>
            <div className={siteStatistic.title}>
                {statisticTitle}
            </div>
        </div>
    )
}

export default SiteStatistic;