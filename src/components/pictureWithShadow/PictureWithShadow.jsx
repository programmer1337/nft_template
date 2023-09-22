import pictureWithShadow from "./pictureWithShadow.module.css";

const PictureWithShadow = ({width, height, imgUrl}) => {
    return (
        <div className={pictureWithShadow.imageContainer}>
            <img
                style={{
                    width: `${width}`,
                    height: `${height}`,
                }}
                src={imgUrl}
                className={pictureWithShadow.backgroundBlur}
                alt={"shadow"}
            />
            <img
                style={{
                    width: `${width}`,
                    height: `${height}`
                }}
                src={imgUrl}
                className={pictureWithShadow.image}
                alt={"nft"}/>
        </div>
    )
}

export default PictureWithShadow;