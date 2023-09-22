import heroButton from "./heroButton.module.css";
const HeroButton = ({buttonTitle, border, backgroundColor, fontColor, padding}) => {
    return (
        <button className={heroButton.heroButton} style={{
            border: border,
            background: backgroundColor,
            color: fontColor,
            padding: padding,
        }}>
            {buttonTitle}
        </button>
    )

}

export default HeroButton;