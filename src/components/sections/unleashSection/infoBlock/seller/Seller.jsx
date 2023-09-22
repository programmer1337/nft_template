import seller from "./seller.module.css";
import Avatar from "../../../../avatar/Avatar";
import FollowButton from "../../../../UI/followButton/FollowButton";

const Seller = ({sellerData}) => {
    return(
        <div className={seller.container}>
            <div className={seller.dataBlock}>
                <Avatar avatarSrc={sellerData.sellerAvatar} height={"55px"} width={"55px"}/>
                <div className={seller.description}>
                    <p className={seller.name}>{sellerData.sellerName}</p>
                    <p className={seller.tag}>{sellerData.sellerTag}</p>
                </div>
            </div>
            <FollowButton />
        </div>
    )
}

export default Seller;